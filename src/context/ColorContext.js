"use client";
import { createContext, useState } from "react";

export const ColorContext = createContext();

const hoverColorMap = {
  "#3C7BF6": "#1B5AD5",
  "#82B55B": "#5F9F2E",
  "#151515": "#2E7BEE",
  "#D9D9D9": "#B0B0B0",
};

const getHoverColor = (color) => {
  return hoverColorMap[color] || color;
};

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#3C7BF6");
  const hoverColor = getHoverColor(color);

  return (
    <ColorContext.Provider value={{ color, setColor, hoverColor }}>
      {children}
    </ColorContext.Provider>
  );
};
