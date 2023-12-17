"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    setNavBg("#ecf0f3");
    setLinkColor("#1f2937");
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full shadow-xl h-20 z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16  ">
        <Link href="/#Home">
          <Image
            src="/assets/navLogo.png"
            alt=""
            width="80"
            height="50"
            className="text-[#5651e5]"
          />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex select-none"
          >
            <Link href="/#Home">
              <li className="text-sm uppercase hover:border-b ">Home</li>
            </Link>
            <Link href="/#About">
              <li className="ml-10 text-sm uppercase hover:border-b ">About</li>
            </Link>
            <Link href="/#Skills">
              <li className="ml-10 text-sm uppercase hover:border-b ">
                Skills
              </li>
            </Link>
            <Link href="/#Projects">
              <li className="ml-10 text-sm uppercase hover:border-b ">
                Projects
              </li>
            </Link>
            <Link href="/#Contact">
              <li className="ml-10 text-sm uppercase hover:border-b ">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            {" "}
            <AiOutlineMenu />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full bg-black/70 ease-in duration-500 overflow-hidden "
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-500%] h-screen p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="/assets/navLogo.png"
                  alt=""
                  width="50"
                  height="35"
                />
              </Link>
            </div>
            <div
              onClick={handleNav}
              className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="py-4 w-[85%] md:w-[90%]">
              Let's build something legendary together
            </p>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/#Home">
                <li onClick={() => setNav(false)} className=" py-4 text-sm ">
                  Home
                </li>
              </Link>
              <Link href="/#About">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  About
                </li>
              </Link>
              <Link href="/#Skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Skills
                </li>
              </Link>
              <Link href="/#Pojects">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Projects
                </li>
              </Link>
              <Link href="/#Contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg p-3  shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
