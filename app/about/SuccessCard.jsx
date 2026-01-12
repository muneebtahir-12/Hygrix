export default function SuccessCard({avg,id,description}) {
    return(
        <div className="flex flex-col gap-5 py-12 px-5 bg-[#FCECDC] hover:bg-[#FFE4CF] rounded-4xl">
                    <span className="font-aeonik font-normal text-[42px] leading-[1] tracking-normal text-center">{avg}</span>
                    <p className="font-poppins font-normal text-[15px] leading-[1] tracking-normal text-center">{description}</p>
                </div>
    )
}