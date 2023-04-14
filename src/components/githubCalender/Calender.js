import React from "react";
import GitHubCalendar from "react-github-calendar";
import Title from "../layouts/Title";
import Stats from "./Stats";

const Calender = () => {
  return (
    <div>
      <div
        id="github"
        className="px-16 border-b-[1px] border-designColor shadow-lg object-cover group-hover:scale-110 duration-300"
      >
        <div className="font-titleFont mt-10  ">
          <Title des="Github Statistics" />
        </div>
        <GitHubCalendar
          username="vaibhav15git"
          style={{ margin: "auto" }}
          blockSize={20}
          fontSize={20}
        />
        <Stats />
      </div>
    </div>
  );
};

export default Calender;
