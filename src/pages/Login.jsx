import React from "react";
import loginBanner from "../assets/login/LoginBanner.jpg";
import { FcGoogle } from "react-icons/fc";
import { LoginInputData } from "../Library/Login";
import LoginBtn from "./CommonComponent/LoginBtn";
import { Link } from "react-router-dom";

const Login = () => {
  const item = LoginInputData();
  return (
    <div className="flex">
      <div className="w-[65%]">
        <div className="flex items-center justify-center h-full">
          <div>
            <h1 className="text-[34px] font-bold text-authHeading mb-[25px]">
              Login to your account!
            </h1>
            <a
              className="flex items-center justify-center gap-2 text-[14px] py-[15px] px-[30px] border-gray-300 border-[2px] border-solid rounded-xl font-semibold mb-[30px]"
              href="#"
            >
              <span className="text-[20px]">
                <FcGoogle />
              </span>
              Login with Google
            </a>
            {item?.map((item) => (
              <div className="flex flex-col mb-[40px] w-[400px]">
                <label className="text-[#03014c6f] text-[13px]" htmlFor="">
                  {item.name == "email" ? "Email Address" : "Password"}
                </label>
                <input
                  className="py-3 border-b-gray-300 border-b-[2px] border-b-solid outline-none placeholder:text-[#000000a9] "
                  type={item.name == "email" ? "email" : "password"}
                  id={item.id}
                  name={item.name}
                  placeholder={
                    item.name == "email"
                      ? "Enter Your Email"
                      : "Enter Your Password"
                  }
                />
              </div>
            ))}
            <LoginBtn btnContent="Login to Continue" />
            <div className="flex justify-center mt-[30px]">
              <p className="text-center text-[13px]">
                Don’t have an account ?{" "}
                <span className="text-[#EA6C00] font-bold">
                  <Link to="/Ragistration">Sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] flex justify-end">
        <img src={loginBanner} alt={loginBanner} />
      </div>
    </div>
  );
};

export default Login;
