import NavBar from "../components/common/Navbar";

export default function ContactPage() {
    return (

        <section className="mb-10">

            <div className="bg-[#FEF6EF] h-[100vh] w-full overflow-hidden" style={{
            backgroundImage: "url('/addressbg.png')", backgroundPosition: "center 140px"}}>
                <NavBar />
                <div className="relative flex flex-col-reverse md:flex-row items-center justify-center pt-10 lg:pt-0 lg:right-25">
                    <img src="/herobg.png" alt="" className="w-[180px] md:w-[230px] relative right-10 sm:right-39 md:top-29  md:right-0 z-1" />
                    <h2 className="font-aeonik font-normal mt-10 text-[30px] md:text-[42px] leading-[1.1] tracking-normal text-center px-5 md:mr-35 lg:mr-0 w-[340px] sm:w-[500px] md:w-auto">
                        Healthcare, Simplified<br className="hidden md:block" /> You Can Focus on Living.
                    </h2>
                </div>
            </div>


            <div className="max-w-full sm:mx-10 md:mx-20 lg:mx-32 mx-5 -mt-40 md:-mt-34 lg:-mt-62 px-0 flex flex-col">
                <div className="bg-white rounded-lg p-6 md:p-10 flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between z-10 relative border border-[#d5eee2]">

                    {/* Left: Form */}
                    <div className="p-2 ">
                        <h2 className="font-aeonik font-normal text-[32px] md:text-[42px] leading-[1] tracking-tight">Contact Us</h2>
                        <p className="font-poppins font-normal text-[14px] md:text-[16px] leading-[1.6] mt-4 text-gray-500 max-w-md">
                            Not sure what you need? The team at Square Events will be happy to listen to you and suggest event ideas you hadn't considered.
                        </p>

                        <form className="mt-10 space-y-4">
                            <div className="flex flex-col gap-1">
                                <label className="font-poppins font-medium text-[14px] text-gray-800">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full border-b border-gray-400 focus:border-black outline-none py-2 transition-colors placeholder:text-gray-300" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-poppins font-medium text-[14px] text-gray-800">Company Name</label>
                                <input type="text" placeholder="Enter your company name" className="w-full border-b border-gray-400 focus:border-black outline-none py-2 transition-colors placeholder:text-gray-300" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-poppins font-medium text-[14px] text-gray-800">Email</label>
                                <input type="email" placeholder="Enter your email" className="w-full border-b border-gray-400 focus:border-black outline-none py-2 transition-colors placeholder:text-gray-300" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-poppins font-medium text-[14px] text-gray-800">Your Message</label>
                                <textarea placeholder="Enter your message" rows="1" className="w-full border-b border-gray-400 focus:border-black outline-none py-2 resize-none transition-colors placeholder:text-gray-300" />
                            </div>

                            <div className="pt-4">
                                <button type="button" className="bg-black text-white px-8 py-3 rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-all">
                                    Get in Touch
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Floating Image Collage */}
                    <div className="hidden sm:block relative h-[500px] w-[400px] relative left-10">
                        {/* Doctor/Stethoscope (Large top left) */}
                        <img src="/HealthTracking2.png" className="h-[156px] w-[164px]" alt="Medical professional" />

                        {/* Pills Bowl (Top right) */}
                        <img src="/HealthTracking4.png" className="absolute top-8 right-15 h-[100px] rounded-lg shadow-sm" alt="Supplements" />

                        {/* Handshake (Mid small left) */}
                        <img src="/HealthTracking3.png" className="absolute top-60 left-2 h-[70px] w-[70px] rounded-lg shadow-sm" alt="Consultation" />

                        {/* Dumbbells (Mid right) */}
                        <img src="/HealthTracking4.png" className="absolute top-40 right-15 h-[150px] w-[170px] rounded-lg shadow-sm" alt="Fitness" />

                        {/* Pills Bowl (Bottom middle) */}
                        <img src="/HealthTracking2.png" className="absolute bottom-15 left-[65px] w-[120px] h-[120px] rounded-lg shadow-sm" alt="Supplements" />
                    </div>

                </div>
            </div>
        </section>
    );
}