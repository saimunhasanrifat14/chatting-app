import React, { useEffect, useState } from "react";
import logo from "../../assets/dashboard/Ellipse1.png";
import { FaCommentDots, FaRegBell, FaSignOutAlt } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, onValue, Database, update } from "firebase/database";

const Sideber = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [userdata, setuserdata] = useState({});
  const db = getDatabase();
  const location = useLocation();
  const navigationIcon = [
    {
      id: 1,
      path: "/dashboard",
      icon: <AiOutlineHome />,
    },
    {
      id: 2,
      path: "/dashboard/messages",
      icon: <FaCommentDots />,
    },
    {
      id: 3,
      path: "/dashboard/notification",
      icon: <FaRegBell />,
    },
    {
      id: 4,
      path: "/dashboard/settings",
      icon: <IoSettingsOutline />,
    },
  ];

  /**
   * todo : handleUploadProfile function implement
   * @param ()
   */
  const handleUploadProfile = () => {
    cloudinary.openUploadWidget(
      {
        cloudName: "df6bqehwu",
        uploadPreset: "ChattingApp",
        sources: ["local", "image_search"],
        googleApiKey: "AIzaSyDNBBcpHmRv8loQmTw7MkciBDPtsipumAM",
        searchBySites: ["all", "cloudinary.com"],
        searchByRights: true,
      },
      (error, result) => {
        if (error) {
          throw new Error("Failed to upload profile picture");
        } else if (result.event === "success") {
          setProfilePic(result.info.secure_url);
          const updates = {
            profile_picture: result?.info?.secure_url,
          };
          update(ref(db , `users/${userdata.userkey}`), updates);
        }
      }
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/latest/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    // const savedProfilePic = localStorage.getItem("profilePic");
    // if (savedProfilePic) {
    //   setProfilePic(savedProfilePic);
    // }
  }, []);

  /**
   * todo : handleLogout function implement
   * @param ()
   */
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log("error from logout", err);
      });
  };
  /**
   * todo : datafatch implement
   * @param ()
   */
  useEffect(() => {
    const fatchdata = () => {
      const UserRef = ref(db, "users/");
      onValue(UserRef, (snapshot) => {
        let userblackinfo = null;
        snapshot.forEach((item) => {
          if (item.val().userUid === auth.currentUser.uid) {
            userblackinfo = { ...item.val(), userkey: item.key };
          }
        });
        setuserdata(userblackinfo);
      });
    };
    fatchdata();
  }, []);

  return (
    <div className="sidebar py-6 flex flex-col items-center justify-between bg-blueColor w-[12%] h-full rounded-2xl shadow-lg border-gray-200 border-[1px] border-solid">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="relative group w-[100px] h-[100px] rounded-full overflow-hidden">
          <img
            className="relative group w-[100px] h-[100px] rounded-full overflow-hidden"
            src={
              userdata.profile_picture ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt=""
          />
          <div className="cursor-pointer absolute rounded-full inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <span
            onClick={handleUploadProfile}
            className="cursor-pointer p-8 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl hidden group-hover:block"
          >
            <FiUpload />
          </span>
        </div>
        <div className="py-2">
          <h2 className="text-[18px] text-white font-semibold">
            {userdata.username || "UserName"}
          </h2>
        </div>
        <div className="menu w-full flex flex-col items-center justify-center gap-[20px] mt-[40px] ">
          {navigationIcon?.map((item, index) => (
            <Link
              to={item.path}
              className={
                location.pathname == item.path
                  ? "active w-full py-[15px] flex justify-center text-[40px] text-[#BAD1FF] cursor-pointer"
                  : "w-full py-[15px] flex justify-center text-[40px] text-[#BAD1FF] cursor-pointer"
              }
              key={item.id}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="signout text-white text-[40px] py-[7px] w-full flex justify-center">
        <Link onClick={handleLogout} className="cursor-pointer p-2">
          <FaSignOutAlt />
        </Link>
      </div>
    </div>
  );
};

export default Sideber;
