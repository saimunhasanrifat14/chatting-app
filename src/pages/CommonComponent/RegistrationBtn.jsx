import { button } from "@material-tailwind/react";
import React from "react";

const RegistrationBtn = ({ btnContent, onClick }) => {
  return (
    <button onClick={onClick} className="w-full py-[10px] bg-blueColor text-[20px] font-semibold rounded-[86px] text-whateColor cursor-pointer">
      {btnContent}
    </button>
  );
};

export default RegistrationBtn;
