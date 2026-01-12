import Button from "./FeaturesButon"
import Link from "next/link"
export default function HealthTracking() {
    return (
        <section className="flex flex-col gap-15">

            <div className="flex flex-col gap-3 items-center justify-center mt-30">
                <Button />
                <h2 className="text-[#171717] text-center font-aeonik text-[32px] sm:text-[38px] md:text-[42px] font-normal">Simplified You Can Focus on Living</h2>
                <p className="text-[#171717] text-center text-base font-normal max-w-2xl">We remove the stress and guesswork from healthcare. so you always feel informed, supported. and in control,We remove the stress and guesswork from healthcare. so you always feel informed, supported. and in control,</p>
            </div>

            <div className="mx-5 gap-7 sm:mx-10 md:mx-20 lg:mx-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                {/* Image 1 */}
                <div className="w-full max-w-[270px] h-[340px] mx-auto bg-white rounded-[30px] overflow-hidden">
                    <img src="/HealthTracking1.png" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Card 1 */}
                <div className="w-full max-w-[270px] h-[340px] bg-[#FFE4CF] rounded-[30px] flex flex-col p-5 justify-between mx-auto">
                    <h3 className="text-[#171717] font-aeonik text-[24px] font-normal leading-normal">
                        Smart Health <br /> Tracking
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#171717] font-poppins text-[13px] font-normal leading-normal">
                            We remove the stress and guesswork from healthcare. So you always feel informed, supported, and in control.
                        </p>
                        <Link className="text-[#171717] font-poppins text-[13px] font-normal leading-normal underline" href="#">
                            More Information
                        </Link>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="w-full max-w-[270px] h-[340px] mx-auto bg-white rounded-[30px] overflow-hidden">
                    <img src="/HealthTracking2.png" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Card 2 */}
                <div className="w-full max-w-[270px] h-[340px] bg-[#FFE4CF] rounded-[30px] flex flex-col p-5 justify-between mx-auto">
                    <h3 className="text-[#171717] font-aeonik text-[24px] font-normal leading-normal">
                        Smart Health <br /> Tracking
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#171717] font-poppins text-[13px] font-normal leading-normal">
                            We remove the stress and guesswork from healthcare. So you always feel informed, supported, and in control.
                        </p>
                        <Link className="text-[#171717] font-poppins text-[13px] font-normal leading-normal underline" href="#">
                            More Information
                        </Link>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full max-w-[270px] h-[340px] bg-[#FFE4CF] rounded-[30px] flex flex-col p-5 justify-between mx-auto">
                    <h3 className="text-[#171717] font-aeonik text-[24px] font-normal leading-normal">
                        Smart Health <br /> Tracking
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#171717] font-poppins text-[13px] font-normal leading-normal">
                            We remove the stress and guesswork from healthcare. So you always feel informed, supported, and in control.
                        </p>
                        <Link className="text-[#171717] font-poppins text-[13px] font-normal leading-normal underline" href="#">
                            More Information
                        </Link>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="w-full max-w-[270px] h-[340px] mx-auto bg-white rounded-[30px] overflow-hidden">
                    <img src="/HealthTracking3.png" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Card 4 */}
                <div className="w-full max-w-[270px] h-[340px] bg-[#FFE4CF] rounded-[30px] flex flex-col p-5 justify-between mx-auto">
                    <h3 className="text-[#171717] font-aeonik text-[24px] font-normal leading-normal">
                        Smart Health <br /> Tracking
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#171717] font-poppins text-[13px] font-normal leading-normal">
                            We remove the stress and guesswork from healthcare. So you always feel informed, supported, and in control.
                        </p>
                        <Link className="text-[#171717] font-poppins text-[13px] font-normal leading-normal underline" href="#">
                            More Information
                        </Link>
                    </div>
                </div>

                {/* Image 4 */}
                <div className="w-full max-w-[270px] h-[340px] mx-auto bg-white rounded-[30px] overflow-hidden">
                    <img src="/HealthTracking4.png" alt="" className="w-full h-full object-cover" />
                </div>
            </div>



        </section>
    )
}