import clsx from "clsx";
import React from "react";

const LogoMain = ({ strokeWidth, className }: any) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 62 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id="logo"
    >
      <path
        d="M6.09521 5.98586C6.09521 5.98586 52.9961 16.1083 55.9639 27.9921C58.9317 39.876 7.14953 55.3998 7.14953 55.3998"
        stroke="url(#paint0_linear_101_8)"
        strokeWidth="11"
        strokeMiterlimit={`3.86874`}
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_101_8"
          x1="30.5444"
          y1="2.16844"
          x2="31.5724"
          y2="50.347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#374151" />
          <stop offset="0.5" stopColor="#111827" />
          <stop offset="1" stopColor="#374151" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoMain;
