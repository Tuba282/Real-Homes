
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { FaBed, FaShower } from "react-icons/fa";
import { BiLocationPlus, BiSquare } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Tooltip from "@mui/material/Tooltip";

const slides = [
  {
    id: 1,
    img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/spacejoy-RqO6kwm4tZY-unsplash-1.jpg",
    title: "Villa on Hollywood Boulevard",
    location: "Hatteras Lane, Hollywood, FL 33019, USA",
    beds: 3,
    baths: 4,
    size: 4530,
    price: 740000,
    desc: "Spacious and fabulous home in prime location. This executive style four bed, four bath home is a must see!",
  },
  {
    id: 2,
    img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg",
    title: "Modern Luxury Villa",
    location: "Palm Drive, Miami, FL 33101, USA",
    beds: 5,
    baths: 6,
    size: 6200,
    price: 1250000,
    desc: "The very best waterfront location in Harbor Islands complete with private dock and amazing water views.  ",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect="fade"
        loop
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Card */}
              <div className="p-2 absolute h-[300px] top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-lg shadow-xl max-w-lg w-[90%] hidden md:flex justify-between">
                <div className="w-[12%] h-full flex flex-col justify-center items-stretch border-r border-[var(--gray)] p-4">
                  <Tooltip title="Beds">
                    <span className="flex flex-col gap-2 justify-center text-xs px-3 py-5 items-center h-full  text-[var(--gray)]">
                      <FaBed className="text-lg" />
                      4
                    </span>
                  </Tooltip>
                  <hr />
                  <Tooltip title="Baths">
                    <span className="flex flex-col gap-2 justify-center text-xs px-3 py-5 items-center h-full  text-[var(--gray)]">
                      <FaShower className="text-lg" />
                      4
                    </span>
                  </Tooltip>
                  <hr />
                  <Tooltip title="Area">
                    <span className="flex flex-col gap-2 justify-center text-xs px-3 py-5 items-center h-full  text-[var(--gray)]">
                      <BiSquare className="text-lg" />
                      9578 <br /> <div className="text-[10px]">sq ft</div>
                    </span>
                  </Tooltip>
                </div>
                <div className="w-[88%] h-full grid p-4">
                  <p className=" text-gray-500 mb-2">
                    <BiLocationPlus className="inline text-md mr-2 text-[var(--blue)]" />
                    <span className="text-sm leading-relaxed tracking-tight">

                      {slide.location}
                    </span>
                  </p>
                  <h2 className="text-2xl md:text-3xl text-gray-600 font-semibold mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-sm mb-4 leading-relaxed ">
                    {slide.desc}
                  </p>

                  <div className="flex justify-between items-center">
                    <p className="text-[var(--blue)] font-bold text-xl md:text-2xl mb-4">
                      ${slide.price.toLocaleString()}
                    </p>

                    <button className="bg-[var(--blue)] text-white px-4 py-1 rounded-md transition">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev left-0! !bg-blue-400 !text-white/80 text-md! !w-10 !h-10 !rounded-r !flex !items-center !justify-center shadow-md hover:!bg-blue-600"></div>
        <div className="swiper-button-next right-0! !bg-blue-400 !text-white/80 !w-10 !h-10 !rounded-l !flex !items-center !justify-center shadow-md hover:!bg-blue-600"></div>
      </Swiper>
    </div>
  );
};

export default Hero;
