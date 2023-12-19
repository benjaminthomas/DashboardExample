import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { features } from "../../data";
import Feature from "./feature";
import SectionHeader from "../sectionHeader";
import Section from "../section";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <Section idName="services">
      <div className="pt-12 md:pt-20 border-t border-gray-200/50 dark:border-gray-800 grid grid-cols-12 sm:px-5 gap-x-8">
        <SectionHeader
          titleTextValue="Versatile Services: Storage, Transport & Beyond"
          styles="col-span-12 lg:col-span-5 !text-left"
        />
        <motion.div
          className="col-span-12 lg:col-span-7"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            damping: 80,
          }}
          viewport={{
            once: true,
          }}
        >
          <Swiper
            modules={[FreeMode, Pagination]}
            pagination={{ clickable: true }}
            freeMode={true}
            centerInsufficientSlides={true}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              580: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
            }}
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <Feature {...feature} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </Section>
  );
}
