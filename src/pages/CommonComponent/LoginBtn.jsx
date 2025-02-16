import React from 'react'

const LoginBtn = ({btnContent, onClick}) => {
  return (
     <button onClick={onClick} className="w-full py-[10px] bg-blueColor text-[20px] font-semibold rounded-[9px] text-whateColor cursor-pointer">
          {btnContent}
        </button>
  )
}

export default LoginBtn