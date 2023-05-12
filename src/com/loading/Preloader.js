import styles from "./Preloader.module.scss";
import { gsap } from "gsap/dist/gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useRef, useEffect } from "react";

gsap.registerPlugin(SplitText);

export default function Preloader() {
  let first = useRef(null);
  let last = useRef(null);
  let position = useRef(null);
  let area = useRef(null);
  let preloader = useRef(null);
  useEffect(() => {
    //   first name vars
    let firstSplit = new SplitText(first, { type: "words, chars" });
    let firstChars = firstSplit.chars;
    const tl1 = gsap.timeline();

    // Last name vars
    let lastSplit = new SplitText(last, { type: "words, chars" });
    let lastChars = lastSplit.chars;
    const tl2 = gsap.timeline({ delay: 0.2 });

    // position vars
    let posSplit = new SplitText(position, { type: "words, chars" });
    let posChars = posSplit.words;
    const tl3 = gsap.timeline({ delay: 1.2 });

    // area vars
    let areaSplit = new SplitText(area, { type: "words, chars" });
    let areaChars = areaSplit.words;
    const tl4 = gsap.timeline({ delay: 1.4 });

    //    First Name animation
    // prettier-ignore

    tl1
      .from(firstChars,{ duration: 1, y: -200, opacity: 0, stagger: 0.2, ease: "power3.inOut" },"first"
      )
      .from(firstChars,{ duration: 0.8, x: 200, stagger: 0.2, delay: 0.3,ease: "power3.inOut" },"first");
    // Last Name Animation
    // prettier-ignore
    tl2
      .from(lastChars.reverse(),{ duration: 1, y: -200, opacity: 0, stagger: 0.2, ease: "power3.inOut" },"last")
      .from(lastChars,{ duration: .8, x: -200,  stagger: 0.2, delay: .3,  ease: "power3.inOut" },"last");
    // prettier-ignore

    tl3
      .from(posChars,{ duration: 1, y: 200, opacity: 0, stagger: 0.2, ease: "power3.inOut" },"pos"
      )
      .from(posChars,{ duration: 0.8, x: 500, stagger: 0.2, delay: 0.3,ease: "power3.inOut" },"pos");
    // prettier-ignore

    tl4
      .from(areaChars.reverse(),{ duration: 1, y: 200, opacity: 0, stagger: 0.2, ease: "power3.inOut" },"pos"
      )
      .from(areaChars,{ duration: 0.8, x: -500, stagger: 0.2, delay: 0.3,ease: "power3.inOut" },"pos")
      .to(firstChars,{ duration: 0.2, opacity: 0, stagger:.1})
      .to(lastChars,{ duration: 0.2, opacity: 0, stagger:.1})

      .to(posChars,{ duration: 0.2, opacity: 0, stagger: 0.2})
      .to(areaChars,{ duration: 0.2, opacity: 0, stagger:.2})
      .to(preloader, {duration: .5, css:{height: 0 }, delay: .2, ease: "power3.inOut"})
      .to(preloader, {duration: .2, css:{display: "none" }, delay: 0, ease: "power3.inOut"})
  });

  return (
    <div
      ref={(el) => {
        preloader = el;
      }}
      className={styles.initial}
    >
      <div className={styles.initial__headingCont}>
        <h1
          className={styles.initial__headingCont_title}
          ref={(el) => {
            first = el;
          }}
        >
          Zach
        </h1>
      </div>
      <div className={styles.initial__headingCont}>
        <h1
          className={styles.initial__headingCont_title}
          ref={(el) => {
            last = el;
          }}
        >
          Turner
        </h1>
      </div>
      <div className={styles.initial__headingCont}>
        <h1
          className={styles.initial__headingCont_title}
          ref={(el) => {
            position = el;
          }}
        >
          Front End Developer
        </h1>
      </div>
      <div className={styles.initial__headingCont}>
        <h1
          className={styles.initial__headingCont_title}
          ref={(el) => {
            area = el;
          }}
        >
          Based in ATL, GA
        </h1>
      </div>
    </div>
  );
}
