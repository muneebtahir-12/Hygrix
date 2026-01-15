import Link from "next/link";
const navigation = [
    { text: "Our Products", href: "/#products" }, // Anchor link to ID on home page
    { text: "Contact Us", href: "/contact" },     // Link to contact page
    { text: "About", href: "/about" },           // Link to about page
];
export default function Footer() {
    return (
        <section
            className="bg-[rgba(252,242,229,0.5)] relative w-full bg-no-repeat bg-cover"
            style={{
                backgroundImage: "url('/footerbg2.png'), url('/footerbg.png')",
                backgroundPosition: "center top, center 100px", // 1st image top, 2nd image lower
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover, cover", // optional
            }}
        >

            <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[60vh] px-5 sm:px-10 md:px-20 lg:px-32 py-10 lg:py-0 gap-10 lg:gap-0">

                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-10 w-full lg:w-auto">
                    {/* Brand */}
                    <Link href="/" className="flex rounded-4xl items-center justify-center w-[120px] h-[48px] bg-[#F37303]">
                        <div className="px-1.5"><span className="text-white font-bold">Hygrix</span></div>
                        <div className="grid flex items-center p-2 grid-cols-3 bg-[#F5F5F5] h-[40px] w-[52px] rounded-r-full">
                            <span className="w-[8px] h-[8px] mt-1 bg-[#F37303] rounded-full"></span>
                            <span className="w-[3px] h-[3px] bg-[#F37303] rounded-full"></span>
                            <span className="w-[6px] h-[6px] mb-1 bg-[#F37303] rounded-full"></span>
                            <span></span> <span></span><span className="w-1 h-1 relative -top-1 left-2 bg-[#F37303] rounded-full"></span><span></span>
                            <span className="w-1.5 h-1.5 relative right-1 bg-[#F37303] rounded-full"></span><span></span><span className="w-1 h-1 ml-2 relative left-4 -top-0.5 bg-[#F37303] rounded-full"></span>
                        </div>
                    </Link>

                    {/* Email */}
                    <span className="text-[#171717] text-center lg:text-left font-aeonik text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-normal underline lowercase">
                        Hello@hygrixsupport.com
                    </span>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                        {navigation.map((item) => (
                            <Link key={item.text} href={item.href}>
                                <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full border border-[#E1E1E1] bg-white text-[#262626] font-spline-sans text-sm sm:text-base font-medium transition-colors hover:bg-gray-50">
                                    {item.text}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
                    <div className="relative flex h-[220px] sm:h-[240px] md:h-[260px] w-[250px] sm:w-[280px] md:w-[300px] items-center justify-center overflow-hidden rounded-3xl bg-orange-50/50">
                        {/* Gradient Glow Background */}
                        <div className="absolute h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 rounded-full bg-gradient-to-br from-[#be740c] to-[#f0750a] opacity-60 blur-[60px]" />
                        {/* Content Layer */}
                        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 text-center">Have a query?</h2>
                            <button className="flex w-40 sm:w-48 md:w-56 items-center justify-between rounded-full bg-black px-4 sm:px-6 py-2 sm:py-3 text-white transition-transform hover:scale-90">
                                <span className="text-sm sm:text-base font-light">Go</span>
                                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <span className="text-[#171717] text-center lg:text-right font-aeonik text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed lowercase">
                        KIZAD KHIA 8-18 PO. Box 133685, Abu Dhabi United Arab Emirates
                    </span>
                </div>
            </div>

            <hr className="mx-5 sm:mx-10 md:mx-20 lg:mx-32" />
            <p className="text-center py-5 text-sm sm:text-base">©2026 - Hygrix | All rights reserved</p>
        </section>
    );
}
