import React from "react";
import background from "../assets/home/background.jpg";
import banner from "../assets/home/banner.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  const menuItem = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Project",
    },
  ];
  return (
    <>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
        <nav className="px-[50px] py-[20px] flex justify-between items-center ">
          <h2 className="font-semibold text-[30px] text-white">CHAT</h2>
          <div>
            <ul className="flex gap-7 py-[10px] px-[30px] bg-white rounded-4xl font-semibold drop-shadow-2xl cursor-pointer">
              {menuItem.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <span className="mr-3 text-white font-semibold cursor-pointer">
              <Link to="/login">Log In</Link>
            </span>
            <span className="py-[10px] px-[15px] bg-white rounded-4xl font-semibold cursor-pointer hover:bg-black hover:text-white transition duration-500">
              <Link to="/Ragistration">Sign In</Link>
            </span>
          </div>
        </nav>
        <div className="mt-[200px] flex flex-col justify-center items-center">
          <h1 className="text-[100px] text-white font-sans mb-[20px]">Chatting App</h1>
          <button className="py-[6px] px-[30px] bg-blueColor text-white rounded-4xl cursor-pointer font-semibold hover:bg-white hover:text-black transition duration-500">
              <Link to="/Ragistration">Lets start</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
