import ReviewsCard from "./ReviewsCard"
import ReviewsSlider from "./ReviewSlider"
import data from "../data/data.json"

export default function Reviews() {
    const review = data.reviews

    // Prepare data for slider
    const sliderData = review.map((item) => ({
        id: item.id,
        component: <ReviewsCard {...item} />,
    }))

    return (
        <section className="bg-[#FFF8F2] mt-30 h-auto w-full flex justify-center">
            <div className="mt-20 mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-center w-full px-5 sm:px-10 md:px-20 lg:px-32 gap-8">

                {/* LEFT CONTENT */}
                <div className="flex flex-col lg:flex-col items-start lg:items-start gap-6 lg:gap-8 lg:w-[35%]">
                    <div className="flex items-start lg:flex-col gap-4 lg:gap-6">
                        <img src="/colon.png" alt="Colon" className="sm:w-[86px] sm:h-[66px] w-[75px] h-[50px]" />
                        <h3 className="text-[#1C1C1C] font-aeonik sm:text-[32px] text-[28px] font-normal leading-[1] sm:leading-[1.1]">
                            What our customers <br /> are saying
                        </h3>
                    </div>

                    {/* CUSTOM ARROWS */}
                    <div className="flex gap-5 items-center justify-between w-full lg:w-auto mt-4 lg:mt-6">
                        <button className="reviews-prev">
                            <img src="/rightarrow.png" alt="Prev" />
                        </button>
                        <img src="/pagination.png" alt="" />
                        <button className="reviews-next">
                            <img src="/next1.png" alt="Next" />
                        </button>
                    </div>
                </div>

                {/* SWIPER */}
                <div className="w-full lg:w-[65%]">
                    <ReviewsSlider
                        data={sliderData}
                        prevClass="reviews-prev"
                        nextClass="reviews-next"
                    />
                </div>
            </div>
        </section>
    )
}
