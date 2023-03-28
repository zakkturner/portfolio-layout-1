import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "../project/Project";
import Filter from "../filter/Filter";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Projects({ state, setState, filteredProjects }) {
  const title = useRef();
  const projectsRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(title.current, {
      duration: 0.8,
      opacity: 0,
      scale: 0,

      ease: "back",
      stagger: 0.01,
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 85%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <div id="portfolio" ref={projectsRef} className="w-2/3  mx-auto">
        <h2 className="text-4xl font-bold  mb-4" ref={title}>
          Projects.
        </h2>
        <hr className="bg-portfolio-blue h-2 w-1/3 mb-4  md:hidden" />
      </div>
      <div className="main__grid">
        <Filter state={state} setState={setState} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 lg:w-2/3 my-10 mx-auto gap-4">
        {filteredProjects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </>
  );
}
