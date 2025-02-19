import React, { useState } from "react";
import loginBanner from "../assets/login/LoginBanner.jpg";
import { FcGoogle } from "react-icons/fc";
import { LoginInputData } from "../Library/Login";
import LoginBtn from "./CommonComponent/LoginBtn";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const item = LoginInputData();
  const [eye, seteye] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  /**
   * todo : handerror function implement'
   * @param ({event})
   * return : null
   */

  const handleError = () => {
    email === ""
      ? setEmailError("Email missing")
      : password === ""
      ? setPasswordError("Password missing")
      : "";
  };
  /**
   * todo : handleInput function implement
   * @param ({event})
   * return : null
   */

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name == "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  /**
   * todo : handleEye function implement
   * @param ()
   */

  const handleEye = () => {
    seteye(!eye);
  };

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
              <div
                key={item.id}
                className="flex flex-col mb-[40px] w-[400px] relative"
              >
                <label className="text-[#03014c6f] text-[13px]" htmlFor="">
                  {item.name == "email" ? "Email Address" : "Password"}
                </label>
                <input
                  className="py-3 border-b-gray-300 border-b-[2px] border-b-solid outline-none placeholder:text-[#000000a9] "
                  type={
                    item.name == "email" ? "email" : eye ? "text" : "password"
                  }
                  id={item.id}
                  name={item.name}
                  placeholder={
                    item.name == "email"
                      ? "Enter Your Email"
                      : "Enter Your Password"
                  }
                  onChange={handleInput}
                />
                {item.name === "email" && email === "" ? (
                  <span className="text-red-600">{emailError}</span>
                ) : (
                  ""
                )}
                {item.name === "password" && password === "" ? (
                  <span className="text-red-600">{passwordError}</span>
                ) : (
                  ""
                )}
                {item.name === "password" && password !== "" ? (
                  <span
                    className="absolute right-[15px] top-[34px] cursor-pointer text-[#00000089] text-xl"
                    onClick={handleEye}
                  >
                    {eye == true ? <FaEye /> : <FaEyeSlash />}
                  </span>
                ) : (
                  ""
                )}
              </div>
            ))}
            <LoginBtn btnContent="Login to Continue" onClick={handleError} />
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
