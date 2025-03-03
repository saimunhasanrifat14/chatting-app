import React from 'react'
import { PulseLoader } from 'react-spinners'


const LoginBtn = ({btnContent, onClick, loading}) => {
  return (
     <button onClick={onClick} className="w-full py-[10px] bg-blueColor text-[20px] font-semibold rounded-[9px] text-whateColor cursor-pointer">
          {loading ? <PulseLoader color="#ffffff" size={8} /> : btnContent}
        </button>
  )
}

export default LoginBtn