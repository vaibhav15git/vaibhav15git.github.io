// import React from "react";

// const Stats = () => {
//   return (
//     <div className="flex display-flex justify-around">
//       <div className="mt-20">
//         <img
//           src="https://github-readme-streak-stats.herokuapp.com?user=vaibhav15git&theme=vue"
//           alt=""
//         />
//       </div>
//       <div className="mt-20">
//         <img
//           src="https://github-readme-stats.vercel.app/api?username=vaibhav15git"
//           alt=""
//         />
//       </div>
//       <div className="mt-20">
//         <img
//           src="https://github-readme-stats.vercel.app/api/top-langs/?username=vaibhav15git"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Stats;


import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-around mt-4 mb-8">
      <div className="w-full sm:w-auto md:w-auto lg:w-auto mt-4 sm:mt-20">
        <img
          className="w-full h-auto"
          src="https://github-readme-streak-stats.herokuapp.com?user=vaibhav15git"
          alt=""
        />
      </div>
      <div className="w-full sm:w-auto md:w-auto lg:w-auto mt-4 sm:mt-20">
        <img
          className="w-full h-auto"
          src="https://github-readme-stats.vercel.app/api?username=vaibhav15git"
          alt=""
        />
      </div>
      <div className="w-full sm:w-auto md:w-auto lg:w-auto mt-4 sm:mt-20">
        <img
          className="w-full h-auto"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=vaibhav15git"
          alt=""
        />
      </div>
    </div>
  );
};

export default Stats;

