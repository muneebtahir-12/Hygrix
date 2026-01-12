import Button from "../components/home/FeaturesButon";
export default function Who() {
    return (
        <section className="flex justify-between flex-col md:flex-row gap-4 sm:mx-10 md:mx-20 lg:mx-32 mx-5 mt-30 mb-20">
            <div className="flex flex-col gap-5">
                <Button />
                <h3 className="text-[#171717] font-aeonik text-[32px] sm:text-[33px] md:text-[35px] lg::text-[42px] font-normal">Who we are</h3>

            </div>
            <img src="/define.png" alt=""  className="lg:w-[500px] md:w-[300px] " />
        </section>
    )
}