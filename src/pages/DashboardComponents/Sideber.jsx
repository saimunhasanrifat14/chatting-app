import React from "react";
import logo from "../../assets/dashboard/Ellipse1.png";
import { FaCommentDots, FaRegBell, FaSignOutAlt } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sideber = () => {
  const location = useLocation();
  console.log(location.pathname);
  const navigationIcon = [
    {
      id: 1,
      path : "/dashboard",
      icon: <AiOutlineHome />,
    },
    {
      id: 2,
      path : "/dashboard/messages",
      icon: <FaCommentDots />,
    },
    {
      id: 3,
      path : "/dashboard/notification",
      icon: <FaRegBell />,
    },
    {
      id: 4,
      path : "/dashboard/settings",
      icon: <IoSettingsOutline />,
    },
  ];

  
  return (
    <div className="sidebar py-6 flex flex-col items-center justify-between bg-blueColor w-[12%] h-full rounded-2xl shadow-lg border-gray-200 border-[1px] border-solid">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="relative group w-[100px] h-[100px] rounded-full overflow-hidden">
          <img
            className="relative group w-[100px] h-[100px] rounded-full overflow-hidden"
            src={logo}
            alt=""
          />
          <div className="cursor-pointer absolute rounded-full inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <span className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl hidden group-hover:block">
            <FiUpload />
          </span>
        </div>
        <div className="menu w-full flex flex-col items-center justify-center gap-[20px] mt-[60px] ">
          {navigationIcon?.map((item, index) => (
            <Link to={item.path} className={location.pathname == item.path ? ("active w-full py-[15px] flex justify-center text-[40px] text-[#BAD1FF] cursor-pointer") : ("w-full py-[15px] flex justify-center text-[40px] text-[#BAD1FF] cursor-pointer")} key={item.id}>{item.icon}</Link>
          ))}
        </div>
      </div>
      <div className="signout text-white text-[40px] py-[7px] w-full flex justify-center">
        <Link to={"/Ragistration"} className="cursor-pointer p-2">
          <FaSignOutAlt />
        </Link>
      </div>
    </div>
  );
};

export default Sideber;
