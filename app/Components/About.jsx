import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="About" className="w-full  p-2 flex items-center select-none">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-[#5651e5] py-4 uppercase tracking-widest text-lg">
            About
          </p>
          <h1 className="py-4 capitalize">who i am</h1>
          <p className="py-4 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="capitalize py-2 text-gray-600">
            am a person who is positive about every aspect of life. There are
            many things I like to do, to see, and to experience. I like to read,
            I like to write; I like to think, I like to dream; I like to talk, I
            like to listen. I like to see the sunrise in the morning, I like to
            see the moonlight at night; I like to feel the music flowing on my
            face, I like to smell the wind coming from the ocean. I like to look
            at the clouds in the sky with a blank mind, I like to do thought
            experiment{" "}
          </p>
          <p className="capitalize py-4 text-gray-600 underline cursor-pointer ">
            Check out my personal
          </p>
        </div>
        <div className="w-full h-auto m-auto rounded-xl shadow-xl shadow-gray-500 p-5 hover:scale-105 ease-in duration-300 cursor-pointer">
          <Image
            className="rounded-xl"
            src="/assets/about/unsplash.jpg"
            alt=""
            width="750"
            height="650"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
