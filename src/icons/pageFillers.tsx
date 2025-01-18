import clsx from "clsx";
import React from "react";

export const RotatingBeam = ({ className }: any) => {
  return (
    <svg
      viewBox="0 0 1026 1026"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
        stroke="#D4D4D4"
        strokeOpacity="0.7"
      ></path>
      <path
        d="M513 1025C230.23 1025 1 795.77 1 513"
        stroke="url(#:R65m:-gradient-1)"
        strokeLinecap="round"
      ></path>
      <defs>
        <linearGradient
          id=":R65m:-gradient-1"
          x1="1"
          y1="513"
          x2="1"
          y2="1025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#06b6d4"></stop>
          <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
