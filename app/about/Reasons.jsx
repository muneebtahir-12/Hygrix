export default function ReasonsCard({id,text,point}) {
    return(
        <div className="flex items-start gap-4 ">
                    <img src="/correct.png" alt="" />
                    <p className="lg:w-[350px] font-light text-[13px] leading-[1] tracking-normal"><span className="font-semibold text-[13px] leading-[1] tracking-normal">{point}</span>{text}</p>
                </div>
    )
}