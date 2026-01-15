const brands = [
  { src: "/Brand1.png", alt: "Brand 1", w: "w-16 lg:w-[74.8px]", h: "h-[37.2px]" },
  { src: "/Brand2.png", alt: "Brand 2", w: "w-24 lg:w-[141.7px]", h: "h-[27.2px]" },
  { src: "/Brand3.png", alt: "Brand 3", w: "w-20 lg:w-[87px]", h: "h-[58px]" },
  { src: "/Brand4.png", alt: "Brand 4", w: "w-28 lg:w-[148.4px]", h: "h-[48.6px]" },
  { src: "/Brand5.png", alt: "Brand 5", w: "w-14 lg:w-[51.6px]", h: "h-[35.2px]" },
  { src: "/Brand6.png", alt: "Brand 6", w: "w-24 lg:w-[113px]", h: "h-[39.2px]" },
  { src: "/Brand7.png", alt: "Brand 7", w: "w-20 lg:w-[88.8px]", h: "h-[44.4px]" },
  { src: "/Brand8.png", alt: "Brand 8", w: "w-28 lg:w-[127.9px]", h: "h-[44.9px]" },
];

export default function Brands() {
  return (
    <section className="mt-5 overflow-hidden py-10 sm:mx-10 md:mx-20 lg:mx-32 mx-15">
      <div className="animate-marquee">
        {/* We map the list twice to create the infinite loop effect */}
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="flex items-center justify-center mx-5 shrink-0">
            <img 
              src={brand.src} 
              alt={brand.alt} 
              className={`${brand.w} ${brand.h} object-contain grayscale hover:grayscale-0 transition-all duration-300`} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}