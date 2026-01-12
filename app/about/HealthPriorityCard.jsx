export default function HealthCard({id,image,title,description}) {
    return(
        <div className="rounded-4xl flex flex-col bg-white p-7 justify-center items-center gap-4">
                <div className="flex items-center justify-center w-[65px] h-[65px] rounded-full bg-[#FFF8F2]"><img src={image} alt="" className="w-[29px] h-[29px]" /></div>
                <h5 className="font-aeonik font-normal text-[20px] leading-[1.2] tracking-normal">{title}</h5>
                <p className="font-poppins font-normal text-[13px] leading-[1.1] tracking-1">{description}</p>
            </div>
    )
}