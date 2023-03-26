import ContactForm from "./ContactForm";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactModal({ modalActive, setModalActive }) {
  const modalContainerRef = useRef();
  const overLayRef = useRef();
  const modalRef = useRef();
  const closeButtonRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    if (modalActive) {
      console.log("active");
      tl.to(modalContainerRef.current, {
        duration: 0.2,
        css: { display: "block" },
      });
      tl.to(overLayRef.current, { duration: 0.1, opacity: 1 });
      tl.fromTo(
        modalRef.current,
        { y: 300, opacity: 0 },
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "circ.in",
        },
        "-=.2"
      );
      tl.to(
        closeButtonRef.current,
        {
          x: -100,
          duration: 0.2,
          ease: "power3.inOut",
        },
        "-=.5"
      );
    }
    if (!modalActive) {
      tl.to(closeButtonRef.current, {
        scaleX: 2,
        duration: 0.5,
        ease: "expo.inOut",
      })
        .to(
          closeButtonRef.current,
          { scaleX: 1, duration: 0.5, ease: "expo.inOut" },
          "-=.2"
        )
        .to(closeButtonRef.current, {
          x: 100,
          duration: 0.2,
          ease: "power3.inOut",
        });

      tl.to(modalRef.current, {
        duration: 0.2,
        opacity: 0,
        y: 300,
        scale: 0,
        ease: "expo.out(2, .2)",
      });
      tl.to(overLayRef.current, { duration: 0.2, opacity: 0 });

      tl.to(modalContainerRef.current, {
        duration: 0.1,
        css: { display: "none" },
      });
      tl.set(modalRef.current, { y: 0, opacity: 0 });
    }
  });

  return (
    <div
      className="relative z-10 hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      ref={modalContainerRef}
    >
      <div
        class="fixed opacity-0 inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ref={overLayRef}
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg scale-0"
            ref={modalRef}
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 fixed bottom-6 z-50 right-10 translate-x-32">
        <button
          type="button"
          ref={closeButtonRef}
          class="inline-flex w-full justify-center rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto "
          onClick={(e) => {
            e.preventDefault();
            setModalActive(!modalActive);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
