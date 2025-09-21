import { useState, type FC } from "react";
import { FaBed, FaBath, FaRegHeart } from "react-icons/fa";
import { MdOutlineSquareFoot, MdCameraAlt } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

interface Property {
    id: number;
    title: string;
    location: string;
    image: string;
    price: string;
    status: "sale" | "rent";
    bedrooms: number;
    bathrooms: number;
    area: number;
    photos: number;
    videos: number;
}

const properties: Property[] = [
    {
        id: 1,
        title: "Home in Merrick Way",
        location: "Merrick Way, Miami, FL",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800",
        price: "$540,000",
        status: "sale",
        bedrooms: 3,
        bathrooms: 3,
        area: 4300,
        photos: 6,
        videos: 1,
    },
    {
        id: 2,
        title: "Villa in Coral Gables",
        location: "Coral Gables, Miami, FL",
        image: "https://images.unsplash.com/photo-1600607687870-5027b3d5128d?w=800",
        price: "$825,000",
        status: "sale",
        bedrooms: 3,
        bathrooms: 3.5,
        area: 3500,
        photos: 4,
        videos: 1,
    },
    {
        id: 3,
        title: "Villa on Hollywood Boulevard",
        location: "Hollywood Boulevard, FL",
        image: "https://images.unsplash.com/photo-1600607688969-6f047fae1b2f?w=800",
        price: "$740,000",
        status: "sale",
        bedrooms: 3,
        bathrooms: 4,
        area: 4530,
        photos: 8,
        videos: 1,
    },
    {
        id: 4,
        title: "Traditional Food Restaurant",
        location: "Miami Downtown, FL",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        price: "$2,600 Monthly",
        status: "rent",
        bedrooms: 2,
        bathrooms: 1,
        area: 950,
        photos: 2,
        videos: 1,
    },
    {
        id: 5,
        title: "Villa on Grand Avenue",
        location: "Grand Avenue, Miami, FL",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
        price: "$4,750 Monthly",
        status: "rent",
        bedrooms: 4,
        bathrooms: 4,
        area: 9350,
        photos: 4,
        videos: 1,
    },
    // add more data if needed
];

const Properties: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 4;

    const indexOfLast = currentPage * propertiesPerPage;
    const indexOfFirst = indexOfLast - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(properties.length / propertiesPerPage);

    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-blue-600 font-medium">Recent</p>
                    <h2 className="text-3xl font-bold">Properties</h2>
                    <p className="text-gray-500">Check out some of our latest properties.</p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {currentProperties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-52 object-cover"
                                />
                                {/* Tags */}
                                <div className="absolute top-2 left-2 flex gap-2 text-xs text-white">
                                    <span className="bg-black/60 px-2 py-1 rounded flex items-center gap-1">
                                        <MdCameraAlt /> {property.photos}
                                    </span>
                                    <span className="bg-black/60 px-2 py-1 rounded">🎥 {property.videos}</span>
                                </div>
                                {/* Fav + Star */}
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <button className="bg-white p-1 rounded shadow hover:text-red-500">
                                        <FaRegHeart />
                                    </button>
                                    <button className="bg-white p-1 rounded shadow hover:text-yellow-500">
                                        <AiFillStar />
                                    </button>
                                </div>
                                {/* Status */}
                                <span
                                    className={`absolute bottom-2 left-2 text-xs font-semibold px-3 py-1 rounded ${property.status === "sale" ? "bg-blue-600 text-white" : "bg-green-600 text-white"
                                        }`}
                                >
                                    {property.status === "sale" ? "For Sale" : "For Rent"}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{property.title}</h3>
                                <p className="text-blue-600 font-bold">{property.price}</p>

                                <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
                                    <div className="flex items-center gap-1">
                                        <FaBed /> {property.bedrooms}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaBath /> {property.bathrooms}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MdOutlineSquareFoot /> {property.area} sq ft
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 rounded ${currentPage === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-white border text-gray-700 hover:bg-blue-50"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Properties;
