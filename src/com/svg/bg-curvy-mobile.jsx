import * as React from "react";

function SvgBgCurvyMobile(props) {
  return (
    <svg width={375} height={141} {...props}>
      <defs>
        <path id="bg-curvy-mobile_svg__a" d="M0 0h375v141H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bg-curvy-mobile_svg__b" fill="#fff">
          <use xlinkHref="#bg-curvy-mobile_svg__a" />
        </mask>
        <path
          d="M0 128.937c22.708-1.669 44.049-15.69 64.024-42.063 29.962-39.56 23.473-54.118 73.218-40.562 49.746 13.556 45.508 4.677 77.494-26.648 31.985-31.325 52.746-24.157 72.245 13.912 19.499 38.07 55.147 47.264 88.395 61.244 22.165 9.32 22.165 1296.047 0 3860.18H0V128.937z"
          fill="#181F2B"
          mask="url(#bg-curvy-mobile_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgBgCurvyMobile;
