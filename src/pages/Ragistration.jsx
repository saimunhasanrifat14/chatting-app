import React, { useState } from "react";
import Banner from "../assets/ragistration/banner.png";
import { registrationInputData } from "../Library/Registration";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegistrationBtn from "./CommonComponent/RegistrationBtn";
import Login from "./Login";
import { Link , useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";


const Ragistration = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [eye, seteye] = useState(false);
  const item = registrationInputData();
  const navigate = useNavigate();

  // error state
  const [emailError, setEmailError] = useState("");
  const [fullnameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const [Error, setError] = useState("");
  /**
   * todo : handleInput function implement
   * @param ({event})
   * return : null
   */

  const handleInput = (event) => {
    console.log(event);

    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name == "fullname") {
      setFullName(value);
    } else {
      setPassword(value);
      setPasswordError("");
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
      setloading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          updateProfile(auth.currentUser, {
            displayName: fullname || "unknon user",
          });
          console.log("user created successfully ", userinfo);
        })
        .then(() => {
          toast.success(`${fullname} Registration Sucessfull`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          return sendEmailVerification(auth.currentUser);
        })
        .then((mailInfo) => {
          set(push(ref(db, 'users/' )), {
            username: auth.currentUser.displayName || fullname,
            email: auth.currentUser.email || email,
            profile_picture : "profile picture",
            userUid : auth.currentUser.uid
          });
          console.log("mail sended ", mailInfo);
          setEmail("");
          setFullName("");
          setPassword("");
          setEmailError("");
          setFullNameError("");
          setPasswordError("");
          navigate('/dashboard');
        })
        .catch((err) => {
          console.log("error is", err.code);
          if (err.code === "auth/email-already-in-use") {
            setEmailError("This email is already registered.");
          } else if (err.code === "auth/weak-password") {
            setPasswordError("Password should be at least 6 characters long.");
          } else if (err.code === "auth/invalid-email") {
            setEmailError("Please enter a valid email.");
          } else {
            setEmailError("Something went wrong. Please try again.");
          }
        })
        .finally(() => {
          setloading(false);
        });
    }
  };
  console.log(auth.currentUser);

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
                    value={
                      item.name === "email"
                        ? email
                        : item.name === "fullname"
                        ? fullname
                        : password
                    }
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
                  {item.name === "fullname" && fullname === "" ? (
                    <span className="text-red-600 text-[12px]">
                      {fullnameError}
                    </span>
                  ) : (
                    ""
                  )}
                  {item.name === "email" && emailError !== "" ? (
                    <span className="text-red-600 text-[12px]">
                      {emailError}
                    </span>
                  ) : (
                    ""
                  )}
                  {item.name === "password" && passwordError !== "" ? (
                    <span className="text-red-600 text-[12px]">
                      {passwordError}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <div className="flex flex-col justify-center gap-[30px] w-[400px]">
                {loading ? (
                  <RegistrationBtn loading={loading} />
                ) : (
                  <RegistrationBtn
                    btnContent={"Sign up"}
                    onClick={handleSignUp}
                  />
                )}

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
