import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { getDatabase, ref, onValue, off, push, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import moment from "moment";

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
          if(auth.currentUser.uid === item.val().reciverId){
            FRList.push({...item.val(), FriendRequastKey : item.key })
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
  console.log("frList", FriendRequestList);
  

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
          {FriendRequestList?.map((group, index) => (
            <div
              key={index}
              className="flex items-center gap-4 py-3 border-b border-b-gray-300 last:border-b-0 "
            >
              <img
                src={group.senderProfilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                alt={group.senderUserName}
                className="w-12 h-12 rounded-full object-cover "
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{group.senderUserName}</h3>
                <p className="text-gray-500 text-sm">{moment(group.createAt).fromNow()}</p>
              </div>
              <button className="bg-blueColor mr-3 text-white px-4 py-1 rounded-lg font-semibold cursor-pointer">
                Accept
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FriendRequast;
