import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { getDatabase, ref, onValue, off, push, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import Userskeleton from "../Sleleton/Userskeleton";
import moment from "moment";
import { MdFileDownloadDone } from "react-icons/md";

const UserList = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [userlist, setuserlist] = useState([]);
  const [userFriendRequestList, setuserFriendRequestList] = useState([]);
  const [loading, setloading] = useState(false);
  const [LogedUser, setLogedUser] = useState({});

  const UserList = [
    {
      name: "Raghav",
      message: "Dinner?",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Swathi",
      message: "Sure!.",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Kiran",
      message: "Hi.....",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Raghav Rathe",
      message: "Hello.....",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Swathi",
      message: "Sure!.",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Kiran",
      message: "Hi.....",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Raghav Rathe",
      message: "Hello.....",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  ];

  // now fatch the friendRequest data
  useEffect(() => {
    const fatchFriendRequestData = () => {
      const UserRef = ref(db, "friendRequest/");
      onValue(UserRef, (snapshot) => {
        let FriendRequestList = [];
        snapshot.forEach((item) => {
          if (
            auth.currentUser.uid === item.val().senderId ||
            LogedUser.userUid === item.val().senderId
          ) {
            FriendRequestList.push(
              auth.currentUser.uid.concat(item.val().reciverId)
            );
          } else {
            console.log(
              "error from auth.currentUser.uid.concat(item.val().reciverId)"
            );
          }
        });
        setuserFriendRequestList(FriendRequestList);
      });
    };
    fatchFriendRequestData();

    // clean up function
    return () => {
      const UserRef = ref(db, "friendRequest/");
      off(UserRef);
    };
  }, []);

  /**
   * todo : handleLogout function implement
   * @param ()
   */
  useEffect(() => {
    const fatchdata = () => {
      setloading(true);
      const UserRef = ref(db, "users/");
      onValue(UserRef, (snapshot) => {
        let userblacklist = [];
        snapshot.forEach((item) => {
          if (item.val().userUid !== auth.currentUser.uid) {
            userblacklist.push({ ...item.val(), userkey: item.key });
          } else {
            let user = Object.assign({ ...item.val(), userkey: item.key });
            setLogedUser(user);
          }
        });
        setuserlist(userblacklist);
        setloading(false);
      });
    };
    fatchdata();

    // clean up function
    return () => {
      const UserRef = ref(db, "users/");
      off(UserRef);
    };
  }, []);

  if (loading) {
    return (
      <div className="overflow-hidden">
        <Userskeleton />
      </div>
    );
  }

  /**
   * todo: handleFriendRequest funtion emplement
   * @peram item
   * return voit
   */
  const handleFriendRequest = (item) => {
    set(push(ref(db, "friendRequest/")), {
      senderUserName: LogedUser.username,
      senderEmail: LogedUser.email,
      senderProfilePic: LogedUser.profile_picture,
      senderId: LogedUser.userUid,
      senderUserKey: LogedUser.userkey,
      reciverUserName: item.username,
      reciverEmail: item.email,
      reciverProfilePic: item.profile_picture,
      reciverId: item.userUid,
      reciverUserKey: item.userkey,
      createAt: moment().format(" MMM DD YYYY, h:mm:ss"),
    })
      .then(() => {
        set(push(ref(db, "notification/")), {
          notificationMsg: `${LogedUser.username} send a Friend request`,
          senderProfilePic: LogedUser.profile_picture,
          createAt: moment().format(" MMM DD YYYY, h:mm:ss"),
        });
      })
      .then(() => {
        console.log("successfully send friend request");
      })
      .catch(() => {
        console.error("error from sending friend request");
      });
  };

  return (
    <>
      <div className="p-5 h-[100%]">
        <div className="h-[15%] flex justify-between items-center">
          <h2 className="text-lg font-semibold">User List</h2>
          <span className="text-blueColor text-[20px] cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
        <div className="h-[85%] overflow-auto [&::-webkit-scrollbar]:hidden">
          {userlist.length == 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-lg font-semibold">No users available</p>
              <p className="text-sm text-center max-w-xs mt-1">
                No users found. Please check back later or try searching for
                someone.
              </p>
            </div>
          ) : (
            userlist?.map((item, index) => (
              <div
                key={item.userUid}
                className="flex items-center gap-4 py-3 border-b border-b-gray-300 last:border-b-0 "
              >
                <img
                  src={item.profile_picture}
                  alt={item.username}
                  className="w-12 h-12 rounded-full object-cover "
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {item.username}
                  </h3>
                  <p className="text-gray-500 text-sm">Today, 8:56pm</p>
                </div>

                {userFriendRequestList.includes(
                  auth.currentUser.uid.concat(item.userUid)
                ) ? (
                  <button className="bg-blueColor mr-3 text-white p-3 rounded-lg font-semibold">
                    <MdFileDownloadDone />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleFriendRequest(item);
                    }}
                    className="bg-blueColor mr-3 text-white p-3 rounded-lg font-semibold cursor-pointer"
                  >
                    <FaPlus />
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default UserList;
