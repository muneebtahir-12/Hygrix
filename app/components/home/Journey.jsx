import Button from "./FeaturesButon";

export default function Journey() {
  return (
    <section className="bg-[#FFF8F2]">
      <div className="mt-30 py-20 sm:mx-10 md:mx-20 lg:mx-32 mx-5 py-10 gap-10 sm:gap-15 flex flex-col md:flex-row items-center md:gap-10 lg:gap-30">
        {/* Image */}
      <img src="/Journey.png" alt="" className="lg:w-[400px] w-[350px] h-auto object-contain"/>

      {/* Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-5">
        <Button />

        <h4 className="text-[#171717] font-aeonik text-2xl md:text-3xl lg:text-4xl font-normal leading-snug">
          Your Journey <br /> Starts in 5 Simple Steps
        </h4>

        <span className="text-[#171717] font-poppins text-sm sm:text-base md:text-md lg:text-lg">
          We remove the stress and guesswork from healthcare.
        </span>

        <div className="flex items-center justify-center w-[110px] sm:w-[120px] md:w-[133px] h-[40px] sm:h-[42px] md:h-[46px] rounded-full bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-900 transition-all duration-300">
          <span className="text-white font-medium text-xs sm:text-sm md:text-base transition-all duration-300">
            Get Started
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}
