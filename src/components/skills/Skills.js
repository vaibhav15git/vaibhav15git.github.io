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
      <div className="font-titleFont px-16 mt-10  ">
        <Title des="Skills & Tools" />
      </div>
      {/* grid-rows-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 */}
      {/* sm:grid-clos-2 md:grid-cols-3 xl:grid-cols-5 */}
      <div
        className="grid grid-rows-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6  mt-20 border-b-[1px]  border-designColor pb-20 pt-0 shadow-lg px-16 "
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

        <div>
          <span className="skillsIcon hover:text-black hover:bg-violet-500 bg-violet-500">
            <FaBootstrap />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Bootstrap</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-purple-900 bg-purple-900 ">
            {/* <img src={tailwind_icon} alt="tailwind logo" /> */}
            <SiTailwindcss />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Tailwind</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-cyan-400 bg-cyan-400">
            <FaReact />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">React.js</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-violet-800 bg-violet-800 ">
            {/* <img src={redux_icon} alt="redux logo" /> */}
            <SiRedux />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Redux</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-sky-500 bg-sky-500">
            <SiTypescript />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">TypeScript</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-green-600 bg-green-600">
            <FaNodeJs />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Node.js</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-white bg-white">
            <SiExpress />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Express.js</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-green-500 bg-green-500">
            <SiMongodb />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">MongoDB</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-red-600 bg-red-600">
            <FaNpm />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">NPM</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-orange-600 bg-orange-600">
            <SiGit />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Git</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-white bg-black">
            <FaGithub />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Github</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-sky-600 bg-sky-600">
            <TbBrandVscode />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">VSCode</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <SiVite />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Vite</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-teal-700 bg-teal-700">
            <SiNetlify />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Netlify</p>
        </div>
        <div>
          <span className="skillsIcon hover:text-black hover:bg-white bg-white">
            <SiVercel />
          </span>
          <br />
          <p className="text-center font-semibold text-2xl">Vercel</p>
        </div>
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
