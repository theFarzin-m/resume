"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Snowfall from "react-snowfall";

const backgroundColors = [
  "#0093E9",
  "#85FFBD",
  "#FFBBEC",
  "#ffa26c",
  "#F4D03F",
  "#fff",
];
const colors = ["#ccc", "#004080", "#333", "#000a42", "#492000", "#222"];

interface ThemeContextProps {
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function SnowfallComponent({ children }: PropsWithChildren) {
  const [color, setColor] = useState("#222");
  const [background, setBackground] = useState("#ffffff");
  const [next, setNext] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }, [background, color]);

  const changeTheme = () => {
    setColor(colors[next]);
    setBackground(backgroundColors[next]);
    setNext((prev) => (prev + 1) % colors.length);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <Snowfall
        color={color}
        snowflakeCount={250}
        radius={[0.5, 4.5]}
        speed={[0.5, 4]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("you are using ThemeContext outside ThemeContext.provider");
  }

  return context;
}
