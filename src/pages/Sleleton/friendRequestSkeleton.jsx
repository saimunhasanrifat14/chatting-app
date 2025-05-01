import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const friendRequestSkeleton = () => {
  return (
    <div className="p-5 h-[370px]">
      <div className="h-[15%] flex justify-between items-center">
        <h2 className="text-lg font-semibold">Friend Request</h2>
        <span className="text-blueColor text-[20px] cursor-pointer">
          <HiOutlineDotsVertical />
        </span>
      </div>

      <div className="h-[85%] overflow-auto [&::-webkit-scrollbar]:hidden">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-3 border-b border-b-gray-300 last:border-b-0 animate-pulse"
          >
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-8 bg-gray-300 rounded-lg" />
              <div className="w-16 h-8 bg-gray-200 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default friendRequestSkeleton;
