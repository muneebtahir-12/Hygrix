"use client"
import Navbar from "../common/Navbar"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}


export default function Hero() {
    return (
        <section className="bg-[#FCF2E580] min-h-[100vh] relative overflow-hidden ">
            <Navbar />
            {/* Center Content */}
            <motion.div className="object-cover h-[86vh] flex items-center justify-center" style={{
                backgroundImage: "url('/bg.png'), url('/bg2.png')",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover, cover",
            }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}>
                <div className="flex items-center justify-center min-h-[calc(10vh-120px)] md:min-h-auto px-2 sm:px-4 md:px-8 lg:mx-20 relative z-10">

                    <div className="bg-cover bg-center h-[500px] flex flex-col mx-10 sm:mx-18 md:mx-22 lg:mx-30 items-center justify-center w-full transition-all duration-300 -mt-15">

                        <motion.div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center -ml-40 sm:-ml-50 md:-ml-80 justify-center lg:mb-30 transition-all duration-300"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}>
                            <img src="/herobg.png" alt="Healthcare" className="w-full h-full object-contain transition-all duration-300" />
                        </motion.div>

                        <motion.div className="relative w-full max-w-2xl ml-5 sm:ml-30 md:ml-30 lg:ml-30 -mt-50 sm:-mt-60 md:-mt-70 lg:-mt-115 space-y-4 flex flex-col items-center text-center transition-all duration-300"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}>

                            <motion.h1 className="text-[#171717] text-center font-Aeonik text-[28px] sm:text-[35px] md:text-[43px] font-normal px-2 transition-all duration-300"
                                variants={fadeUp}>
                                Healthcare, Simplified <br /> You Can Focus on Living.</motion.h1>


                            <motion.p className="text-gray-700 text-xs sm:text-sm md:text-base w-[300px] md:w-[490px] sm:w-[400px] px-4 sm:px-3 md:px-0 transition-all duration-300"
                                variants={fadeUp}>
                                We remove the stress and guesswork from healthcare, so you always feel informed, supported, and in control.
                            </motion.p>

                            <motion.div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center transition-all duration-300"
                                variants={fadeUp}>
                                <motion.div className="flex items-center justify-center w-[110px] sm:w-[120px] md:w-[133px] h-[40px] sm:h-[42px] md:h-[46px] rounded-[100px] bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-900 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <span className="text-white font-medium text-xs sm:text-xs md:text-sm transition-all duration-300">Get Started</span>
                                </motion.div>
                                <Link href="/#products" className="flex items-center justify-center rounded-[100px] border border-[#E1E1E1] bg-white w-[150px] sm:w-[160px] md:w-[168px] h-[40px] sm:h-[42px] md:h-[46px] cursor-pointer hover:bg-gray-50 transition-all duration-300">
                                    <span className="text-gray-900 font-medium text-xs sm:text-xs md:text-sm transition-all duration-300">See All Products</span>
                                </Link>
                            </motion.div>

                            <motion.div className="flex gap-3 sm:gap-3 md:gap-4 items-center pt-1 sm:pt-1 md:pt-2 justify-center transition-all duration-300"
                                variants={fadeUp}>
                                <div className="flex -space-x-2 sm:-space-x-2.5 md:-space-x-3">
                                    {["/Cus1.png", "/Cus2.png", "/Cus3.png", "/Cus4.png"].map(
                                        (img, i) => (
                                            <motion.img key={i} src={img} alt="" className="w-[28px] sm:w-[32px] md:w-[36px] h-[28px] sm:h-[32px] md:h-[36px] rounded-full border-2 border-white"
                                                whileHover={{ y: -4 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="flex flex-col gap-0.5 sm:gap-1 transition-all duration-300">
                                    <div className="flex gap-0.5 sm:gap-1 transition-all duration-300">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src="/Star.png" alt="Star" className="w-[12px] sm:w-[14px] md:w-[16px] h-[12px] sm:h-[14px] md:h-[16px] transition-all duration-300" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-xs font-medium transition-all duration-300">Trusted by 1 Million user</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>

            </motion.div>
        </section >
    )
}