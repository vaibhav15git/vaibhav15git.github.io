import React from "react";
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiNetlify,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import Title from "../layouts/Title";

const Skills = () => {
  return (
    <>
      <div className="  font-titleFont px-16 mt-10  ">
        <Title des="Skills & Tools" />
      </div>
      <div
        className="gap-6 px-16 grid grid-cols-5 grid-rows-3 mt-20   lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 border-b-[1px]  border-designColor pb-20 pt-0 shadow-lg "
        id="skills"
      >
        <div>
          <span className="skillsIcon hover:text-black hover:bg-orange-500 bg-orange-500 ">
            <FaHtml5 />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">HTML</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-sky-500 bg-sky-500">
            <FaCss3 />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">CSS</p>
        </div>

        <div>
          <span className="skillsIcon hover:text-black hover:bg-yellow-300 bg-yellow-300">
            <FaJs />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Javascript</p>
        </div>

        <span className="skillsIcon hover:text-black hover:bg-violet-500 bg-violet-500">
          <FaBootstrap />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-purple-900 bg-purple-900 ">
          {/* <img src={tailwind_icon} alt="tailwind logo" /> */}
          <SiTailwindcss />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-cyan-400 bg-cyan-400">
          <FaReact />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-violet-800 bg-violet-800 ">
          {/* <img src={redux_icon} alt="redux logo" /> */}
          <SiRedux />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-sky-500 bg-sky-500">
          <SiTypescript />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-green-600 bg-green-600">
          <FaNodeJs />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-white bg-white">
          <SiExpress />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-green-500 bg-green-500">
          <SiMongodb />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-red-600 bg-red-600">
          <FaNpm />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-orange-600 bg-orange-600">
          <SiGit />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-white bg-black">
          <FaGithub />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-sky-600 bg-sky-600">
          <TbBrandVscode />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <SiVite />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-teal-700 bg-teal-700">
          <SiNetlify />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-white bg-white">
          <SiVercel />
        </span>
      </div>

      {/* Tools Section */}

      {/* <div className="  font-titleFont px-16 mt-10  ">
        <Title des="Tools" />
      </div>

      <div className="gap-6 px-16 grid grid-cols-5 grid-rows-2 mt-20   lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 border-b-[1px]  border-designColor pb-20 pt-0 shadow-lg ">
       <span className="skillsIcon hover:text-black hover:bg-red-600 bg-red-600">
          <FaNpm />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-orange-600 bg-orange-600">
          <SiGit />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-white bg-black">
          <FaGithub />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-sky-600 bg-sky-600">
          <TbBrandVscode />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <SiVite />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-teal-700 bg-teal-700">
          <SiNetlify />
        </span>
        <span className="skillsIcon hover:text-black hover:bg-white bg-white">
          <SiVercel />
        </span>
      </div> */}
    </>
  );
};

export default Skills;
