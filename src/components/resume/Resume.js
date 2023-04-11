import React from "react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="w-[full] h-[400px] border-b-[1px] border-designColor px-16 mt-10 shadow-lg"
    >
      <a
        class="btn"
        href="https://drive.google.com/file/d/1C1VnpTRW0H5ujJwZTRDr8ls8vXRMTdQL/view"
        download
      >
        Downlod My Resume Here
      </a>
    </section>
  );
};

export default Resume;
