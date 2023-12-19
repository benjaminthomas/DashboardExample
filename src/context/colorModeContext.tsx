import React, { createContext, useContext, ReactNode, useEffect } from "react";
import useColorMode from "../hooks/useColorMode";

type ColorMode = "light" | "dark";

type ColorModeContextType = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
};

const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

type ColorModeProviderProps = {
  children: ReactNode;
};

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  children,
}) => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  // Memoize the context value
  const contextValue = React.useMemo(
    () => ({ colorMode, toggleColorMode }),
    [colorMode, toggleColorMode]
  );

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error(
      "useColorModeContext must be used within a ColorModeProvider"
    );
  }
  return context;
};
