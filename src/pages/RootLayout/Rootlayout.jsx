import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sideber from "../DashboardComponents/Sideber";
import Error from "../404Error/Error";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Rootlayout = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [error404, seterror404] = useState(false);
  
  const [isuserVerified , setisuserVerified] = useState(false)


  useEffect(()=>{
    onAuthStateChanged(auth ,(user)=>{
      if(user.emailVerified){
        setisuserVerified(user.emailVerified)
      }else{
        navigate("/login")
      }
    })
  }, [])
  return (
    <>
       { isuserVerified ? (
          <div className="p-[30px] w-full h-dvh flex gap-[30px]">
          <Sideber />
          <div className="main w-[90%] h-full flex flex-wrap justify-between gap-y-[25px]">
            <Outlet />
          </div>
        </div>
        ) : (
          <Error/>
        )}
      </>
  )
};

export default Rootlayout;
