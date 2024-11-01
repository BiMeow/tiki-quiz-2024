import { useStorage } from "@/components/context/StorageProvider";
import IntroStep1 from "@/components/sections/home/IntroStep1";
import IntroStep2 from "@/components/sections/home/IntroStep2";
import gsap from "gsap";
import { memo, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SectionHomeIntro({ ...props }) {
  const { introStep } = useStorage();

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".SectionHomeIntro",
            start: "50px bottom",
          },
        })
        .fromTo(
          ".SectionHomeIntro .logo",
          { x: -50, autoAlpha: 0, opacity: 0 },
          {
            x: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          0
        )
        .fromTo(
          ".SectionHomeIntro .introTitle",
          { scale: 0, autoAlpha: 0, opacity: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          0
        )
        .fromTo(
          ".SectionHomeIntro .imageMain",
          { y: 150, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          0
        )
        .fromTo(
          ".SectionHomeIntro .introDesc",
          { y: 50, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          0.3
        )
        .fromTo(
          ".SectionHomeIntro .introBtn",
          { y: 50, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          0.6
        )
        .fromTo(
          ".SectionHomeIntro .introDeco",
          { autoAlpha: 0, opacity: 0 },
          {
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.4,
            ease: "sine.out",
          },
          0.5
        )
        .fromTo(
          ".SectionHomeIntro .decoFlower",
          { y: 50, autoAlpha: 0, opacity: 0 },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            duration: 0.7,
            ease: "sine.out",
          },
          1
        );
    }, 300);

    setTimeout(() => {
      gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
        ".SectionHomeIntro .decoFlower",
        { y: 0 },
        {
          y: 50,
          duration: 2,
        }
      );

      gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
        ".SectionHomeIntro .decoSpin1",
        { rotate: 0 },
        {
          rotate: 360,
          duration: 5,
        }
      );

      gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
        ".SectionHomeIntro .decoSpin2",
        { rotate: 0 },
        {
          rotate: -360,
          duration: 3,
        }
      );

      gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
        ".SectionHomeIntro .decoHeart",
        { scale: 1 },
        {
          scale: 0.75,
          duration: 2,
        }
      );

      gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
        ".SectionHomeIntro .imageMain .mainMini3 img",
        { scale: 1 },
        {
          scale: 0.75,
          duration: 1,
        }
      );

      // gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
      //   ".SectionHomeIntro .imageMain .mainMini1",
      //   { top: "33.333333%", right: "20%" },
      //   {
      //     top: "66.666666%",
      //     right: "0%",
      //     duration: 2,
      //   }
      // );

      // gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" }).fromTo(
      //   ".SectionHomeIntro .imageMain .mainMini4",
      //   { top: "66.666666%", right: "0%" },
      //   {
      //     top: "33.333333%",
      //     right: "20%",
      //     duration: 2,
      //   }
      // );
    }, 1000);
    return () => {};
  }, []);

  const introContent = useMemo(() => {
    switch (introStep) {
      case 1:
        return <IntroStep1 />;

      case 2:
        return <IntroStep2 />;

      default:
        return;
    }
  }, [introStep]);

  return (
    <>
      <motion.div
        exit={{ scale: 0, opacity: 0 }}
        className={`SectionHomeIntro relative flex flex-col justify-between h-dvh overflow-hidden`}
      >
        <img
          src="/images/logo.png"
          alt="Tiki's Logo"
          className="logo w-[67px] m-[25px] mb-0 opacity-0"
        />

        <div className="detail relative z-10 h-fit py-[2dvh]">
          <AnimatePresence>{introContent}</AnimatePresence>
        </div>

        <div className="imageDeco relative aspect-[430/255]">
          <div className="imageMain opacity-0 relative z-10 size-full">
            <div className="mainFlower flex w-1/5 h-full bg-red-300 absolute top-0 left-0">
              <img
                src="/images/intro-main-flower.png"
                alt=""
                className="relative z-10 block w-[90%] mx-auto mt-auto"
              />
              <div className="bg1 absolute w-full h-1/3 top-0 left-0 bg-[#C6D8F3]"></div>
              <div className="bg2 absolute w-full h-1/3 top-1/3 left-0 bg-[#E2EDFF]"></div>
              <div className="bg3 absolute w-full h-1/3 bottom-0 left-0 bg-[#95BCF3]"></div>
            </div>
            <div className="mainText absolute w-3/5 h-1/3 top-0 left-[20%]">
              <img
                src="/images/intro-main-text.jpg"
                alt=""
                className="size-full"
              />
              <div className="flashing absFull z-10"></div>
            </div>
            <img
              src="/images/intro-main-avatar.jpg"
              alt=""
              className="mainAvatar absolute w-1/5 h-1/3 top-0 right-0"
            />
            <img
              src="/images/intro-main-family.jpg"
              alt=""
              className="mainFamily absolute w-2/5 h-2/3 bottom-0 left-[20%]"
            />
            <img
              src="/images/intro-main-mini1.jpg"
              alt=""
              className="mainMini1 absolute w-1/5 h-1/3 top-1/3 right-[20%]"
            />
            <div className="mainMini2 flexCenter absolute z-10 w-1/5 h-1/3 top-1/3 right-0 bg-[#B1D5FF]">
              <img
                src="/images/intro-main-mini2.png"
                alt=""
                className="decoSpin1 w-[70%]"
              />
            </div>
            <div className="mainMini3 flexCenter absolute z-10 w-1/5 h-1/3 bottom-0 right-[20%] bg-[#92C5B2]">
              <img
                src="/images/intro-main-mini3.png"
                alt=""
                className="w-[50%]"
              />
            </div>
            <img
              src="/images/intro-main-mini4.jpg"
              alt=""
              className="mainMini4 absolute w-1/5 h-1/3 bottom-0 right-0"
            />
          </div>
          <img
            src="/images/deco-flower.png"
            alt="Tiki's deco"
            className="decoFlower w-[30px] absolute bottom-[99%] right-[25px] opacity-0"
          />
        </div>
        <img
          src="/images/deco-heart.png"
          alt="Tiki's deco"
          className="introDeco opacity-0 decoHeart w-[25px] absolute top-[75px] left-[30px]"
        />
        <img
          src="/images/deco-spin.png"
          alt="Tiki's deco"
          className="introDeco opacity-0 decoSpin1 w-[45px] absolute top-[35px] right-[30px]"
        />
        <img
          src="/images/deco-spin.png"
          alt="Tiki's deco"
          className="introDeco opacity-0 decoSpin2 w-[30px] absolute bottom-[45%] left-[15px]"
        />
      </motion.div>
    </>
  );
}

export default memo(SectionHomeIntro);
