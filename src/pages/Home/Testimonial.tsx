import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';
import { FaQuoteLeft } from 'react-icons/fa';

type Testimonial = {
    text: string;
    author: string;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Jane Doe",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-210x210.jpg"
    },
    {
        text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        author: "John Smith",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2-210x210.jpg"
    },
];

export default function Testimonial() {
    return (
        <div className="relative bg-white px-4 md:px-16 py-30">
            <div className="absolute top-0 left-0 bg-gray-50 w-full h-20" style={{ clipPath: `polygon(0 0, 100% 0%, 0% 100%)` }}></div>
            <div className="absolute bottom-0 right-0 bg-gray-50 w-full h-20" style={{ clipPath: ` polygon(100% 100%, 100% 0%, 0% 100%)` }}></div>

            <div className="text-center">
                {/* Top Heading */}
                <span className="text-md  text-blue-400  mb-4">
                    Words
                </span>
                <h2 className="text-3xl text-gray-900 mb-4">
                    From Our Customers
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Our trusted customers say the nicest things about us
                </p>

            </div>
            <Swiper
                modules={[Navigation, EffectFade]}
                // effect="fade"
                navigation
                loop
                className="relative testimonial-swiper  max-w-7xl"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full   max-w-5xl  mx-auto flex flex-col md:flex-row items-center gap-8">
                            {/* Left Side: Icon + Image + Logo */}
                            <div className=" flex flex-col items-center">
                                <div className="bg-[var(--blue)] text-white p-10 rounded">
                                    <FaQuoteLeft size={24} />
                                </div>
                                <img src={item.image} alt="Client" className=" w-26 h-26 -mt-8 ms-20 rounded" />
                            </div>

                            {/* Right Side: Testimonial Text */}
                            <div className="text-center md:text-left max-w-xl">
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{item.text}</p>
                                <p className="mt-4 text-gray-800 font-semibold">{item.author}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}