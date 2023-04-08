import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const LeftSide = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Vaibhav...</span>
        </h1>
        <h2 className="text-4xl font-bold text-black">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
          As a web developer, I'm the wizard behind the screen, conjuring up
          stunning websites that captivate users with sleek designs, smooth
          animations, and seamless functionalities. From transforming ideas into
          reality to creating digital experiences that leave a lasting
          impression, I bring the perfect blend of technical prowess and
          creative flair to every project.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span
              className="bannerIcon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vaibhav-jaware-9143261b8/"
                )
              }
            >
              <FaLinkedinIn />
            </span>
            <span
              className="bannerIcon"
              onClick={() => window.open("https://github.com/vaibhav15git")}
            >
              <FaGithub />
            </span>
            <span
              className="bannerIcon"
              onClick={() =>
                window.open("https://www.facebook.com/vaibhav.jaware.50")
              }
            >
              <FaFacebookF />
            </span>
            <span
              className="bannerIcon"
              onClick={() => window.open("https://twitter.com/JawareVaibhav")}
            >
              <FaTwitter />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
