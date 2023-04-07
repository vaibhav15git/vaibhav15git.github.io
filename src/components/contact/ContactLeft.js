import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import { ContactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-bodyColor to-designColor p-4 lgl:p-8 rounded-lg  flex flex-col gap-8 justify-center px-16 shadow-lg">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={ContactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-black">Vaibhav Jaware</h3>
        <p className="text-lg font-normal text-black">MERN Stack Developer</p>
        <p className="text-base text-black tracking-wide">
          Please feel free to contact me using the following information
        </p>
        <p className="text-base text-blue-500 flex items-center gap-2">
          Phone: <span className="text-black">+91 7972531287 </span>
        </p>
        <p className="text-base text-blue-500 flex items-center gap-2">
          Email: <span className="text-black">vaibhavjaware15@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
            onClick={() => window.open("https://t.me/vaibhav_jaware")}
          >
            <FaTelegram />
          </span>
          <span
            className="bannerIcon"
            onClick={() => window.open("https://twitter.com/JawareVaibhav")}
          >
            <FaTwitter />
          </span>
          <span
            className="bannerIcon"
            onClick={() =>
              window.open("https://www.facebook.com/vaibhav.jaware.50")
            }
          >
            <FaFacebookF />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
