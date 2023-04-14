import React from "react";
import { FaArrowUp } from "react-icons/fa";

import ScrollToTop from "react-scroll-to-top";

const ScrollTopButton = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <p className="text-designColor text-center flex justify-center">
          <FaArrowUp />
        </p>
      }
    />
  );
};

export default ScrollTopButton;
