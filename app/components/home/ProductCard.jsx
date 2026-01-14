import Link from "next/link";

export default function ProductCard({ image, name, quantity }) {
    return (
        <div className="w-full bg-[#FBFBFB] p-5 flex flex-col gap-5 rounded-lg shadow-sm">
            
            {/* Image Container */}
            <div className="bg-white p-3 relative flex justify-center items-start h-40 w-full sm:h-44 md:h-48 w-40  lg:w-auto">
                {/* First Image */}
                <img  src={image}  alt={name} 
                    className="h-28 sm:h-32 md:h-36 object-contain relative md:right-1 z-10" 
                />
                
                {/* Second Image overlapping */}
                <img  src={image}  alt={name}  className="h-28 sm:h-32 md:h-36 object-contain absolute bottom-3 sm:bottom-4 md:bottom-6 left-8 sm:left-9 md:left-9 z-0"/>
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
        </div>
    );
}
