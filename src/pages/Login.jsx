import React, { useEffect, useState } from "react";
import loginBanner from "../assets/login/LoginBanner.jpg";
import { FcGoogle } from "react-icons/fc";
import { LoginInputData } from "../Library/Login";
import LoginBtn from "./CommonComponent/LoginBtn";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, onValue, off, push, ref, set } from "firebase/database";

const Login = () => {
  const db = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();

  const [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });
  const [logininfoerror, setlogininfoerror] = useState({
    emailError: "",
    passwordError: "",
    error: "",
  });

  const [loading, setloading] = useState(false);
  const item = LoginInputData();
  const [eye, seteye] = useState(false);
  const [userlist, setuserlist] = useState([]);
  let alreadyExists = false;

  /**
   * todo : handleInput function implement
   * @param ({event})
   * return : null
   */
  const handleInput = (event) => {
    const { name, value } = event.target;
    setlogininfo({
      ...logininfo,
      [name]: value,
    });
    setlogininfoerror({
      ...logininfoerror,
      emailError: "",
      passwordError: "",
      error: "",
    });
  };

  /**
   * todo : handerror function implement'
   * @param ({event})
   * return : null
   */
  const handleError = () => {
    const { email, password } = logininfo;
    if (!email) {
      setlogininfoerror({
        ...logininfoerror,
        emailError: "Email Missing",
      });
    } else if (!password) {
      setlogininfoerror({
        ...logininfoerror,
        passwordError: "Password Missing",
      });
    } else {
      setloading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          logininfo.email = "";
          logininfo.password = "";
          logininfoerror.emailError = "";
          logininfoerror.passwordError = "";
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err.code);
          if (err.code === "auth/network-request-failed") {
            setlogininfoerror({
              ...logininfoerror,
              error: "Network error! try again.",
            });
          } else if (err.code === "auth/invalid-email") {
            setlogininfoerror({
              ...logininfoerror,
              emailError: "Invalid email format.",
            });
          } else {
            setlogininfoerror({
              ...logininfoerror,
              error: "Something went wrong. Please try again.",
            });
          }
        })
        .finally(() => {
          setloading(false);
        });
    }
  };

  /**
   * todo : handleEye function implement
   * @param ()
   */
  const handleEye = () => {
    seteye(!eye);
  };
  /**
   * todo : Fatch users data from database
   * @param ()
   */
  useEffect(() => {
    const fatchdata = () => {
      const UserRef = ref(db, "users/");
      onValue(UserRef, (snapshot) => {
        let userblacklist = [];
        snapshot.forEach((item) => {
          userblacklist.push({ ...item.val(), userkey: item.key });
        });
        setuserlist(userblacklist);
      });
    };
    fatchdata();

    // clean up function
    return () => {
      const UserRef = ref(db, "users/");
      off(UserRef);
    };
  }, []);
  console.log("allUser" , userlist);

  /**
   * todo : handleEye function implement
   * @param ()
   */
  const loginwithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userinfo) => {
        const { user } = userinfo;
        console.log("login user", user);
        
        // chack if current login user alradyExist
        const isMatched = userlist.some(alluser => alluser.email === user.email);        
        if(!isMatched){
          set(push(ref(db, "users/")), {
            username: user.displayName || "Name Missing",
            email: user.email || "email missing",
            profile_picture: user.photoURL,
            userUid: user.uid,
          });
        }
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  return (
    <div className="flex">
      <div className="w-[65%]">
        <div className="flex items-center justify-center h-full">
          <div>
            <h1 className="text-[34px] font-bold text-authHeading">
              Login to your account!
            </h1>
            {logininfoerror.error !== "" ? (
              <div className="w-full flex justify-center py-2">
                <span className="text-red-600">{logininfoerror.error}</span>
              </div>
            ) : (
              ""
            )}
            <a
              className="flex items-center justify-center gap-2 text-[14px] mt-[25px] py-[15px] px-[30px] border-gray-300 border-[2px] border-solid rounded-xl font-semibold mb-[30px]"
              href="#"
              onClick={loginwithGoogle}
            >
              <span className="text-[20px]">
                <FcGoogle />
              </span>
              Login with Google
            </a>
            <form onSubmit={(e) => e.preventDefault()}>
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
                    value={
                      item.name == "email"
                        ? logininfo.email
                        : logininfo.password
                    }
                    placeholder={
                      item.name == "email"
                        ? "Enter Your Email"
                        : "Enter Your Password"
                    }
                    onChange={handleInput}
                  />
                  {item.name === "email" && logininfoerror.emailError !== "" ? (
                    <span className="text-red-600">
                      {logininfoerror.emailError}
                    </span>
                  ) : (
                    ""
                  )}
                  {item.name === "password" &&
                  logininfoerror.passwordError !== "" ? (
                    <span className="text-red-600">
                      {logininfoerror.passwordError}
                    </span>
                  ) : (
                    ""
                  )}
                  {item.name === "password" && logininfo.password !== "" ? (
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
              {loading ? (
                <LoginBtn loading={loading} />
              ) : (
                <LoginBtn
                  btnContent="Login to Continue"
                  onClick={handleError}
                />
              )}
            </form>
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
