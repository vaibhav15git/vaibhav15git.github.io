
import React from "react";
import { heroSection2 } from "../../assets/index";

const RightSide = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        className="w-[900px] h-[400px] lgl:w-[400px] lgl:h-[480px] z-10"
        style={{ borderRadius: "10px" }}
        src={heroSection2}
        alt="heroSection"
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightSide