import Button from "../components/home/FeaturesButon"
import Card from "./Card"
import data from "../components/data/data.json"

export default function Address() {
    const address = data.address;
    return (
        <section
            className="flex flex-col lg:flex-row justify-between mt-30 pb-30 px-5 sm:px-10 md:px-20 lg:px-32 lg:gap-15 gap-10"
            style={{
                backgroundImage: "url('/addressbg.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 45px", // moves image down
                backgroundSize: "cover"
            }}
        >
            {/* Left Side */}
            <div className="flex flex-col gap-6 lg:w-[700px]">
                <Button />
                <h3 className="font-aeonik font-normal text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] sm:leading-[1.2] tracking-normal">
                    Healthcare, Simplified You Can Focus on Living.
                </h3>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-2 w-full">
                {address.map((add, index) => (
                    <div
                        key={add.id}
                        className={`w-full ${
                            /* If it's the 3rd card, shift it right by half its width plus half the gap */
                            index === 2 ? "sm:translate-x-1/4 lg:translate-x-[calc(14%+4px)]" : ""
                            }`}
                    >
                        <Card
                            image={add.image}
                            name={add.name}
                            des={add.des}
                            contact={add.contact}
                        />
                    </div>
                ))}

                {/* Follow Us - Span 2 columns to ensure it stays below the shifted card */}
                <div className="flex flex-col items-center sm:items-end justify-center">
                    <h4 className="font-aeonik font-semibold mb-2">Follow Us</h4>
                    <div className="flex gap-2">
                        <div className="bg-[#F4F4F4] p-2 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer">
                            <img src="/facebook.png" alt="Facebook" className="w-4 h-4" />
                        </div>
                        <div className="bg-[#F4F4F4] p-2 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer">
                            <img src="/instagram.png" alt="Instagram" className="w-4 h-4" />
                        </div>
                        <div className="bg-[#F4F4F4] p-2 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer">
                            <img src="/twitter.png" alt="Twitter" className="w-4 h-4" />
                        </div>
                        <div className="bg-[#F4F4F4] p-2 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer">
                            <img src="/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
