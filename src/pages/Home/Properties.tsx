import { useState, type FC, } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot, MdCameraAlt } from "react-icons/md";
import { ImageGroup, Image } from 'react-fullscreen-image'

interface Property {
    id: number;
    title: string;
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
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/11/Property-1-488x326.jpg",
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
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Villa-in-Coral-Gables-488x326.jpg",
        price: "$825,000",
        status: "sale",
        bedrooms: 4,
        bathrooms: 3.5,
        area: 3500,
        photos: 4,
        videos: 1,
    },
    {
        id: 3,
        title: "Villa on Hollywood Boulevard",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/zac-gudakov-0qir5hBOj18-unsplash-488x326.jpg",
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
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Modern-House-488x326.jpg",
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
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-488x326.jpg",
        price: "$4,750 Monthly",
        status: "rent",
        bedrooms: 4,
        bathrooms: 4,
        area: 9350,
        photos: 4,
        videos: 1,
    },
    {
        id: 6,
        title: "Luxury Penthouse in Downtown",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2015/07/property-06-exterior-1-488x326.jpg",
        price: "$1,200,000",
        status: "sale",
        bedrooms: 5,
        bathrooms: 5,
        area: 6000,
        photos: 10,
        videos: 2,
    },
    {
        id: 7,
        title: "Modern Apartment in Brickell",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Beautiful-House-488x326.jpg",
        price: "$3,200 Monthly",
        status: "rent",
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        photos: 5,
        videos: 1,
    },
    {
        id: 8,
        title: "Appartment House in Key Biscayne",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Apartment-488x326.jpg",
        price: "$2,400,000",
        status: "sale",
        bedrooms: 6,
        bathrooms: 5,
        area: 7200,
        photos: 12,
        videos: 2,
    },
    {
        id: 9,
        title: "Cozy Cottage in Coconut Grove",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Apartments-488x326.jpg",
        price: "$1,850 Monthly",
        status: "rent",
        bedrooms: 2,
        bathrooms: 1,
        area: 800,
        photos: 3,
        videos: 0,
    },
    {
        id: 10,
        title: "Office Space in Downtown Miami",
        image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-03-488x326.jpg",
        price: "$5,500 Monthly",
        status: "rent",
        bedrooms: 0,
        bathrooms: 2,
        area: 2500,
        photos: 6,
        videos: 1,
    },
];


const Properties: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 5; // 2 + 3 ka ek set
    const indexOfLast = currentPage * propertiesPerPage;
    const indexOfFirst = indexOfLast - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(properties.length / propertiesPerPage);


    const [showImage, setShowImage] = useState(false);

    return (
        <section className="lg:py-12 p-2 sm:p-5 lg:px-10 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-blue-600 font-medium">Recent</p>
                    <h2 className="text-3xl font-bold">Properties</h2>
                    <p className="text-gray-500">Check out some of our latest properties.</p>
                </div>

                {/* Layout */}
                <div className="grid gap-6">
                    {/* First Row: 2 Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {currentProperties.slice(0, 2).map((property) => (
                            <div key={property.id} className="bg-white rounded shadow-md overflow-hidden">
                                {/* Image */}
                                <div className="relative">
                                    <img src={property.image} alt={property.title} className="w-full h-60 object-cover" />
                                    {showImage && (
                                        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                                            {/* <img
                                                src={property.image}
                                                alt={property.title}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                            <button
                                                className="absolute top-4 right-4 text-white text-3xl font-bold"
                                                onClick={() => setShowImage(false)}
                                            >
                                                ✖
                                            </button> */}
                                            <ImageGroup>
                                                <Image
                                                    src={property.image}
                                                    alt={property.title}
                                                    style={{
                                                        width: '100%',
                                                        height: '240px',
                                                        objectFit: 'cover',
                                                        cursor: 'pointer',
                                                    }}
                                                />
                                            </ImageGroup>
                                        </div>
                                    )}


                                    {/* Tags */}
                                    <div className="absolute top-2 left-2 flex gap-2 text-xs text-white">
                                        <span
                                            className="bg-black/30 px-2 py-1 rounded flex items-center gap-1 cursor-pointer"
                                            onClick={() => setShowImage(true)}
                                        >
                                            <MdCameraAlt /> {property.photos}
                                        </span>
                                    </div>
                                    {/* Status */}
                                    <span className={`absolute bottom-2 left-2 `}>
                                        <span className={`text-xs px-3 py-1 rounded ${property.status === "sale" ? "bg-[var(--blue)] text-white" : "bg-green-600 text-white"}`}>{property.status === "sale" ? "For Sale" : "For Rent"}</span>
                                        <h3 className="font-semibold text-white text-lg">{property.title}</h3>
                                    </span>
                                </div>
                                {/* Content */}
                                <div className="p-4">
                                    <p className="">For Sale</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-[var(--blue)] text-xl">{property.price}</p>
                                        <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
                                            <div className="flex items-center gap-1"><FaBed /> {property.bedrooms}</div>
                                            <div className="flex items-center gap-1"><FaBath /> {property.bathrooms}</div>
                                            <div className="flex items-center gap-1"><MdOutlineSquareFoot /> {property.area} sq ft</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row: 3 Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {currentProperties.slice(2).map((property) => (
                            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                {/* Image */}
                                <div className="relative">
                                    <img src={property.image} alt={property.title} className="w-full h-60 object-cover" />
                                    {/* Tags */}
                                    <div className="absolute top-2 left-2 flex gap-2 text-xs text-white">
                                        <span className="bg-black/30 px-2 py-1 rounded flex items-center gap-1">
                                            <MdCameraAlt /> {property.photos}
                                        </span>
                                    </div>
                                    {/* Status */}
                                    <span className={`absolute bottom-2 left-2 text-xs font-semibold px-3 py-1 rounded ${property.status === "sale" ? "bg-blue-600 text-white" : "bg-green-600 text-white"}`}>
                                        {property.status === "sale" ? "For Sale" : "For Rent"}
                                    </span>
                                </div>
                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{property.title}</h3>
                                    <p className="text-blue-600 font-bold">{property.price}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
                                        <div className="flex items-center gap-1"><FaBed /> {property.bedrooms}</div>
                                        <div className="flex items-center gap-1"><FaBath /> {property.bathrooms}</div>
                                        <div className="flex items-center gap-1"><MdOutlineSquareFoot /> {property.area} sq ft</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white border text-gray-700 hover:bg-blue-50"}`}
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
