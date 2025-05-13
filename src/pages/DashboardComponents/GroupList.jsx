import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCloseCircle, IoSearch } from "react-icons/io5";
import Modal from "react-modal";
import { closeModal, openModal } from "../../Utilities/Modal.utils";
import { handleInputChange } from "../../Utilities/GLInputChange.utils";
import { handleCreateGroupe } from "../../Utilities/CreateGroupeBtn.utils";

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
  ];
  const [loading, setloading] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [groupinfo, setGroupInfo] = useState({
    Name: "",
    TagName: "",
    Profile: "",
  });
  const [groupError, setGroupError] = useState({});

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "30%",
      transform: "translate(-50%, -50%)",
      border: "none",
      boxShadow: "0 0px 50px rgba(0, 0, 0, 0.15)",
    },
  };

  return (
    <>
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
            <h2 className="flex items-center gap-3 text-lg font-semibold">
              Groups List{" "}
              <span
                onClick={() => openModal(setIsOpen)}
                className=" text-[25px] text-gray-700 cursor-pointer"
              >
                <FaCirclePlus />
              </span>
            </h2>
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
      {/* modal part */}
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => closeModal(setIsOpen)}
          style={customStyles}
        >
          <div className="w-full flex items-end justify-end ">
            <button
              className="text-[30px] text-red-400 cursor-pointer"
              onClick={() => closeModal(setIsOpen)}
            >
              <IoCloseCircle />
            </button>
          </div>
          <form>
            <h2 className="text-center text-[25px] font-semibold mb-5">
              Create Group
            </h2>
            <div className="flex flex-col gap-3 mb-5">
              <div className="w-full">
                <input
                  onChange={(event) =>
                    handleInputChange(event, setGroupInfo, setGroupError)
                  }
                  placeholder="Group Name"
                  name="Name"
                  className="bg-gray-200 py-2 px-3 rounded w-full"
                  type="text"
                />
                <p className="text-[14px] text-red-400 mt-px-[2px]">
                  {groupError && groupError.NameError}
                </p>
              </div>
              <div className="w-full">
                <input
                  onChange={(event) =>
                    handleInputChange(event, setGroupInfo, setGroupError)
                  }
                  placeholder="Group Tag Name"
                  name="TagName"
                  className="bg-gray-200 py-2 px-3 rounded w-full"
                  type="text"
                />
                <p className="text-[14px] text-red-400 mt-[2px]">
                  {groupError && groupError.TagNameError}
                </p>
              </div>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600 dark:hover:border-gray-500"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                    <p className="text-[12px] text-red-400 mt-1">
                      {groupError && groupError.ProfileError}
                    </p>
                  </div>
                  <input
                    onChange={(event) =>
                      handleInputChange(event, setGroupInfo, setGroupError)
                    }
                    name="Profile"
                    id="file-upload"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
              <button
                onClick={(event) =>
                  handleCreateGroupe(
                    event,
                    groupinfo,
                    setGroupInfo,
                    setGroupError,
                    setloading,
                    setIsOpen
                  )
                }
                className="py-3 bg-blueColor text-white rounded cursor-pointer "
              >
                {loading ? "..." : "Create"}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default GroupList;
