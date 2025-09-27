
import React, { useState } from 'react';


import "leaflet/dist/leaflet.css";

import type { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Banner from '../Banner';

function srcset(image: string, size: number, rows = 1, cols = 1) {


    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };


}

export default function Gallery() {



    const [anchorElLocation, setAnchorElLocation] = useState<null | HTMLElement>(null);
    const [anchorElStatus, setAnchorElStatus] = useState<null | HTMLElement>(null);
    const [anchorElType, setAnchorElType] = useState<null | HTMLElement>(null);

    // --------------------handle search of map --------------------
    // Selected values

    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    // Open Handlers
    const handleOpenLocation = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElLocation(event.currentTarget);
    };
    const handleOpenStatus = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElStatus(event.currentTarget);
    };
    const handleOpenType = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElType(event.currentTarget);
    };

    // Close Handlers
    const handleCloseLocation = () => setAnchorElLocation(null);
    const handleCloseStatus = () => setAnchorElStatus(null);
    const handleCloseType = () => setAnchorElType(null);




    const cityCoords: Record<string, LatLngExpression> = {
        Miami: [25.7617, -80.1918],
        "Coral Gables": [25.7215, -80.2684],
        Kendall: [25.6793, -80.3173],
        Orlando: [28.5383, -81.3792],
        Tampa: [27.9506, -82.4572],
        Jacksonville: [30.3322, -81.6557],
        Tallahassee: [30.4383, -84.2807],
        FortLauderdale: [26.1224, -80.1373],
        WestPalmBeach: [26.7153, -80.0534],
        Naples: [26.1420, -81.7948],
        NewYork: [40.7128, -74.006],
        LosAngeles: [34.0522, -118.2437],
        Chicago: [41.8781, -87.6298],
        Houston: [29.7604, -95.3698],
        Dallas: [32.7767, -96.797],
        Atlanta: [33.749, -84.388],
    };

    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [showCity, setShowCity] = useState<string | null>('NewYork');
    const CityMap = ({ city }: { city: string }) => {
        const coords = cityCoords[city];
        if (!coords) {
            return (
                <div className="w-full h-64 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-semibold">
                    No map available for {city}
                </div>
            );
        }

        return (
            <MapContainer
                center={coords}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
                className="rounded z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coords}>
                    <Popup>{city}</Popup>
                </Marker>
            </MapContainer>
        );
    };
    const handleSearch = () => {
        if (!selectedLocation) {
            alert("Please select a location");
            return;
        }

        if (selectedLocation && !selectedStatus && !selectedType) {
            setShowCity(selectedLocation);
        }

        if (selectedLocation && selectedStatus && selectedType) {
            setShowCity(selectedLocation); // filtering ke baad bhi wahi map show karega
        }
    };
    return (
        <>

            <Banner page={'Property Gallery'} />

            <div className="relative pb-20">

                {/* Map + Filters */}
                <div className=" shadow-md rounded-lg p-6 absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-7xl z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                        {/* Location Menu */}
                        <Tooltip title="Select Location">
                            <button
                                onClick={handleOpenLocation}
                                className="border-0 p-4 rounded bg-gray-100 w-full text-left"
                            >
                                {selectedLocation || "Location"}
                            </button>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorElLocation}
                            open={Boolean(anchorElLocation)}
                            onClose={handleCloseLocation}
                        >
                            {Object.keys(cityCoords).map((loc) => (
                                <MenuItem
                                    key={loc}
                                    onClick={() => {
                                        setSelectedLocation(loc);
                                        handleCloseLocation();
                                    }}
                                >
                                    <Typography>{loc}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                        {/* Status Menu */}
                        <Tooltip title="Select Status">
                            <button
                                onClick={handleOpenStatus}
                                className="border-0 p-2 rounded bg-gray-100 w-full text-left"
                            >
                                {selectedStatus || "Status"}
                            </button>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorElStatus}
                            open={Boolean(anchorElStatus)}
                            onClose={handleCloseStatus}
                        >
                            {["For Sale", "For Rent"].map((st) => (
                                <MenuItem
                                    key={st}
                                    onClick={() => {
                                        setSelectedStatus(st);
                                        handleCloseStatus();
                                    }}
                                >
                                    <Typography>{st}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                        {/* Type Menu */}
                        <Tooltip title="Select Type">
                            <button
                                onClick={handleOpenType}
                                className="border-0 p-2 rounded bg-gray-100 w-full text-left"
                            >
                                {selectedType || "Type"}
                            </button>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorElType}
                            open={Boolean(anchorElType)}
                            onClose={handleCloseType}
                        >
                            {["Apartment", "Condo", "Single Family"].map((tp) => (
                                <MenuItem
                                    key={tp}
                                    onClick={() => {
                                        setSelectedType(tp);
                                        handleCloseType();
                                    }}
                                >
                                    <Typography>{tp}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                        {/* Search Button */}
                        <button
                            onClick={() => handleSearch()}
                            className="bg-[var(--blue)] text-white px-4 py-2 rounded hover:bg-[var(--blue)]/70"
                        >
                            Search
                        </button>
                    </div>




                </div>
                {/* Map Placeholder */}
                <div className="w-full h-84  p-2">
                    {showCity ? (
                        <CityMap city={showCity} />
                    ) : (
                        <div className="w-full h-full bg-blue-100 rounded-b flex items-center justify-center text-blue-600 font-semibold">
                            [Map View Placeholder]
                        </div>
                    )}
                </div>
            </div>
            <div className="p-10">

                <ImageList
                    className=''
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    )
}

const itemData = [
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Beautiful-House-1240x720.jpg',
        title: 'Breakfast',
        rows: 3,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg',
        title: 'Burger',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg',
        title: 'Camera',
        rows: 3,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Apartment.jpg',
        title: 'Coffee',
        rows: 3,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/floor-plan-00.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-03-1240x720.jpg',
        title: 'Basketball',
        rows: 3,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-05-1240x720.jpg',
        title: 'Fern',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Villa-in-Coral-Gables-1240x720.jpg',
        title: 'Tomato basil',
        rows: 3,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Apartment.jpg',
        title: 'Hats',
        rows: 3,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/dining-00-1240x720.jpg',
        title: 'Sea star',
        rows: 4,
        cols: 2,
    },
    {
        img: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-00-1240x720.jpg',
        title: 'Bike',
        rows: 2,
        cols: 2,
    },
];
