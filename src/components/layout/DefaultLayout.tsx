"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function DefaultLayout({
  children,
  locale,
}: {
  children?: React.ReactNode;
  locale?: any;
}) {
  const lenisRef = useRef<any>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: any = useMemo(
    () => ({
      fpsLimit: 60,
      // interactivity: {
      //   events: {
      //     onClick: {
      //       enable: true,
      //       mode: "push",
      //     },
      //     onHover: {
      //       enable: true,
      //       mode: "repulse",
      //     },
      //   },
      //   modes: {
      //     push: {
      //       quantity: 4,
      //     },
      //     repulse: {
      //       distance: 200,
      //       duration: 0.4,
      //     },
      //   },
      // },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true }, value: 50 },
        opacity: {
          value: { min: 0.5, max: 1 },
        },
        shape: {
          type: "image",
          options: {
            image: {
              src: "/images/deco-star.png",
              width: 20,
              height: 20,
              replaceColor: false,
            },
          },
        },
        size: {
          value: { min: 3, max: 10 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <>
      {!!init && <Particles id="tsparticles" options={options} />}

      <ReactLenis
        ref={lenisRef}
        autoRaf={false}
        className="mainPage relative h-dvh overflow-auto overflow-y-auto overflow-x-hidden"
      >
        <div className="pageContent flex min-h-dvh flex-col items-center justify-center">
          <div className="w-full">{children}</div>
        </div>
      </ReactLenis>
    </>
  );
}
