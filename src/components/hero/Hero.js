import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col  gap-10 xl:gap-0 lgl:flex-row items-center  border-b-[1px] border-designColor font-titleFont  px-16 shadow-lg "
    >
      <LeftSide />
      <RightSide />
    </section>
  );
};

export default Hero;
