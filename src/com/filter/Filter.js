import React, { useRef } from "react";
import gsap, { Power3 } from "gsap";
import FilterLink from "../ui/FilterLink";

export default function Filter({ setState, state }) {
  const selections = [
    "All",
    "React",
    "Vue",
    "Laravel",
    "Shopify",
    "Javascript",
    "PHP",
  ];
  return (
    <ul className="main__grid__links">
      {selections.map((selection) => {
        return (
          <li className="main__grid__links--item" key={selection}>
            <FilterLink
              state={state}
              selection={selection}
              setState={setState}
            />
          </li>
        );
      })}
    </ul>
  );
}
