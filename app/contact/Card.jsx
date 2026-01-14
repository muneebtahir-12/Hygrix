export default function Card({id,name,des,image,contact}){
    return(
        <div className="bg-[#FCECDC] flex flex-col lg:h-[200px] justify-between gap-6 p-5  rounded-2xl hover:bg-[#FFE4CF]">
                <div className="flex gap-3 items-center"><img src={image} alt="" /><span className="font-aeonik font-normal text-[24px] leading-[1] tracking-normal"
                >{name}</span></div>
                <p className="font-poppins font-normal text-[13px] leading-[1] tracking-normal mt-8 w-[200px]">{des}</p>
                <span className="font-poppins font-normal text-[13px] leading-[1] tracking-normal">{contact}</span>
            </div>
    )
}