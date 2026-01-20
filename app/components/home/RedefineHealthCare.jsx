"use client"

import Button from "./FeaturesButon"
import { motion } from "motion/react"

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
          className="text-[#171717] font-aeonik text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-normal md:w-100 lg:w-auto"
        >
          Redefining Healthcare <br /> Clearer, Kinder, Smarter
        </motion.h3>
      </motion.div>

      {/* Image */}
      {/* <p className="w-[450px] text-[#171717] text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet pariatur, explicabo fugiat sed laboriosam cum. Error, exercitationem? Quasi numquam nemo ea totam magni temporibus sunt! Asperiores maiores at totam natus veritatis perspiciatis ducimus in. Quam iusto aut illo tempora asperiores? Mollitia ex perferendis, vitae fuga et laboriosam quia nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem at cumque quae porro consequatur corrupti reprehenderit provident voluptates maxime eius animi nulla inventore vel laudantium ducimus quibusdam mollitia libero, perferendis hic. Unde iusto pariatur dolore nostrum quos, facilis, impedit architecto quod, accusantium possimus ex iure aspernatur laborum officiis sint? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor commodi amet eaque exercitationem laborum repellat temporibus quae maiores, labore ab ad non eius quam, itaque quaerat sequi dignissimos nam doloremque voluptas reiciendis. Vel, suscipit dolorum accusantium cupiditate corrupti ex cumque repellendus quibusdam laboriosam earum voluptas ipsum minima officia officiis repudiandae?</p> */}

    </section>
  )
}
