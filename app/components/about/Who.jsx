"use client"
import { useRef } from "react"
import Button from "../home/FeaturesButon";
import { motion, useScroll, useTransform } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    },
}

const fadeLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    },
}

const fadeRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
}

const textReveal = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
}

export default function Who() {
    const sectionRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })
    
    // Scroll-based transformations
    const leftX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-30, 0, 0, 30])
    const rightX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95])

    return (
        <motion.section 
            ref={sectionRef}
            className="px-5 sm:px-10 md:px-20 lg:px-32 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-24 items-start overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            style={{ opacity, scale }}
        >
            {/* Left Side - Title */}
            <motion.div 
                className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full md:w-auto md:flex-shrink-0"
                variants={fadeLeft}
                style={{ x: leftX }}
            >
                <motion.div variants={fadeUp}>
                    <Button />
                </motion.div>
                <motion.h3 
                    className="text-[#171717] font-aeonik text-2xl sm:text-3xl md:text-4xl font-normal"
                    variants={fadeUp}
                >
                    Who we are
                </motion.h3>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
                className="w-full md:flex-1"
                variants={fadeRight}
                style={{ x: rightX }}
            >
                <motion.p 
                    className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-loose"
                    variants={textReveal}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore saepe, nulla dicta exercitationem autem id sunt? Ipsa dolore quam atque. Fugiat, vel repellendus? Explicabo beatae sequi at voluptatum distinctio inventore quae debitis officia vero, recusandae dicta veritatis in rerum odit aliquam.
                </motion.p>
                <motion.p 
                    className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-loose mt-3 sm:mt-4"
                    variants={textReveal}
                >
                    Natus doloremque labore nulla accusamus iusto, dicta odit a odio nostrum pariatur eaque quos, voluptas voluptates minima omnis ad consequatur, magnam aut? Illum iusto quaerat maiores vel. A quia illum quos veritatis repudiandae quod qui fugiat eaque velit sed quo laboriosam ducimus alias doloremque ullam.
                </motion.p>
                <motion.p 
                    className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-loose mt-3 sm:mt-4"
                    variants={textReveal}
                >
                    Deserunt aspernatur aliquam officia harum culpa quae tempora, labore sapiente, ipsa sequi incidunt laboriosam aut animi eaque inventore asperiores dolorem vero earum recusandae rem temporibus iusto.
                </motion.p>
            </motion.div>
        </motion.section>
    )
}