import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function ContactBtn({ modalActive, setModalActive }) {
  const button = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    if (modalActive) {
      tl.to(button.current, { x: -200, duration: 0.5, ease: "power3.inOut" });
    }
    if (!modalActive) {
      tl.to(button.current, { x: 0, duration: 0.5, ease: "back.in(2)" });
    }
  });
  return (
    <button
      className="fixed bottom-6 text-white p-2 left-6 bg-portfolio-blue rounded-full "
      onClick={(e) => {
        e.preventDefault();
        setModalActive(!modalActive);
        console.log(modalActive);
      }}
      ref={button}
    >
      Contact Now
    </button>
  );
}
