import * as React from "react";

function SvgBgCurvyDesktop(props) {
  return (
    <svg width={1440} height={449} {...props}>
      <defs>
        <path id="bg-curvy-desktop_svg__a" d="M0 0h1454v449H0z" />
      </defs>
      <g transform="translate(-14)" fill="none" fillRule="evenodd">
        <mask id="bg-curvy-desktop_svg__b" fill="#fff">
          <use xlinkHref="#bg-curvy-desktop_svg__a" />
        </mask>
        <path
          d="M14 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H14V413.956z"
          fill="#181F2B"
          mask="url(#bg-curvy-desktop_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgBgCurvyDesktop;
