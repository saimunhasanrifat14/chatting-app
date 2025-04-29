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

const Friends = () => {
  const Friends = [
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
  const [FriendSList, setFriendSList] = useState([]);

  useEffect(() => {
    const fatchdata = () => {
      const UserRef = ref(db, "Friends/");
      onValue(UserRef, (snapshot) => {
        let FRList = [];
        snapshot.forEach((item) => {
          if (auth.currentUser.uid !== item.val().senderId) {
            FRList.push({ ...item.val(), FriendsKey: item.key });
          }
        });
        setFriendSList(FRList);
      });
    };
    fatchdata();

    // clean up function
    return () => {
      const UserRef = ref(db, "Friends/");
      off(UserRef);
    };
  }, []);
  console.log("friendsList", FriendSList);

  return (
    <>
      <div className="p-5 h-[100%]">
        <div className="h-[15%] flex justify-between items-center ">
          <h2 className="text-lg font-semibold">Friends</h2>
          <span className="text-blueColor text-[20px] cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
        <div className="h-[85%] overflow-auto [&::-webkit-scrollbar]:hidden">
          {FriendSList?.length == 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-lg font-semibold">No friends yet</p>
              <p className="text-sm text-center max-w-xs mt-1">
                You don't have any friends here. Try connecting with people or
                wait for friend requests!
              </p>
            </div>
          ) : (
            FriendSList?.map((friend, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-3 border-b border-b-gray-300 last:border-b-0 "
              >
                <img
                  src={friend.senderProfilePic}
                  alt={friend.senderUserName}
                  className="w-12 h-12 rounded-full object-cover "
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {friend.senderUserName}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {moment(friend.createAt).fromNow()}
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleAccept(group);
                  }}
                  className="bg-red-400  text-white px-4 py-1 rounded-lg font-semibold cursor-pointer"
                >
                  Block
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Friends;
