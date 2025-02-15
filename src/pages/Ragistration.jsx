import React, { useState } from "react";
import Banner from "../assets/ragistration/banner.png";
import { registrationInputData } from "../Library/Registration";
import { FaEye } from "react-icons/fa";
import RegistrationBtn from "./CommonComponent/RegistrationBtn";
import Login from "./Login";
import { Link } from "react-router-dom";
const Ragistration = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [eye, seteye] = useState(false);
  const item = registrationInputData();

  // error state
  const [emailError, setEmailError] = useState("");
  const [fullnameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  /**
   * todo : handleInput function implement
   * @param ({event})
   * return : null
   */

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name == "fullname") {
      setFullName(value);
    } else {
      setPassword(value);
    }
  };

  /**
   * todo : handleSignUp function implement
   * @param ()
   * motive :
   * return : null
   */

  const handleSignUp = () => {
    if (!email) {
      setEmailError("Email Missing");
    } else if (!fullname) {
      setFullNameError("Fullname Missing");
    } else if (!password) {
      setPasswordError("password Missing");
    }else{alert("done")}
  };

  /**
   * todo : handleEye function implement
   * @param ()
   */

  const handleEye = () => {
    seteye(!eye);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-[65%]">
          <div className="flex items-center justify-center h-full">
            <div>
              <h1 className="text-[34px] font-bold text-authHeading mb-[13px]">
                Get started with easily register
              </h1>
              <p className="text-[20px] text-[#0000006b] mb-[50px]">
                Free register and you can enjoy it
              </p>
              {item?.map((item) =>
                item.name == "password" ? (
                  <div
                    key={item.id}
                    className="flex flex-col relative mb-[50px] w-[400px]"
                  >
                    <label className="mb-[10px]" htmlFor="#">
                      Your {item.name} <span className="text-red-400">*</span>
                    </label>
                    <input
                      className="py-3 px-3 border-gray-300 border-[2px] border-solid rounded outline-none"
                      type={eye ? "text" : "password"}
                      name={item.name}
                      id={item.id}
                      placeholder={`Enter your ${item.name}`}
                      onChange={handleInput}
                    />
                    {item.name == "password" && password == "" ? (
                      <span className="text-red-600">{passwordError}</span>
                    ) : (
                      ""
                    )}
                    <span
                      className="absolute right-[13px] top-[52px] cursor-pointer"
                      onClick={handleEye}
                    >
                      <FaEye />
                    </span>
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className="flex flex-col mb-[20px] w-[400px]"
                  >
                    <label className="mb-[10px]" htmlFor="#">
                      Your {item.name} <span className="text-red-400">*</span>
                    </label>
                    <input
                      className="py-3 px-3 border-gray-300 border-[2px] border-solid rounded outline-none"
                      type={
                        item.name.toLocaleLowerCase() == "email"
                          ? "Email".toLocaleLowerCase()
                          : item.name == "fullname"
                          ? "text"
                          : "password"
                      }
                      name={item.name}
                      id={item.id}
                      placeholder={`Enter your ${item.name}`}
                      onChange={handleInput}
                    />
                    {item.name == "email" && email == "" ? (
                      <span className="text-red-600">{emailError}</span>
                    ) : (
                      ""
                    )}
                    {item.name == "fullname" && fullname == "" ? (
                      <span className="text-red-600">{fullnameError}</span>
                    ) : (
                      ""
                    )}
                  </div>
                )
              )}
              <div className="flex flex-col justify-center gap-[30px] w-[400px]">
                <RegistrationBtn
                  btnContent={"Sign up"}
                  onClick={handleSignUp}
                />
                <p className="text-center text-[13px]">
                  Already have an account ?{" "}
                  <span className="text-[#EA6C00] font-bold">
                    <Link to="/login">Sign In</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] flex justify-end">
          <img className="w-[530px]" src={Banner} alt={Banner} />
        </div>
      </div>
    </div>
  );
};

export default Ragistration;
