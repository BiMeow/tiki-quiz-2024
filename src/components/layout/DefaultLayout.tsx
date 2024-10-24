"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

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

  return (
    <>
      <ReactLenis
        ref={lenisRef}
        autoRaf={false}
        className="mainPage relative h-screen overflow-auto overflow-y-auto overflow-x-hidden"
      >
        <div className="pageContent flex min-h-screen flex-col items-center justify-center">
          <div className="w-full">{children}</div>
        </div>
      </ReactLenis>
    </>
  );
}
