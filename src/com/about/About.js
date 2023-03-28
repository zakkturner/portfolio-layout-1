import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";
import AboutScene from "./about-scene/AboutScene";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const aboutText = aboutRef.current;
    const splitText = new SplitText(aboutText, {
      type: "words, chars",
    });
    const chars = splitText.chars;

    gsap.set(aboutText, { perspective: 400 });

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
      scrollTrigger: {
        trigger: aboutText,
        start: "top 50%",
        end: "bottom 35%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <section className="lg:w-2/3 lg:h-screen   lg:pt-0  mb-40 lg:my-20  m-auto flex flex-col-reverse lg:flex-row items-center lg:justify-between ">
        <AboutScene />
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-4">About Me.</h2>
          <hr className="bg-portfolio-blue h-2 w-1/3 mb-4  md:hidden" />

          <p id="about" className="text-lg" ref={aboutRef}>
            Experienced Web Developer specializing in UI development, API
            development, and Creative Development, with a passion for bringing
            projects to life.
          </p>
        </div>
      </section>
    </>
  );
}
