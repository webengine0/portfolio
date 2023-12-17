import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

const Main = () => {
  return (
    <div id="Home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 select-none">
            lets Build Something together
          </p>
          <h1 className="text-gray-700 py-4 select-none">
            Hi, I'm <span className="text-[#5651e5]">AB</span>
          </h1>
          <h1 className="text-gray-700 uppercase select-none py-2">
            A front end developer
          </h1>
          <p className="text-gray-600 py-4 select-none max-w-[70%] m-auto">
            I'm a front end developer specializing in building (and occasional
            designing) exceptional digital experiences. Currently, I'm focused
            on building responsive front-end web applications while learning
            back-end technologies
          </p>
          <div className="flex justify-between items-center max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg p-6  shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg p-6 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg p-6 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg p-6 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
