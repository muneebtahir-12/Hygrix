import Button from "./FeaturesButon";
import data from "../data/data.json";
import ProductCard from "./ProductCard";
export default function Products() {
    const products = data.products;
    return (
        <section className="mt-30 mx-5 items-center sm:mx-10 md:mx-20 lg:mx-32 flex flex-col gap-7 md:gap-10  ">
            <div className="flex gap-3 flex-col items-center">
                <Button />
                <h3 className="text-[#171717] text-center font-aeonik text-[32px] sm:text-[38px] md:text-[42px] font-normal">Simplified You Can Focus on Living</h3>
            </div>
            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        quantity={product.quantity}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center w-[110px] sm:w-[120px] md:w-[133px] h-[40px] sm:h-[42px] md:h-[46px] rounded-[100px] bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-900 transition-all duration-300">
                <span className="text-white font-medium text-xs sm:text-xs md:text-sm transition-all duration-300">View More</span>
            </div>
        </section>
    )
}