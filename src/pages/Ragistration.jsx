import React, { useState } from "react";
import Banner from "../assets/ragistration/banner.png";
import { registrationInputData } from "../Library/Registration";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegistrationBtn from "./CommonComponent/RegistrationBtn";
import Login from "./Login";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Ragistration = () => {
  const auth = getAuth();
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
    } else {
      createUserWithEmailAndPassword(auth , email , password).then((userinfo)=>{
        console.log("user crated success " , userinfo);
      }).catch((err)=>{
        console.log("error is", err);
        
      })
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
              {item?.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col mb-[20px] w-[400px] relative"
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
                        : eye
                        ? "text"
                        : "password"
                    }
                    name={item.name}
                    id={item.id}
                    placeholder={`Enter your ${item.name}`}
                    onChange={handleInput}
                  />
                  {item.name === "password" && password !== "" ? (
                    <span
                      className="absolute right-[15px] top-[50px] cursor-pointer text-[#00000089] text-xl"
                      onClick={handleEye}
                    >
                      {eye == true ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  ) : (
                    ""
                  )}
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
                  {item.name == "password" && password == "" ? (
                    <span className="text-red-600">{passwordError}</span>
                  ) : (
                    ""
                  )}
                </div>
              ))}
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
