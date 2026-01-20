"use client"
import Image from "next/image"
import Button from "../home/FeaturesButon";
import { motion } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
}

export default function Who() {
    return (
        <motion.section 
            className="flex justify-between flex-col md:flex-row gap-4 sm:mx-10 md:mx-20 lg:mx-32 mx-5 mt-30 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            <motion.div 
                className="flex flex-col gap-5"
                variants={fadeLeft}
            >
                <motion.div variants={fadeUp}>
                    <Button />
                </motion.div>
                <motion.h3 
                    className="text-[#171717] font-aeonik text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-normal"
                    variants={fadeUp}
                >
                    Who we are
                </motion.h3>
            </motion.div>
            <motion.div
                variants={fadeRight}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Image src="/define.png" alt="Who we are" width={500} height={500} className="lg:w-125 md:w-75" />
            </motion.div>
        </motion.section>
    )
}