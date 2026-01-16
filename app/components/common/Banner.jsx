"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Banner() {
  return (
    <section className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-32 bg-white overflow-hidden rounded-2xl sm:rounded-3xl">

      {/* Top wave background */}
      <img
        src="/bannerbg2.png"
        alt=""
        className="absolute top-0 left-0 w-full h-auto object-cover"
      />

      {/* Main content */}
      <div className="relative flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28">
        <motion.div
          className="flex flex-col items-center text-center gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            className="text-[#171717] font-aeonik text-[26px] sm:text-[32px] md:text-[40px] lg:text-[53px] font-normal leading-snug max-w-[900px]"
            variants={fadeUp}
          >
            Healthcare, Simplified <br className="hidden sm:block" />
            You Can Focus on Living.
          </motion.h2>

          <motion.p
            className="text-[#171717] font-poppins text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] font-normal leading-relaxed max-w-[720px]"
            variants={fadeUp}
          >
            We remove the stress and guesswork from healthcare, so you always feel
            informed, supported, and in control.
          </motion.p>

          <motion.div
            className="mt-3 flex items-center justify-center w-[120px] sm:w-[133px] h-[42px] sm:h-[46px] rounded-full bg-black cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white text-sm font-medium">
              View More
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Right floating image */}
      <motion.img
        src="/bannerbg.png"
        alt=""
        className="absolute -right-16 sm:-right-10 md:-right-6 bottom-6 sm:bottom-10 w-[160px] sm:w-[200px] md:w-[230px] lg:w-[250px] h-auto"
        initial={{ y: 0 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}
