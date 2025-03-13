import React from "react";
import Sideber from "./DashboardComponents/Sideber";
import GroupList from "./DashboardComponents/GroupList";
import FriendRequast from "./DashboardComponents/FriendRequast";
import BlockList from "./DashboardComponents/BlockList";
import UserList from "./DashboardComponents/UserList";

const Dashboard = () => {
  return (
    <>
      <div className="mainItem w-[34%]  h-[370px] flex flex-col justify-between gap-5">
        <GroupList/>
      </div>
      <div className="mainItem w-[31%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
      <div className="mainItem w-[31%] h-[370px] rounded-2xl bg-white shadow-lg">
        <UserList/>
      </div>
      <div className="mainItem w-[34%] h-[370px] rounded-2xl bg-white shadow-lg">
        <FriendRequast/>
      </div>
      <div className="mainItem w-[31%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
      <div className="mainItem w-[31%] h-[370px] rounded-2xl bg-white shadow-lg">
        <BlockList/>
      </div>
    </>
  );
};

export default Dashboard;
