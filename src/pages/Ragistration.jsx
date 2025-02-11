import React, { useState } from "react";
import Banner from "../assets/ragistration/banner.png";
import { registrationInputData } from "../Library/Registration";
import { FaEye } from "react-icons/fa";
const Ragistration = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [eye, seteye] = useState(false);
  const item = registrationInputData();

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
   * todo : handleEye function implement
   * @param ()
   */

  const handleEye = () => {
    seteye(!eye);
  }

  return (
    <div>
      <div className="flex">
        <div className="w-[60%]">
          <div className="flex items-center justify-center h-full">
            <div>
              <h1>Get started with easily register</h1>
              <p className="mb-3">Free register and you can enjoy it</p>
              {item?.map((item) =>
                item.name == "password" ? (
                  <div className="flex flex-col relative">
                    <label htmlFor="#">
                      Your {item.name} <span className="text-red-400">*</span>
                    </label>
                    <input
                      className="py-2 px-3 border border-gray-400 rounded"
                      type={eye ? "text" : "password"}
                      name={item.name}
                      id={item.id}
                      placeholder={`Enter your ${item.name}`}
                      onChange={handleInput}
                    />
                    <span
                      className="absolute right-[10px] top-[36px] cursor-pointer"
                      onClick={handleEye}
                    >
                      <FaEye />
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <label htmlFor="#">
                      Your {item.name} <span className="text-red-400">*</span>
                    </label>
                    <input
                      className="py-2 px-3 border border-gray-400 rounded"
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
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <img src={Banner} alt={Banner} />
        </div>
      </div>
    </div>
  );
};

export default Ragistration;
