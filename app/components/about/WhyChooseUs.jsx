"use client"
import Image from "next/image"
import Button from "../home/FeaturesButon";
import ReasonsCard from "./Reasons";
import data from "../components/data/data.json";
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
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

export default function WhyChooseUs() {
    const reason = data.reasons;

    return (
        <motion.section 
            className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 mt-20 mb-20 flex flex-col lg:flex-row gap-10 items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
        >
            {/* Image */}
            <motion.div
                variants={fadeLeft}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Image src="/chooseus.png" alt="Why choose us" width={520} height={520} className="w-72 sm:w-80 md:w-96 lg:w-96 xl:w-130" />
            </motion.div>

            {/* Content */}
            <motion.div 
                className="flex flex-col gap-6"
                variants={fadeRight}
            >
                <motion.div variants={fadeUp}>
                    <Button />
                </motion.div>

                <motion.h2 
                    className="font-aeonik font-normal text-3xl sm:text-4xl md:text-[42px] leading-tight lg:text-left"
                    variants={fadeUp}
                >
                    Why Choose Our <br className="hidden lg:block" /> Medical Care?
                </motion.h2>

                <motion.div 
                    className="flex flex-col gap-5"
                    variants={staggerContainer}
                >
                    {reason.map((item) => (
                        <motion.div key={item.id} variants={fadeUp}>
                            <ReasonsCard {...item} />
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.div 
                    className="flex items-center justify-center w-28 h-10.5 rounded-full bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer"
                    variants={fadeUp}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="text-white">Get Started</span>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
