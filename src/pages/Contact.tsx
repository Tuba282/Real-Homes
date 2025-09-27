
import React, { useState } from 'react';


import "leaflet/dist/leaflet.css";

import type { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Banner from '../Banner';


export default function Contact() {



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

            <Banner page={'Contact'} />

            <div className="relative pb-20 bg-[#F9FAFB]">

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
                        <span
                            onClick={() => handleSearch()}
                            className="bg-[var(--blue)] text-white px-4 py-2 font-[borik] rounded hover:bg-[var(--blue)]/70"
                        >
                            Search
                        </span>
                    </div>




                </div>
                {/* Map Placeholder */}
                <div className="w-full h-40  p-2 ">
                    {/* {showCity ? (
                        <CityMap city={showCity} />
                    ) : (
                        <div className="w-full h-full bg-blue-100 rounded-b flex items-center justify-center text-blue-600 font-semibold">
                            [Map View Placeholder]
                        </div>
                    )} */}
                </div>

                <section
                    className="relative w-full min-h-screen bg-amber-400 flex items-center justify-center bg-cover bg-fixed bg-center py-30"
                    style={{
                        backgroundImage:
                            "url('https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-vecislavas-popa-1571460.jpg')",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-blue-950 opacity-50"></div>
                    <div className="absolute top-0 left-0 bg-gray-50 w-full h-30" style={{ clipPath: `polygon(0 0, 100% 0%, 0% 100%)` }}></div>
                    <div className="absolute bottom-0 right-0 bg-gray-50 w-full h-30" style={{ clipPath: ` polygon(100% 100%, 100% 0%, 0% 100%)` }}></div>

                    <div className="relative w-full max-w-5xl z-10 container mx-auto px-4 justify-center items-center grid  lg:grid-cols-2 gap-10">
                        {/* Left Side Form */}
                        <div className="bg-white rounded shadow-lg p-4 md:p-6 w-full max-w-lg">
                            <form className="space-y-4">
                                <select className="w-full border-1 border-gray-200 text-sm text-gray-500 rounded px-3 py-2">
                                    <option>Mr</option>
                                    <option>Ms</option>
                                    <option>Mrs</option>
                                </select>

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile"
                                    className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="State"
                                    className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="How did you find us?"
                                        className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Agent"
                                        className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                    />
                                </div>

                                <textarea
                                    placeholder="Message"
                                    className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                                    rows={3}
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-[var(--blue)] hover:bg-blue-950 text-white font-semibold py-2 rounded transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Right Side Content */}
                        <div className="w-full h-full  p-2 bg-[#F9FAFB] rounded">
                            {showCity ? (
                                <CityMap city={showCity} />
                            ) : (
                                <div className="w-full h-full bg-blue-100 rounded-b flex items-center justify-center text-blue-600 font-semibold">
                                    [Map View Placeholder]
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
