import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg }) => {
  return (
    <div>
      <div className="cursor-pointer relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]  ">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt=""
          width="1250"
          height="450"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center capitalize">
            {title}
          </h3>

          <p className="pb-4 pt-4 text-white text-center">React JS</p>
          <Link href="">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
