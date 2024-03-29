import React from "react";
import { colorPalette } from "../theme/colorPalette";
import { Icon } from "./svg.styles";

const MoonIcon = ({ height, width }) => {
  return (
    <Icon height={height} width={width}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.446 380.446">
        <path
          fill={`${colorPalette.lightGray}`}
          d="M236.182 0c35.976 0 69.617 9.99 98.306 27.343-55.09 33.321-91.917 93.799-91.917 162.88s36.827 129.559 91.917 162.88c-28.689 17.353-62.33 27.343-98.306 27.343-105.058 0-190.224-85.166-190.224-190.224S131.125 0 236.182 0z"
        />
        <path
          fill={`${colorPalette.lightGray}`}
          d="M236.189.003c5.8 0 11.54.26 17.2.77-96.95 8.74-172.93 90.22-172.93 189.45 0 99.25 76.01 180.74 172.99 189.45-5.68.51-11.44.77-17.26.77-105.06 0-190.23-85.16-190.23-190.22S131.129.003 236.189.003z"
        />
      </svg>
    </Icon>
  );
};

export default MoonIcon;
