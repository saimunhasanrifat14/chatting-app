import React from 'react'

const LoginBtn = ({btnContent}) => {
  return (
     <button className="w-full py-[10px] bg-blueColor text-[20px] font-semibold rounded-[9px] text-whateColor cursor-pointer">
          {btnContent}
        </button>
  )
}

export default LoginBtn