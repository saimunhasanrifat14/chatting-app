import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ChatList = () => {
  return (
    <>
      <div className="w-full h-full p-8 flex flex-col justify-between">
        <div className="chatTop h-[10%] pb-2 border-b-2 border-b-gray-300 flex justify-between items-center">
          <div className="flex items-center gap-6 ">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile picture"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="">
              <h3 className="font-semibold text-[22px] text-gray-900">
                Swathi{" "}
              </h3>
              <p className="text-gray-500 text-sm">Online</p>
            </div>
          </div>
          <span className="text-blueColor text-[22px] cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
        <div className="chatMain h-[50%] "></div>
        <div className="chatBottom h-[10%]  border-t-2 border-t-gray-300"></div>
      </div>
    </>
  );
};

export default ChatList;
