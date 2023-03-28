import { useEffect, useRef, useState, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ModalContext, ModalDispatchContext } from "../../context/ModalContext";

gsap.registerPlugin(ScrollTrigger);
export default function ContactBtn() {
  const modalActive = useContext(ModalContext);
  const dispatch = useContext(ModalDispatchContext);

  const button = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "opened",
      openedByModel: false,
    });
  };

  useEffect(() => {
    console.log("Modal", modalActive.modalActive);
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

    if (modalActive.modalActive !== false && !modalActive.openedByModel) {
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
    if (!modalActive) {
      tl.to(button.current, {
        x: 200,
        duration: 0.5,
        ease: "back.in(2)",
      });
    }
  });
  return (
    <button
      className="fixed bottom-6 hidden md:block text-white p-2 -left-32 bg-portfolio-blue rounded-full "
      onClick={handleClick}
      ref={button}
    >
      Contact Now
    </button>
  );
}
