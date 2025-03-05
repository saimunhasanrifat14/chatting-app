import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="p-[30px] w-full h-dvh flex gap-[30px]">
        <div className="sidebar bg-gray-200 w-[12%] h-full rounded-2xl shadow-lg border-gray-200 border-[1px] border-solid"></div>
        <div className="main w-[90%] h-full flex flex-wrap justify-between gap-y-[25px]">
            <div className="mainItem w-[32%]  h-[370px] flex flex-col justify-between gap-5">
              <div className="bg-gray-200 rounded-2xl h-[60px] shadow-lg border-gray-200 border-[1px] border-solid">
                
              </div>
              <div className="bg-gray-200 h-[88%] rounded-2xl shadow-lg border-gray-200 border-[1px] border-solid"></div>
            </div>
            <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
            <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
            <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
            <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
            <div className="mainItem w-[32%] h-[370px] rounded-2xl bg-gray-200 shadow-lg border-gray-200 border-[1px] border-solid"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
