import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./style.module.css";

const Beam = ({ showBeam, className }: any) => {
  const cn = (...values: any) => clsx(twMerge(values));
  const meteorRef = useRef<any>(null);

  useEffect(() => {
    if (showBeam) {
      const meteor = meteorRef.current;

      meteor.addEventListener("animationend", () => {
        meteor.style.visibility = "hidden";
        const animationDelay = Math.floor(Math.random() * (3 - 0) + 0);
        const animationDuration = Math.floor(Math.random() * (4 - 0) + 0);
        const meteorWidth = Math.floor(Math.random() * (150 - 80) + 80);
        meteor.style.setProperty("--meteor-delay", `${animationDelay}s`);
        meteor.style.setProperty("--meteor-duration", `${animationDuration}s`);
        meteor.style.setProperty("--meteor-width", `${meteorWidth}px`);

        restartAnimation();
      });

      meteor.addEventListener("animationstart", () => {
        meteor.style.visibility = "visible";
      });
    }

    return () => {
      if (showBeam) {
        const meteor = meteorRef.current;
        if (meteor) {
          meteor.removeEventListener("animationend", () => {});
          meteor.removeEventListener("animationstart", () => {});
        }
      }
    };
  }, []);
  const restartAnimation = () => {
    const meteor = meteorRef.current;
    meteor.style.animation = "none";
    void meteor.offsetWidth;
    meteor.style.animation = null;
  };

  return (
    showBeam && (
      <span
        ref={meteorRef}
        className={twMerge(
          "absolute z-[40]  -top-4  h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg]",
          styles.meteor,
          className
        )}
      ></span>
    )
  );
};

export default Beam;
