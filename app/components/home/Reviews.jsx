import ReviewsCard from "./ReviewsCard"
import data from "../data/data.json"
export default function Reviews() {
    const review = data.reviews;
    return (
        <section className="bg-[#FFF8F2] mt-30 h-auto w-full flex items-center justify-center gap-2">
            <div className="sm:mx-10 md:mx-20 lg:mx-32 mx-5 mt-20 mb-20 flex flex-col lg:flex-row gap-8 lg:gap-3 items-center justify-center">
                <div className="lg:mr-10 flex items-center lg:flex-col flex-row gap-6">
                    <img src="/colon.png" alt="" className="sm:w-[86px] sm:h-[66px] w-[75px] h-[50px]" />
                    <h3 className="text-[#1C1C1C] font-aeonik sm:text-[32px] text-[28px] font-normal leading-[1] sm:leading-[1.1]">What our customers are saying</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {review.map((review) => (
                        <ReviewsCard key={review.id} {...review} />
                    ))}
                </div>
            </div>
        </section>
    )
}