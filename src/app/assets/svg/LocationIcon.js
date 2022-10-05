import React from "react";
import { Icon } from "./svg.styles";

const LocationIcon = ({ width, height }) => {
  return (
    <Icon width={width} height={height}>
      <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.99998 0C2.69154 0 0 2.69723 0 6.01258C0 11.3438 5.39888 15.5396 5.62874 15.7157L6.00002 16L6.37106 15.7157C6.60092 15.5396 12 11.3438 12 6.01258C12 2.69719 9.30846 0 5.99998 0ZM5.99954 14.4343C4.81703 13.4145 1.22249 9.98674 1.22249 6.01258C1.22249 3.37267 3.36536 1.22505 5.99998 1.22505C8.63413 1.22505 10.7775 3.37271 10.7775 6.01258C10.7775 9.97823 7.18154 13.4129 5.99954 14.4343Z" />
        <path d="M6.10688 9C4.46545 9 3.13 7.66473 3.13 6.02338C3.13 4.38195 4.46541 3.04651 6.10688 3.04651C7.74831 3.04651 9.08371 4.38191 9.08371 6.02338C9.08371 7.66473 7.74831 9 6.10688 9ZM6.10688 4.02278C5.00373 4.02278 4.10624 4.92028 4.10624 6.02342C4.10624 7.12644 5.00373 8.02381 6.10688 8.02381C7.20998 8.02381 8.10748 7.12644 8.10748 6.02342C8.10748 4.92024 7.21002 4.02278 6.10688 4.02278Z" />
      </svg>
    </Icon>
  );
};

export default LocationIcon;