import { motion } from "framer-motion";
import { excellences } from "../../data";

type ContentBlockProps = (typeof excellences)[number] & {
  odd: boolean;
};
export default function ContentBlock({
  id,
  title,
  subtitle,
  description,
  url,
  image,
  odd,
}: ContentBlockProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.05 * id,
        damping: 80,
      }}
      viewport={{
        once: true,
      }}
      className="md:grid md:grid-cols-12 md:gap-6 items-center"
    >
      <figure
        className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${
          odd ? "" : "md:order-1"
        }`}
      >
        <img
          className="max-w-full mx-auto h-auto rounded-3xl"
          src={image}
          width={540}
          height={405}
          alt={title}
        />
      </figure>
      <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6">
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter text-xl text-gray-900 dark:text-gray-50 mb-2 font-architect">
            {title}
          </div>
          <h3 className="h3 mb-3 text-gray-900 dark:text-gray-100">
            {subtitle}
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
          {url && (
            <a
              href={url}
              aria-label={`Read more about ${title}`}
              className="btn btn-sm text-white bg-[#003263] hover:bg-[#003263]/80 sm:w-auto sm:mb-0 mt-auto"
            >
              View article
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
