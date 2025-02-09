import React from "react";
import Banner from "../assets/ragistration/banner.png";
import { registrationInputData } from "../Library/Registration";
const Ragistration = () => {
  const item = registrationInputData();
  return (
    <div>
      <div className="flex">
        <div className="w-[60%]">
          <div className="flex items-center justify-center h-full">
            <div>
              <h1>Get started with easily register</h1>
              <p className="mb-3">Free register and you can enjoy it</p>
              {item?.map((item) => (
                <div className="flex flex-col">
                  <label htmlFor="#">
                    Your {item.name} <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-400 rounded"
                    type={
                      item.name.toLocaleLowerCase() == "email"
                        ? "Email"
                        : item.name.toLocaleLowerCase() == "fullname"
                        ? "text"
                        : "password"
                    }
                    name={item.name}
                    id={item.id}
                    placeholder={`Enter your ${item.name}`}
                  />
                </div>
              ))}
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
