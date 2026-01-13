import NavBar from "../components/common/Navbar";

export default function ContactPage() {
    return (
        // Added the background color here to cover the entire top/navbar area
        <section className="min-h-screen w-full bg-white">
            {/* Wrapper for the colored top section */}
            <div className="bg-[#FEF6EF] h-[100vh] w-full pb-20 lg:pb-32 ">
                <NavBar />

                {/* Hero */}
                <div className="relative flex flex-col md:flex-row items-center justify-center pt-10 lg:pt-0 lg:right-30">
                    <img
                        src="/herobg.png"
                        alt=""
                        className="w-[180px] md:w-[230px] relative lg:top-29 z-1"
                    />
                    <h2 className="font-aeonik font-normal mt-10 text-[30px] md:text-[42px] leading-[1.1] tracking-normal text-center px-5">
                        Healthcare, Simplified<br className="hidden md:block" /> You Can Focus on Living.
                    </h2>
                </div>
            </div>

            
            <div className="max-w-full sm:mx-10 md:mx-20 lg:mx-32 mx-5 -mt-20 md:-mt-24 lg:-mt-73 px-0 flex flex-col">
                <div className="bg-white rounded-lg  p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-38 items-start z-10 relative border border-[#d5eee2]">

                    {/* Left: Form */}
                    <div className="p-2">
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
                    <div className="hidden lg:block relative h-[500px] w-full">
                        {/* Doctor/Stethoscope (Large top left) */}
                        <img
                            src="/HealthTracking2.png"
                            className="h-[210px] w-[210px]"
                            alt="Medical professional"
                        />

                        {/* Pills Bowl (Top right) */}
                        <img
                            src="/HealthTracking4.png"
                            className="absolute top-8 right-12 h-[130px] h-[145px] rounded-lg shadow-sm"
                            alt="Supplements"
                        />

                        {/* Handshake (Mid small left) */}
                        <img
                            src="/HealthTracking3.png"
                            className="absolute top-[290px] left- h-[85px] w-[85px] rounded-lg shadow-sm"
                            alt="Consultation"
                        />

                        {/* Dumbbells (Mid right) */}
                        <img
                            src="/HealthTracking4.png"
                            className="absolute top-[210px] right-11 h-[170px] w-[190px] rounded-lg shadow-sm"
                            alt="Fitness"
                        />

                        {/* Pills Bowl (Bottom middle) */}
                        <img
                            src="/HealthTracking2.png"
                            className="absolute -bottom-2 left-[65px] w-[130px] h-[130px] rounded-lg shadow-sm"
                            alt="Supplements"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}