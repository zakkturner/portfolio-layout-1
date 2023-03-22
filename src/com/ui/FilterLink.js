import { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";

export default function FilterLink({ selection, setState, state }) {
  let category = useRef(null);
  useEffect(() => {
    console.log("Link", state.filtered);
    console.log(selection === state.filtered);
  });
  const onMouseEnter = () => {
    gsap.to(category, {
      duration: 0.1,
      css: { color: "#37aedf" },
      ease: Power3,
    });
  };
  const onMouseLeave = () => {
    gsap.to(category, {
      duration: 0.4,
      css: { color: "#191a1d" },
      ease: Power3,
    });
  };
  const handleClick = (e) => {
    let type = e.target.id;
    console.log(type);
    setState({
      filtered: type,
    });
  };
  return (
    <button
      ref={(el) => {
        category = el;
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      id={selection}
      className={`${
        selection == state.filtered
          ? "!text-white bg-portfolio-blue py-2 px-4 rounded-md"
          : ""
      }`}
    >
      {selection}
    </button>
  );
}
