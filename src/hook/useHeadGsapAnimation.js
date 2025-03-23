import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useHeadGsapAnimation = (element, trigger) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(element, {
      opacity: 0,
      y: 300,
      duration: 0.3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: trigger,
        scroller: "body",
        start: "top 80%",
        end: "top 45%",
        scrub: 1,
      },
    });
  }, []);
};
