import React from "react";
import Sideber from "./DashboardComponents/Sideber";
import GroupList from "./DashboardComponents/GroupList";

const Dashboard = () => {
  return (
    <>
      <div className="mainItem w-[32%]  h-[370px] flex flex-col justify-between gap-5">
        <GroupList/>
      </div>
      <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
      <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
      <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
      <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
      <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
    </>
  );
};

export default Dashboard;
