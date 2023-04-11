import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectSix,
  projectFive,
  projectFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-designColor shadow-lg"
    >
      <div className="px-16">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-16">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          githubUrl="https://github.com/vaibhav15git"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubUrl="https://tailwindcss.com/docs/gradient-color-stops"
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="Pear Website"
          des="Pear is built with the reference website apple.com 
          It is an ecommerce website for electronic products with an eye-catching UI 
          where the users can buy various electronic items, with customizable design selections."
          src={projectFour}
          githubUrl="https://github.com/himanku/Pear-website"
          liveUrl="https://pear-website.netlify.app/"
          techStack="Tech Stack : React.js | Redux.js | Firebase | ChakraUI"
        />
        <ProjectsCard
          title="Netmeds Clone"
          des="A clone of Netmeds which is an online pharmacy where you can buy 
               medicines and all health-related products.Netmeds offers a convenient and reliable 
               solution for customers to meet their healthcare needs online."
          src={projectFive}
          techStack="Tech Stack : HTML | CSS | Bootstarp | JavaScript"
        />
        <ProjectsCard
          title="Digital Clock"
          des=" A digital clock is a timekeeping tool that displays the current time in a digital format, 
          such as hours, minutes, and seconds. In this project, a digital clock is created using the tech 
          stack of HTML, CSS, and JavaScript."
          src={projectSix}
          githubUrl="https://github.com/vaibhav15git/Javascript-Projects/tree/main/Digital%20Alarm%20Clock"
          liveUrl="https://legendary-gumdrop-dc08b0.netlify.app/"
          techStack="Tech Stack : HTML | Cascading Style Sheets | JavaScript | "
        />
      </div>
    </section>
  );
};

export default Projects;
