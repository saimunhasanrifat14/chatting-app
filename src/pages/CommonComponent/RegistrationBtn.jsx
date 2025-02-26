import { button } from "@material-tailwind/react";
import React from "react";
import { PulseLoader } from "react-spinners";


const RegistrationBtn = ({ btnContent, onClick, loading  }) => {
  return (
    <button onClick={onClick} disabled={loading} className="w-full py-[10px] bg-blueColor text-[20px] font-semibold rounded-[86px] text-whateColor cursor-pointer">
      {loading ? <PulseLoader color="#ffffff" size={8} /> : btnContent}
    </button>
  );
};

export default RegistrationBtn;
