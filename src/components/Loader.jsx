import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Loader = () => {
  const loaderRef = useRef(null);
  const loaderParaRef = useRef(null);

  useGSAP(() => {
    var clutter = "";
    var loaderPara = loaderParaRef.current;

    loaderPara.textContent.split("").forEach(function (dets) {
      clutter += `<span>${dets}</span>`;
    });
    loaderPara.innerHTML = clutter;

    gsap.to(loaderParaRef.current.querySelectorAll("span"), {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      repeat: -1,
    });

    setTimeout(() => {
      gsap.to(loaderRef.current, {
        y: "-100%",
        ease: "bounce.in",
        duration: 2,
      });
    }, 2000);
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <p ref={loaderParaRef}>Loading</p>
    </div>
  );
};

export default Loader;
