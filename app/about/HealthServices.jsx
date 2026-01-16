import Navbar from "../components/common/Navbar"
import Brands from "../components/common/Brands"

export default function HealthServices() {
    return (
        <section className="bg-[#FCF2E580] h-auto relative flex flex-col" style={{
            backgroundImage: "url('/bg.png')",
            backgroundPosition: "center 140px",
            backgroundRepeat: "no-repeat, no-repeat",
                    backgroundPosition: "center, center",
                    backgroundSize: "cover, cover",}}>
            <Navbar />
            <div className=" bg-no-repeat bg-cover mt-10 ">
                <div className="pt-10 sm:mx-10 md:mx-20 lg:mx-32 mx-5 flex-1 flex items-center">
                    <div className="mx-auto w-full max-w-[1160px] rounded-3xl overflow-hidden h-full">
                        <div className="relative w-full h-full min-h-[320px] bg-center bg-cover" style={{
                            backgroundImage: "url('/aboutbg.png')",
                        }}>
                            {/* Overlay to ensure text readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="relative h-full flex items-center">
                                <div className="p-6 sm:p-10 lg:p-15 lg:mt-30 mt-20">
                                    <h3 className="text-white font-aeonik text-[32px] sm:text-[44px] md:text-[56px] font-normal leading-tight">Healthcare Services <br /> Tailored to Your Needs</h3>
                                    <p className="mt-4 text-white font-poppins text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-relaxed max-w-[620px]">We remove the stress and guesswork from healthcare, so you always feel informed, supported, and in control.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-15 ">
                <Brands />
            </div>
        </section>
    )
}