import React from "react";

const back = () => (
  <svg
    width={19}
    height={17}
    viewBox="0 0 19 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b)">
      <path
        d="M4.81691 9.51729H17.1784C18.8641 9.51729 18.8641 6.93261 17.1784 6.93261H4.81691L9.25582 2.49371C10.4358 1.31374 8.63775 -0.484295 7.40159 0.695668L0.827516 7.32593C0.321818 7.83163 0.321818 8.61827 0.827516 9.12397L7.40159 15.7542C8.63775 16.9342 10.4358 15.1362 9.25582 13.9L4.81691 9.51729Z"
        fill="white"
        fillOpacity="0.48"
      />
    </g>
    <defs>
      <filter
        id="filter0_b"
        x="-7.7066"
        y="-7.8445"
        width="34.3041"
        height="32.1382"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="4.07742" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default React.memo(back);
