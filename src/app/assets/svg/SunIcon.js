import React from "react";
import { Icon } from "./svg.styles";

const SunIcon = ({ height, width }) => {
  return (
    <Icon height={height} width={width}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.322 187.322">
        <path d="M101.677 40.71 93.661 0l-8.016 40.71h8.016z" />
        <path d="m67.185 47.804 6.942-4.008L46.83 12.548l13.413 39.264z" />
        <path d="m47.804 67.186 4.007-6.943L12.548 46.83l31.247 27.298z" />
        <path d="m40.709 93.66.001-8.014L0 93.66l40.709 8.017z" />
        <path d="m47.803 120.137-4.007-6.943-31.248 27.297 39.262-13.412z" />
        <path d="M60.244 135.511 46.83 174.774l27.297-31.247-6.943-4.008z" />
        <path d="m85.645 146.611 8.016 40.711 8.016-40.709h-8.016z" />
        <path d="m120.137 139.519-6.942 4.006 27.296 31.249-13.412-39.263z" />
        <path d="m139.519 120.137-4.009 6.94 39.263 13.414-31.248-27.297z" />
        <path d="m187.322 93.66-40.71-8.015.001 8.015-.001 8.016z" />
        <path d="m139.518 67.184 4.007 6.942 31.248-27.296-39.264 13.413z" />
        <path d="m127.078 51.812 13.413-39.264-27.298 31.248 6.943 4.008z" />
        <path d="M93.661 45.265v96.793c26.729 0 48.397-21.668 48.397-48.397S120.39 45.265 93.661 45.265z" />
        <path d="M45.265 93.661c0 26.729 21.668 48.397 48.396 48.397V45.265c-26.728 0-48.396 21.668-48.396 48.396z" />
      </svg>
    </Icon>
  );
};

export default SunIcon;