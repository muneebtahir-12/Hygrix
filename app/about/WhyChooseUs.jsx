import Button from "../components/home/FeaturesButon";
import ReasonsCard from "./Reasons";
import data from "../components/data/data.json";

export default function WhyChooseUs() {
    const reason = data.reasons;

    return (
        <section className=" mx-5  sm:mx-10  md:mx-20  lg:mx-32  mt-20  mb-20 flex  flex-col  lg:flex-row  gap-10  items-center ">
            {/* Image */}
            <img src="/chooseus.pnG" alt="Why choose us" className=" w-[280px] sm:w-[320px] md:w-[380px] lg:w-[450px] xl:w-[520px]" />



            {/* Content */}
            <div className="flex flex-col gap-6 w-full">
                <Button />

                <h2 className=" font-aeonik  font-normal  text-3xl  sm:text-4xl  md:text-[42px]  leading-tight lg:text-left"> Why Choose Our <br className="hidden lg:block" /> Medical Care?  </h2>

                <div className="flex flex-col gap-5">
                    {reason.map((reason) => (
                        <ReasonsCard key={reason.id} {...reason} />
                    ))}
                </div>
                 <div className="flex items-center justify-center w-[110px] h-[43px] rounded-[100px] bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)]">
                <span className="text-white">Get Started</span>
            </div>
            </div>
        </section>
    );
}
