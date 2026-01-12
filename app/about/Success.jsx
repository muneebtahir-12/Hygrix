"use client";
import SuccessCard from "./SuccessCard"
import data from "../components/data/data.json"
export default function Success() {
    const success = data.success;
    return (
        <section className="flex flex-col gap-5 bg-[#FAFAFA] w-auto py-20">
            <div className="flex flex-col gap-10 mx-5  sm:mx-10  md:mx-20  lg:mx-32">
                <h4 className="font-aeonik font-normal text-[35px] lg:text-[42px] leading-[1] tracking-normal text-center">Measuring our Success <br /> with Key Metrics</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {success.map((success) => (
                        <SuccessCard key={success.id} {...success} />
                    ))}
                </div>
            </div>
        </section>
    )
}