import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const GroupList = () => {
  const groups = [
    {
      name: "Friends Reunion",
      message: "Hi Guys, Wassup!",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Friends Forever",
      message: "Good to see you.",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Crazy Cousins",
      message: "What plans today?",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Crazy Cousins",
      message: "What plans today?",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Crazy Cousins",
      message: "What plans today?",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Crazy Cousins",
      message: "What plans today?",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Crazy Cousins",
      message: "What plans today?",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  ];
  return (
    <div className="h-[100%] flex flex-col justify-between">
      <div className="bg-white rounded-2xl h-[13%] shadow-lg flex items-center justify-center px-[15px]">
        <div className="relative w-full flex items-center">
          <span className="flex absolute text-[20px] left-0 items-center pl-3 pointer-events-none">
            <IoSearch />
          </span>
          <input
            type="text"
            id="voice-search"
            className=" text-gray-900 text-sm block w-full pl-[50px] p-2.5 focus-visible:outline-none"
            placeholder="Search"
            required=""
          />
          <span className="text-blueColor flex absolute text-[18px] right-0 items-center pr-3 cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
      </div>
      <div className="bg-white px-5 pb-5 pt-3 h-[80%] rounded-2xl shadow-lg">
        <div className="flex justify-between items-center h-[20%]">
          <h2 className="text-lg font-semibold">Groups List</h2>
          <span className="text-blueColor text-[20px] cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
        <div className="h-[80%] overflow-auto [&::-webkit-scrollbar]:hidden">
          {groups?.map((group, index) => (
            <div
              key={index}
              className="flex items-center gap-4 py-3 border-b border-b-gray-300 last:border-b-0 "
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-12 h-12 rounded-full object-cover "
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{group.name}</h3>
                <p className="text-gray-500 text-sm">{group.message}</p>
              </div>
              <button className="bg-blueColor mr-3 text-white px-5 py-1 rounded-lg font-semibold cursor-pointer">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupList;
