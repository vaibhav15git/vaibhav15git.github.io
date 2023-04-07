import React from "react";
import Title from "../layouts/Title";

const AboutMe = () => {
  return (
    <div id="aboutme">
      <div className=" border-b-[1px] border-designColor px-16 mt-10 shadow-lg ">
        <Title des="About Me" />
        <p className="text-base font-bodyFont leading-6 tracking-wide pb-20 text-justify">
          Hello and welcome to my portfolio website! I am a specialized MERN
          stack developer who is passionate about developing useful and
          innovative products. With my expertise in JavaScript, React, Node.js,
          Express.js, and MongoDB, I have successfully created various projects
          that provide seamless user experiences.I am a curious and inquisitive
          individual who is always eager to learn and enhance my technical and
          soft skills in a high-performance environment. I have a deep
          understanding of the MERN stack and am skilled in creating web
          applications that are efficient, scalable, and maintainable.
          <br />
          <br />
          Apart from my technical skills, I am also a strong communicator with
          excellent interpersonal skills. I believe in clear and open
          communication, and I strive to maintain a positive and collaborative
          work environment. I am adaptable and able to work in fast-paced and
          dynamic environments, and I am always eager to take on new challenges
          and push the boundaries of my abilities. In addition to my technical
          expertise, I am also passionate about continuously learning and
          growing in my field. I am proactive in keeping myself updated with the
          latest advancements in web development and constantly seek
          opportunities to expand my knowledge and skills.In addition to my
          technical and collaborative abilities, I am a lifelong learner who is
          passionate about continuous improvement. I am proactive in seeking out
          new opportunities to expand my knowledge and skills, and I am always
          up for a challenge. With my strong work ethic and ardent dedication to
          delivering exceptional results, I am confident that I can contribute
          to the success of any project or team. Thank you for visiting my
          portfolio website, and I am excited to explore how I can add value to
          your organization.
        </p>

        {/* <div className=" border-b-[1px] border-designColor px-16 mt-10 shadow-lg">
          <button>
            
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
