import React from 'react'

const play = () => (<svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b)">
  <path d="M0.865723 3.27175C0.865723 0.939862 3.40964 -0.500477 5.40921 0.699267L17.9882 8.24667C19.9302 9.41188 19.9302 12.2264 17.9882 13.3916L5.40921 20.939C3.40964 22.1388 0.865723 20.6984 0.865723 18.3666L0.865723 3.27175Z" fill="white" fillOpacity="0.48" />
</g>
<defs>
  <filter id="filter0_b" x="-7.28912" y="-7.88772" width="34.8887" height="37.4138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity={0} result="BackgroundImageFix" />
    <feGaussianBlur in="BackgroundImage" stdDeviation="4.07742" />
    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
  </filter>
</defs>
</svg>)

export default React.memo(play)