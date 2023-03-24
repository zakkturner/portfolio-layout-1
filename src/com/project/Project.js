import { IoEarth } from "react-icons/io5";
// import { AiFillGithub } from "react-icons/ai";

import { useRef } from "react";
import gsap from "gsap";

export default function Project({ project, id }) {
  let details = useRef(null);
  const onHover = () => {
    gsap.to(details, { duration: 0.5, y: 0, ease: "expo.inOut" });
  };

  const onLeave = () => {
    gsap.to(details, { duration: 0.5, y: "100%", ease: "expo.inOut" });
  };
  return (
    <div
      key={id}
      className="bg-blue-500 h-80 rounded-md shadow-project flex items-end lg:relative overflow-hidden"
      style={{
        background: `url("${project.img1}") no-repeat center center/cover`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="bg-opacity-80 bg-black p-6 w-full lg:translate-y-60"
        ref={(el) => {
          details = el;
        }}
      >
        <div className="w-2/12 mt-2 mr-auto flex">
          <div className="shadow-liveGlow bg-[#00fa1d] w-2 h-2 flex justify-center items-center rounded-full mr-1"></div>
          <span className="text-white bg-opacity-5 w-auto text-xs">
            {project.type}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-white text-bolder lg:text-2xl">
            {project.title}
          </h4>

          <div className="flex items-center justify-between">
            <a href={project.site}>
              <IoEarth className="text-white lg:text-2xl  hover:text-portfolio-blue" />
            </a>
            {/* <a href={project.github_url}>
              <AiFillGithub className="text-white lg:text-2xl ml-2 hover:text-portfolio-blue" />
            </a> */}
          </div>
        </div>
        <p className="text-white text-sm mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span className="bg-portfolio-blue text-white text-sm mr-2 rounded-full py-1 px-2 text-xs">
              {tech.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
