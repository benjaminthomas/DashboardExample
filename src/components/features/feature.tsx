import { motion } from "framer-motion";
import { features } from "../../data";
import { useColorModeContext } from "../../context/colorModeContext";

type FeatureProps = (typeof features)[number];

export default function Feature({
  title,
  description,
  image,
  imageDark,
}: FeatureProps) {
  const { colorMode } = useColorModeContext();
  return (
    <motion.div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
      <div className="flex items-center w-16 h-16 rounded-full mb-2">
        {colorMode === "dark" ? (
          <img src={image} className="w-[50%] opacity-70" alt={title} />
        ) : (
          <img src={imageDark} className="w-[50%] opacity-70" alt={title} />
        )}
      </div>

      <h4
        className="h4 mb-2 text-gray-900 dark:text-gray-100 line-clamp-1"
        title={title}
      >
        {title}
      </h4>
      <p className="text-lg text-gray-900 dark:text-gray-200">{description}</p>
    </motion.div>
  );
}
