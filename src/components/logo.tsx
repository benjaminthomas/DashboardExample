import { useColorModeContext } from "../context/colorModeContext";

type LogoStyles = {
  styles?: string;
};

export default function Logo({ styles }: LogoStyles) {
  const { colorMode } = useColorModeContext();

  return (
    <>
      {colorMode === "dark" ? (
        <img className={styles} src="/logo_light.svg" alt="Amports" />
      ) : (
        <img className={styles} src="/logo_dark.svg" alt="Amports" />
      )}
    </>
  );
}
