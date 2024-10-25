"use client";
import { message } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { useIsMounted } from "usehooks-ts";

message.config({
  duration: 2,
  maxCount: 1,
});

export const MainContext = React.createContext<any>(null);

const MainProvider: React.FC<any> = ({ children, isPrivate }) => {
  const isMounted = useIsMounted();
  const pathName = usePathname();

  const initAnimation = () => {
    let listFadeIn = gsap.utils.toArray(".fadeIn");
    listFadeIn.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { autoAlpha: 0, opacity: 0 },
          { autoAlpha: 1, opacity: 1, duration: 0.7, ease: "sine.out" }
        );
    });

    let listFadeUp = gsap.utils.toArray(".fadeUp");
    listFadeUp.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { y: 75, autoAlpha: 0, opacity: 0 },
          { y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: "sine.out" }
        );
    });

    let listFadeDown = gsap.utils.toArray(".fadeDown");
    listFadeDown.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { y: -75, autoAlpha: 0, opacity: 1 },
          { y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: "sine.out" }
        );
    });

    let listFadeRight = gsap.utils.toArray(".fadeRight");
    listFadeRight.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { x: -75, autoAlpha: 0, opacity: 0 },
          { x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: "sine.out" }
        );
    });

    let listFadeLeft = gsap.utils.toArray(".fadeLeft");
    listFadeLeft.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { x: 75, autoAlpha: 0, opacity: 0 },
          { x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: "sine.out" }
        );
    });

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: ".mainPage",
    });
    setTimeout(() => {
      if (isMounted() && pathName) {
        initAnimation();
        window.scrollTo({ top: 0, behavior: "smooth" });

        ScrollTrigger.refresh();
      }
    }, 1000);
  }, [isMounted, pathName]);

  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};

export default MainProvider;

export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain has to be used within <MainContext.Provider>");
  }
  return context;
};
