"use client";
import { useColorModeContext } from "../../context/colorModeContext";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorModeContext();

  return (
    <button
      aria-label="Change website theme"
      className="fixed z-30 bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <BsSun className="text-gray-800" /> : <BsMoon />}
    </button>
  );
}
