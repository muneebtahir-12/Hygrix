export default function ReviewsCard ({id,description,image,name,post}) {
    return(
        <section>
            <div className="flex flex-col gap-5 bg-white p-4">

                        <p className="text-[#1C1C1C] font-poppins text-[14px] font-normal leading-[159.983%]">{description}</p>

                        <div className="flex gap-1">
                            {[...Array(4)].map((_, index) => (
                                <img key={index} src="/greenstar.png" alt="star" className="w-[20px] h-[20px]" />
                            ))}
                            <img src="/whitestar.png" alt="" className="w=[20px]" />
                        </div>

                        <img src={image} alt="" className="w-[60px] h-[60px]" />
                      <div className="flex flex-col">
                          <span className="text-[#1C1C1C] font-poppins text-[18px] font-medium leading-[1.6]">{name}</span>
                        <span className="text-[#1C1C1C] font-poppins text-[14px] font-normal leading-[1.6]">{post}</span>

                      </div>
                    </div>
        </section>
    )
}