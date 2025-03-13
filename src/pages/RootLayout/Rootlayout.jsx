import React from 'react'
import { Outlet } from 'react-router-dom'
import Sideber from '../DashboardComponents/Sideber'

const Rootlayout = () => {
  return (
    <>
      <div className="p-[30px] w-full h-dvh flex gap-[30px]">
      <Sideber/>
        <div className="main w-[90%] h-full flex flex-wrap justify-between gap-y-[25px]">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Rootlayout