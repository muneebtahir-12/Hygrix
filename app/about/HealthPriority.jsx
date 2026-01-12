"use client"
import HealthCard from "./HealthPriorityCard";
import data from "../components/data/data.json";

export default function HealthPriority() {
    const healthPriority = data.healthpriorities;
    return (
        <section className="bg-[#FCF2E580] py-15">
            <div className="sm:mx-10 md:mx-20 lg:mx-32 mx-5 flex flex-col gap-10">
                <div>
                    <h3 className="text-[#171717] text-center font-aeonik text-[42px] font-normal leading-normal">Your Health, Our <br /> <span className="text-[#5D5D5D]">Priority</span></h3>
                    <p className="font-poppins font-normal text-[16px] leading-[1] tracking-normal text-center"
                    >We remove the stress and guesswork from healthcare. We  stress and guesswork from healthcare.  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {healthPriority.map((priority) => (
                        <HealthCard key={priority.id} {...priority} />
                    ))}
                </div>

            </div>
        </section>
    )
}