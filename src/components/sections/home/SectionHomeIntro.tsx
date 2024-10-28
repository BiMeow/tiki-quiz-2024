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
        className={`SectionHomeIntro relative flex flex-col justify-between h-screen overflow-hidden`}
      >
        <img
          src="/images/logo.png"
          alt="Tiki's Logo"
          className="logo w-[67px] m-[25px] mb-0 opacity-0"
        />

        <div className="detail h-fit py-[2vh]">
          <AnimatePresence>{introContent}</AnimatePresence>
        </div>

        <div className="imageDeco relative aspect-[43/34]">
          <img
            src="/images/image-deco-test.jpg"
            alt="Tiki's Quiz Deco"
            className="imageMain absFull z-10 opacity-0"
          />
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
          className="introDeco opacity-0 decoSpin2 w-[30px] absolute bottom-[55%] left-[15px]"
        />
      </motion.div>
    </>
  );
}

export default memo(SectionHomeIntro);
