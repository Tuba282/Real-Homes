import { motion } from "framer-motion";

const properties = [
    {
        title: "Single Family",
        count: "4 Properties",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-emre-can-acer-2079249.jpg",
    },
    {
        title: "Shop",
        count: "1 Property",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-caeli-team-3714960.jpg",
    },
    {
        title: "Apartment",
        count: "2 Properties",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-rachel-claire-4857774.jpg",
    },
    {
        title: "Villa",
        count: "4 Properties",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/denys-striyeshyn-wJ7yGwz2-00-unsplash-scaled-1-820x1024.jpg",
    },
];

export default function ImageSection() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-5 gap-6 items-stretch p-2 sm:px-5">
                {/* Left Side - First 2 cards */}
                {properties.slice(0, 2).map((property, index) => (
                    <motion.div
                        key={index}
                        className={`relative rounded overflow-hidden shadow-lg h-[400px] bg-[url('${property.image}')] bg-center bg-cover p-4`}
                        whileHover={{ scale: 1.05 }}
                        style={{ backgroundImage: `url('${property.image}')` }}
                    >
                        <h3 className="text-white text-xl font-[borik] text-shadow-2-sm">{property.title}</h3>
                        <p className="text-white text-shadow-2-sm">{property.count}</p>
                        <div className="absolute inset-0 z-0! bg-black/50 opacity-30 hover:opacity-0 transition-all flex flex-col justify-end p-6">
                        </div>
                    </motion.div>
                ))}

                {/* Center Text */}
                <div className="flex flex-col justify-center text-center px-6">
                    <h2 className="text-md font-bold font-[borik]! text-gray-900 mb-4">
                        Configure and customize stuff around <br /> your website without
                        going into code.
                    </h2>
                    <div className=" bg-[var(--blue)] w-[80%] h-[1px] mx-auto mb-4"></div>
                    <p className="text-gray-600 text-sm">
                        RealHomes theme gracefully facilitates real estate business owners
                        by making property management easier & affordable.
                    </p>
                </div>

                {/* Right Side - Next 2 cards */}
                {properties.slice(2).map((property, index) => (
                    <motion.div
                        key={index}
                        className={`relative rounded overflow-hidden shadow-lg h-[400px] bg-[url('${property.image}')] bg-center bg-cover p-4`}
                        whileHover={{ scale: 1.05 }}
                        style={{ backgroundImage: `url('${property.image}')` }}
                    >
                        <h3 className="text-white text-xl font-[borik] text-shadow-2-sm">{property.title}</h3>
                        <p className="text-white text-shadow-2-sm">{property.count}</p>
                        <div className="absolute inset-0 z-0! bg-black/50 opacity-30 hover:opacity-0 transition-all flex flex-col justify-end p-6">
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
