import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  getDatabase,
  ref,
  onValue,
  off,
  push,
  set,
  remove,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import moment from "moment";
import FriendRequestSkeleton from "../Sleleton/friendRequestSkeleton"

const FriendRequast = () => {
  const groups = [
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
  const auth = getAuth();
  const db = getDatabase();
  const [loading, setloading] = useState(false);
  const [FriendRequestList, setFriendRequestList] = useState([]);
  

  useEffect(() => {
    const fatchdata = () => {
      setloading(true);
      const UserRef = ref(db, "friendRequest/");
      onValue(UserRef, (snapshot) => {
        let FRList = [];
        snapshot.forEach((item) => {
          if (auth.currentUser.uid === item.val().reciverId) {
            FRList.push({ ...item.val(), FriendRequastKey: item.key });
          }
        });
        setFriendRequestList(FRList);
        setloading(false);
      });
    };
    fatchdata();

    // clean up function
    return () => {
      const UserRef = ref(db, "friendRequest/");
      off(UserRef);
    };
  }, []);

  if (loading) {
    return (
      <div className="overflow-hidden">
        <FriendRequestSkeleton/>
      </div>
    );
  }

  const handleAccept = (FRitem) => {
    console.log("FrItem", FRitem);
    
    set(push(ref(db, "Friends/")), {
      ...FRitem,
      senderReciverUid: auth.currentUser.uid.concat(FRitem.senderId),
      createAt: moment().format(" MMM DD YYYY, h:mm:ss"),
    })
      .then(() => {
        set(push(ref(db, "notification/")), {
          notificationMsg: `${FRitem.reciverUserName} send a Friend request`,
          senderProfilePic: FRitem.reciverProfilePic,
          createAt: moment().format(" MMM DD YYYY, h:mm:ss"),
        });
      })
      .then(() => {
        const dbref = ref(db, `friendRequest/${FRitem.FriendRequastKey}`);
        remove(dbref);
      })
      .then(() => {

        console.log("successfully friend request accepted");
      })
      .catch(() => {
        console.error("error from sending friend request");
      });
  };
  const handleReject = (FRitem) => {
    const areYouSure = confirm("Are you sure you want to reject");
    const dbref = ref(db, `friendRequest/${FRitem.FriendRequastKey}`);
    remove(dbref);
  };

  return (
    <>
      <div className="p-5 h-[100%]">
        <div className="h-[15%] flex justify-between items-center">
          <h2 className="text-lg font-semibold">Friend Requst</h2>
          <span className="text-blueColor text-[20px] cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
        <div className="h-[85%] overflow-auto [&::-webkit-scrollbar]:hidden">
          {FriendRequestList.length == 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-lg font-semibold">No friend requests</p>
              <p className="text-sm text-center max-w-xs mt-1">
                You have no friend requests at the moment. Try inviting others
                or wait for new requests to appear!
              </p>
            </div>
          ) : (
            FriendRequestList?.map((group, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-3 border-b border-b-gray-300 last:border-b-0 "
              >
                <img
                  src={
                    group.senderProfilePic ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt={group.senderUserName}
                  className="w-12 h-12 rounded-full object-cover "
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {group.senderUserName}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {moment(group.createAt).fromNow()}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleAccept(group);
                    }}
                    className="bg-blueColor mr-3 text-white px-4 py-1 rounded-lg font-semibold cursor-pointer"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                      handleReject(group);
                    }}
                    className="bg-red-400 text-white px-4 py-1 rounded-lg font-semibold cursor-pointer"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FriendRequast;
