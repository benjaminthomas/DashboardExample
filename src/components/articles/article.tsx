import { motion } from "framer-motion";
import { articles } from "../../data";

type ArticleProps = (typeof articles)[number];

export default function Article({
  title,
  description,
  image,
  id,
}: ArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.05 * id,
        damping: 80,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col items-start col-span-12 sm:col-span-6 xl:col-span-4 h-full"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 md:h-56"
      />
      <h4
        className="h4 mb-2 line-clamp-1 text-gray-900 dark:text-gray-200"
        title={title}
      >
        {title}
      </h4>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
        {description}
      </p>
      <a
        href="/"
        aria-label="view article"
        className="btn btn-sm text-white bg-[#003263] hover:bg-[#003263]/80 sm:w-auto sm:mb-0 mt-auto"
      >
        View article
      </a>
    </motion.div>
  );
}
