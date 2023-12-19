import { motion } from "framer-motion";
import ModalVideo from "./modelVideo";
import Section from "./section";
import SectionHeader from "./sectionHeader";
import VideoThumb from "/what-we-do-thumb.webp";

export default function WhatWeDo() {
  return (
    <Section>
      <SectionHeader
        titleTextValue="What we do"
        descriptionTextValue="Checkout our below video for more details"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          bounceDamping: 40,
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}
      >
        <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1024}
          thumbHeight={576}
          thumbAlt="Modal video thumbnail"
          video="/what-we-do.mp4"
          videoWidth={1920}
          videoHeight={1080}
        />
      </motion.div>
    </Section>
  );
}
