import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ContactBtn({ modalActive, setModalActive }) {
  const [firstOpen, setFirstOpen] = useState(true);
  const button = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    setModalActive(!modalActive);
  };

  useEffect(() => {
    gsap.to(
      button.current,
      {
        x: 200,
        duration: 0.5,
        ease: "power3.inOut",
        delay: 1,
        scrollTrigger: {
          trigger: "#about",
          start: "top 95%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
      // { x: 0, duration: 0.5, ease: "back.in(2)", delay: 1 }
    );
  });
  useEffect(() => {
    const tl = gsap.timeline();

    if (modalActive) {
      tl.to(button.current, {
        scaleX: 2,
        duration: 0.5,
        ease: "expo.inOut",
      })
        .to(
          button.current,
          { scaleX: 1, duration: 0.5, ease: "expo.inOut" },
          "-=.2"
        )
        .to(button.current, { x: -200, duration: 0.5, ease: "power3.inOut" });
    }
    if (!modalActive && !firstOpen) {
      tl.to(button.current, {
        x: 200,
        duration: 0.5,
        ease: "back.in(2)",
      });
    }
  });
  return (
    <button
      className="fixed bottom-6 text-white p-2 -left-32 bg-portfolio-blue rounded-full "
      onClick={handleClick}
      ref={button}
    >
      Contact Now
    </button>
  );
}
