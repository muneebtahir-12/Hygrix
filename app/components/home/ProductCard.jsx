"use client"
import Link from "next/link";
import {motion} from "framer-motion"
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}
export default function ProductCard({ image, name, quantity }) {
    return (
        <motion.div className="bg-[#FBFBFB] p-5 flex flex-col gap-5 rounded-lg shadow-sm"
        variants={cardVariant}
        whileHover={{scale:1.05}}
        >

            {/* Image Container */}
            <div className="bg-white p-3 relative flex justify-center items-center h-40 sm:h-44 md:h-48 w-full">
                <div className="relative">
                    {/* First Image */}
                    <img 
                        src={image} 
                        alt={name} 
                        className="h-28 sm:h-32 md:h-36 object-contain relative z-0" 
                    />
                    {/* Second Image overlapping - adjusted positioning for better centering */}
                    <img  src={image}  alt={name}  className="h-28 sm:h-32 md:h-36 object-contain absolute top-2 left-6 lg:left-4.5 z-10" />
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-2">
                <h6 className="text-[#222823] font-aeonik text-sm sm:text-base md:text-[15px] font-normal leading-normal capitalize">{name}</h6>
                <span className="text-[#5A5A5A] font-poppins text-[11px] sm:text-[12px] md:text-[13px] font-normal leading-normal capitalize">{quantity}</span>
                <Link href="#" className="flex gap-2 underline items-center text-[#2181D5]">
                    <span className="text-[#2181D5] font-aeonik text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-normal capitalize">View Details</span>
                    <img src="/Arrow.png" alt="arrow" className="w-[10px] sm:w-[12px] md:w-[14px] h-2" />
                </Link>
            </div>
        </motion.div>
    );
}
