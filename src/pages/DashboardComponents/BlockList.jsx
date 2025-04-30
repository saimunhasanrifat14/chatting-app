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

const BlockList = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [blockUserList, setblockUserList] = useState([]);

  const BlockList = [
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

  useEffect(() => {
    const fatchdata = () => {
      const UserRef = ref(db, "block/");
      onValue(UserRef, (snapshot) => {
        let BlockList = [];
        snapshot.forEach((item) => {
          if (
            auth.currentUser.uid !== item.val().senderId &&
            item
              .val()
              .senderReciverUid.includes(
                auth.currentUser.uid.concat(item.val().senderId)
              )
          ) {
            BlockList.push({ ...item.val(), BlockKey: item.key });
          }
        });
        setblockUserList(BlockList);
      });
    };
    fatchdata();

    // clean up function
    return () => {
      const UserRef = ref(db, "block/");
      off(UserRef);
    };
  }, []);

  /**
   * todo: handleBlock function implement
   * @peram
   * return voit
   */
  const handleBlock = (blockedUser) => {
    console.log("from handleblock", blockedUser);

    // set(push(ref(db, "users/")), {
    //   username: blockedUser.senderUserName,
    //   email: blockedUser.senderEmail,
    //   profile_picture: blockedUser.senderProfilePic,
    //   userUid: blockedUser.senderId,
    // })
    // .then(() => {
    // });
    const dbref = ref(db, `block/${blockedUser.BlockKey}`);
    remove(dbref);
  };
  return (
    <>
      <div className="p-5 h-[100%]">
        <div className="h-[15%] flex justify-between items-center">
          <h2 className="text-lg font-semibold">Blocked Users</h2>
          <span className="text-blueColor text-[20px] cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
        <div className="h-[85%] overflow-auto [&::-webkit-scrollbar]:hidden">
          {blockUserList.length == 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-lg font-semibold">No blocked users</p>
              <p className="text-sm text-center max-w-xs mt-1">
                You haven’t blocked anyone yet. Blocked users will appear here.
              </p>
            </div>
          ) : (
            blockUserList?.map((BlockUser, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-3 border-b border-b-gray-300 last:border-b-0 "
              >
                <img
                  src={BlockUser.senderProfilePic}
                  alt={BlockUser.senderUserName}
                  className="w-12 h-12 rounded-full object-cover "
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {BlockUser.senderUserName}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {moment(BlockUser.createAt).fromNow()}
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleBlock(BlockUser);
                  }}
                  className="bg-blueColor mr-3 text-white px-4 py-1 rounded-lg font-semibold cursor-pointer"
                >
                  unblock
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BlockList;
