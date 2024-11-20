import { useStorage } from "@/components/context/StorageProvider";
import IntroStep1 from "@/components/sections/home/IntroStep1";
import IntroStep2 from "@/components/sections/home/IntroStep2";
import gsap from "gsap";
import { memo, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";

let originalListColor = [
  "#FFFFFF",
  "#B1D5FF",
  "#0075FF",
  "#FFB700",
  "#FFC7BF",
  "#FFEDAC",
  "#92C5B2",
];

let listDecoText = [
  "/images/intro-main-text-1.jpg",
  "/images/intro-main-text-2.jpg",
  "/images/intro-main-text-3.jpg",
  "/images/intro-main-text-4.jpg",
  "/images/intro-main-text-5.jpg",
  "/images/intro-main-text-6.jpg",
  "/images/intro-main-text-7.jpg",
  "/images/intro-main-text-8.jpg",
];

function SectionHomeIntro({ ...props }) {
  const { introStep } = useStorage();
  const [shuffledListColor, setShuffledListColor] = useState(originalListColor);
  const [activeDecoText, setActiveDecoText] = useState(0);

  const settingSlider = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const shuffleListColor = (list: any[]) => {
    return [...list].sort(() => Math.random() - 0.5);
  };

  const changeActiveDecoText = () => {
    return Math.floor(Math.random() * 8);
  };

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

    const intervalChangeColor = setInterval(() => {
      setShuffledListColor(shuffleListColor(originalListColor));
    }, 2000);

    const intervalChangeActiveDecoText = setInterval(() => {
      setActiveDecoText(changeActiveDecoText());
    }, 4000);

    return () => {
      clearInterval(intervalChangeColor);
      clearInterval(intervalChangeActiveDecoText);
    };
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
        className={`SectionHomeIntro relative flex-col justify-between h-dvh overflow-hidden hidden mb:flex`}
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
                src={listDecoText[activeDecoText]}
                alt=""
                className="size-full opacity-0"
              />
              <div className="absolute size-full top-0 left-0">
                <Slider
                  {...settingSlider}
                  className="sliderIntroDecoText size-full"
                >
                  {listDecoText.map((e: any, i: number) => (
                    <div key={i} className="itemDecoText">
                      <img src={e} alt="" className="size-full object-cover" />
                    </div>
                  ))}
                </Slider>
              </div>
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
              className="mainFamily absolute w-[41%] h-2/3 bottom-0 left-[20%]"
            />
            <div
              className="mainMini1 flexCenter absolute w-1/5 h-1/3 top-1/3 right-[20%] duration-1000"
              style={{ background: shuffledListColor[0] }}
            >
              <img
                src="/images/intro-main-mini1.png"
                alt=""
                className="w-full"
              />
            </div>
            <div
              className="mainMini2 flexCenter absolute z-10 w-1/5 h-1/3 top-1/3 right-0 duration-1000"
              style={{ background: shuffledListColor[1] }}
            >
              <img
                src="/images/intro-main-mini2.png"
                alt=""
                className="decoSpin1 w-[70%]"
              />
            </div>
            <div
              className="mainMini3 flexCenter absolute z-10 w-1/5 h-1/3 bottom-0 right-[20%] duration-1000"
              style={{ background: shuffledListColor[6] }}
            >
              <img
                src="/images/intro-main-mini3.png"
                alt=""
                className="w-[50%]"
              />
            </div>
            <div
              className="mainMini4 flexCenter absolute w-1/5 h-1/3 bottom-0 right-0 duration-1000"
              style={{ background: shuffledListColor[3] }}
            >
              <img
                src="/images/intro-main-mini4.png"
                alt=""
                className="w-full"
              />
            </div>
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

      <motion.div
        exit={{ scale: 0, opacity: 0 }}
        className={`SectionHomeIntro relative flex h-dvh overflow-hidden mb:hidden`}
      >
        <div className="imageDeco relative z-10 aspect-[730/900] w-auto h-full">
          <div className="imageMain opacity-0 relative z-50 size-full">
            <div className="mainFlower flex w-1/4 h-[60%] bg-red-300 absolute bottom-0 left-0">
              <img
                src="/images/intro-main-flower.png"
                alt=""
                className="relative z-10 block w-[90%] mx-auto mt-auto"
              />
              <div className="bg1 absolute w-full h-1/3 top-0 left-0 bg-[#C6D8F3]"></div>
              <div className="bg2 absolute w-full h-1/3 top-1/3 left-0 bg-[#E2EDFF]"></div>
              <div className="bg3 absolute w-full h-1/3 bottom-0 left-0 bg-[#95BCF3]"></div>
            </div>
            <div className="mainText absolute w-3/4 h-1/5 top-[40%] right-0">
              <img
                src={listDecoText[activeDecoText]}
                alt=""
                className="size-full opacity-0"
              />
              <div className="absolute size-full top-0 left-0">
                <Slider
                  {...settingSlider}
                  className="sliderIntroDecoText size-full"
                >
                  {listDecoText.map((e: any, i: number) => (
                    <div key={i} className="itemDecoText">
                      <img src={e} alt="" className="size-full object-cover" />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flashing absFull z-10"></div>
            </div>
            <img
              src="/images/intro-main-avatar.jpg"
              alt=""
              className="mainAvatar absolute w-1/4 h-1/5 top-0 left-[25%]"
            />
            <div
              className="mainMini2 flexCenter absolute z-10 w-1/4 h-1/5 top-0 right-[25%] duration-1000"
              style={{ background: shuffledListColor[5] }}
            >
              <img
                src="/images/intro-main-mini2.png"
                alt=""
                className="decoSpin1 w-[70%]"
              />
            </div>
            <div
              className="mainMini4 flexCenter  absolute w-1/4 h-1/5 top-0 right-0 duration-1000"
              style={{ background: shuffledListColor[1] }}
            >
              <img
                src="/images/intro-main-mini4.png"
                alt=""
                className="w-full"
              />
            </div>
            <div
              className="mainDestop1 flexCenter absolute w-1/4 h-1/5 top-0 left-0 duration-1000"
              style={{ background: shuffledListColor[1] }}
            >
              <img
                src="/images/intro-main-desktop-1.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <img
              src="/images/intro-main-desktop-2.jpg"
              alt=""
              className="mainDestop2 absolute w-1/4 h-1/5 top-[20%] left-0"
            />
            <img
              src="/images/intro-main-desktop-3.jpg"
              alt=""
              className="mainDestop3 absolute w-1/4 h-1/5 top-[20%] left-[25%]"
            />
            <div
              className="mainDestop4 flexCenter mainDestop4 absolute w-1/4 h-1/5 top-[20%] left-[50%] duration-1000"
              style={{ background: shuffledListColor[0] }}
            >
              <img
                src="/images/intro-main-desktop-4.png"
                alt=""
                className="w-full"
              />
            </div>
            <div
              className="mainDestop5 flexCenter absolute w-1/4 h-1/5 top-[20%] left-[75%] duration-1000"
              style={{ background: shuffledListColor[3] }}
            >
              <img
                src="/images/intro-main-desktop-5.png"
                alt=""
                className="w-full"
              />
            </div>
            <img
              src="/images/intro-main-family.jpg"
              alt=""
              className="mainFamily absolute w-2/4 h-2/5 bottom-0 left-[25%]"
            />
            <div
              className="mainMini1 flexCenter absolute w-1/4 h-1/5 bottom-[20%] right-0 duration-1000"
              style={{ background: shuffledListColor[0] }}
            >
              <img
                src="/images/intro-main-mini1.png"
                alt=""
                className="w-full"
              />
            </div>
            <div
              className="mainMini3 flexCenter absolute z-10 w-1/4 h-1/5 bottom-0 right-0 duration-1000"
              style={{ background: shuffledListColor[6] }}
            >
              <img
                src="/images/intro-main-mini3.png"
                alt=""
                className="w-[50%]"
              />
            </div>
          </div>
        </div>

        <div className="content flex flex-col relative z-0 w-full mx-auto py-[30px]">
          <img
            src="/images/logo.png"
            alt="Tiki's Logo"
            className="logo w-[67px] mx-auto opacity-0"
          />

          <div className="detail relative z-10 h-fit my-auto">
            <AnimatePresence>{introContent}</AnimatePresence>
          </div>

          <img
            src="/images/deco-flower.png"
            alt="Tiki's deco"
            className="decoFlower w-[30px] absolute bottom-[0] right-[0] opacity-0"
          />
          <img
            src="/images/deco-heart.png"
            alt="Tiki's deco"
            className="introDeco opacity-0 decoHeart w-[35px] absolute top-[75px] left-[30px] tl-p:w-[25px]"
          />
          <img
            src="/images/deco-spin.png"
            alt="Tiki's deco"
            className="introDeco opacity-0 decoSpin1 w-[45px] absolute top-[35px] right-[30px]"
          />
          <img
            src="/images/deco-spin.png"
            alt="Tiki's deco"
            className="introDeco opacity-0 decoSpin2 w-[30px] absolute bottom-[35%] left-[10%] tl-p:bottom-[45%] tl-p:left-[15px]"
          />
        </div>
      </motion.div>
    </>
  );
}

export default memo(SectionHomeIntro);
