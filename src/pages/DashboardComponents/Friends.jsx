import React from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const Friends = () => {
    const Friends = [
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
    ]
  return (
    <>
          <div className="p-5 h-[100%]">
            <div className="h-[15%] flex justify-between items-center ">
              <h2 className="text-lg font-semibold">Friends</h2>
              <span className="text-blueColor text-[20px] cursor-pointer">
                <HiOutlineDotsVertical />
              </span>
            </div>
            <div className="h-[85%] overflow-auto [&::-webkit-scrollbar]:hidden">
              {Friends?.map((group, index) => (
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
                  <span className="mr-3 text-[12px] text-gray-400">
                  Today, 8:56pm
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
  )
}

export default Friends