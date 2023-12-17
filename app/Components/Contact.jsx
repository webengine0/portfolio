import React from "react";
import Image from "next/image";
import Link from "next/link";
import FormItem from "./FormItem";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
const Contact = () => {
  return (
    <div id="Contact" className="w-full lg:h-screen select-none">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left  */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/about/unsplash.jpg"
                  alt="/"
                  width="100"
                  height="100"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Front end Developer</p>
                <p className="py-4">
                  I am available for freelance or full time positions. Contact
                  me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact with me</p>
                <div className="flex items-center justify-between py-4">
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
          {/* right  */}
          <FormItem />
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#Home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
