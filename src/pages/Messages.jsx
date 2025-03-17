import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import Groups from "./MessagesComponent/Groups";
import Friends from "./MessagesComponent/Friends";
import ChatList from "./MessagesComponent/chatList";

const Messages = () => {
  return (
    <div className="flex justify-between rounded-2xl w-full h-full gap-[2%]">
      <div className="h-[100%] w-[30%] flex flex-col justify-between gap-[4%]">
        <div className="h-[48%]">
          <Groups />
        </div>
        <div className="h-[48%] rounded-2xl shadow-lg">
          <Friends />
        </div>
      </div>
      <div className="w-[70%] rounded-2xl shadow-lg">
        <ChatList/>
      </div>
    </div>
  );
};

export default Messages;
