"use client"

import Button from "./FeaturesButon"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function RedefineHealthCare() {
 

  return (
    <section className="flex justify-between flex-col lg:flex-row gap-4 sm:mx-10 md:mx-20 lg:mx-32 mx-5 mt-30">

      {/* Text Content */}
      <motion.div
        className="flex flex-col gap-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Button />
        <motion.h3
          variants={fadeUp}
          className="text-[#171717] font-aeonik text-[32px] sm:text-[33px] md:text-[35px] lg:text-[42px] font-normal md:w-[400px] lg:w-auto"
        >
          Redefining Healthcare <br /> Clearer, Kinder, Smarter
        </motion.h3>
      </motion.div>

      {/* Image */}
      <div>
        <img src="/define.png" alt="Redefining Healthcare" className="w-full h-auto object-contain" />
      </div>

    </section>
  )
}
