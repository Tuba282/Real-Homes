import React, { useState } from 'react';
import "leaflet/dist/leaflet.css";

import type { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PiMapPinAreaFill } from "react-icons/pi";

import { FaBed, FaBath, FaHeart, FaExchangeAlt } from 'react-icons/fa';


import { properties } from '../../Settings/data';
import Banner from '../../Banner';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import FavoriteList from './FavoriteList';
import { useRef } from 'react';

const sortOptions = ['Default', 'Low to High', 'High to Low', 'Old to New', 'New to Old'];

export default function PropertyList() {
  const [sortType, setSortType] = useState('Default');

  const sortedProperties = [...properties].sort((a, b) => {
    switch (sortType) {
      case 'Low to High': return a.price - b.price;
      case 'High to Low': return b.price - a.price;
      case 'Old to New': return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'New to Old': return new Date(b.date).getTime() - new Date(a.date).getTime();
      default: return 0;
    }
  });


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



  // ------------------------------------ Pagination Working----------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 5; // ek page par kitne property cards show karne hain

  // Index calculate karo
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;

  // Current page ke properties
  const currentProperties = sortedProperties.slice(indexOfFirst, indexOfLast);

  // Total pages
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // ref to FavoriteList to call addToFavorites from property cards
  const favoriteListRef = useRef<{ addToFavorites?: (id: number) => void } | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner page={'Property'} url={'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/spacejoy-RqO6kwm4tZY-unsplash-1.jpg'} />
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

        {/* Sorting + Grid */}
        <div className="w-full max-w-7xl mx-auto mt-20 flex flex-col xl:flex-row justify-center items-center gap-8">
          {/* Left: Property Grid */}
          <div className="flex-1  w-full lg:max-w-4xl  p-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">All Properties</h2>
              <select
                className="border-0 outline-0 p-2 rounded"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                {sortOptions.map((opt) => (
                  <option className='border-0 outline-0 ' key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="w-full flex flex-wrap md:grid gap-5 lg:gap-2 p-3 justify-center items-center">
              {currentProperties.map((prop) => (
                <div key={prop.id} className=" bg-white lg:h-[200px] grid md:flex justify-center! items-center! shadow rounded overflow-hidden">
                  {/* Left: Image Section */}
                  <div className="relative ">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="md:w-[250px] w-full h-48 md:h-[200px] object-cover"
                    />


                    {/* Icons */}
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <button
                        className="p-1 rounded-full"
                        onClick={() => favoriteListRef.current?.addToFavorites?.(prop.id)}
                      >
                        <FaHeart size={20} className="text-white" />
                      </button>
                      <button className=" p-1 rounded-full hover:text-blue-500">
                        <FaExchangeAlt size={20} className='text-white' />
                      </button>
                    </div>
                  </div>

                  {/* Middle: Property Info */}
                  <div className="flex-1 grid p-6  h-full">
                    <h3 className="text-xl font-bold text-gray-800">{prop.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Enchanting {prop.beds} bedroom, {prop.baths} bath...
                    </p>

                    {/* Specs */}
                    <div className="flex gap-6 mt-3 text-gray-600 text-sm">
                      <span className="flex flex-col justify-center items-start text-xs! gap-1">
                        <FaBed size={25} className='text-gray-500' /> {prop.beds}
                        &nbsp; BedRoom
                      </span>
                      <span className="flex flex-col justify-center items-start text-xs! gap-1">
                        <FaBath size={25} className='text-gray-500' /> {prop.baths}
                        &nbsp; Bathroom
                      </span>
                      <span className="flex flex-col justify-center items-start text-xs! gap-1">
                        <PiMapPinAreaFill size={25} className='text-gray-500' /> sq ft
                        &nbsp; Area
                      </span>
                    </div>
                  </div>
                  <div className=" bg-[var(--gray)]/20 h-[80%] w-[1px] mx-auto mb-4"></div>

                  {/* Right: Status & Price */}
                  <div className="p-6 flex flex-col justify-between items-end  h-full">
                    <div>
                      <p className="text-sm text-gray-600">{prop.status}</p>
                      <p className="text-xl font-semibold text-[var(--blue)]">
                        ${prop.price.toLocaleString()}
                      </p>
                    </div>
                    <p className="grid text-md text-gray-500">
                      By <span className=" text-black">Melissa William, John David</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-white rounded-full bg-[var(--blue)] hover:bg-gray-300 disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num)}
                  className={`px-4 py-2 rounded-full ${currentPage === num ? "bg-[var(--blue)] text-white" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                  {num}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-white rounded-full bg-[var(--blue)] hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>

          </div>

          {/* Right: Sidebar */}
          <aside className="w-full hidden xl:block md:w-64">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Featured Properties</h3>
            <div className="space-y-4 w-full min-w-[300px]">
              {properties.slice(0, 2).map((prop) => (
                <div key={prop.id} className="w-full grid justify-center! items-center! shadow rounded overflow-hidden">
                  {/* Left: Image Section */}
                  <div className="relative ">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className=" w-full h-48 lg:h-[200px] object-cover"
                    />


                    {/* Icons */}
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <button className=" p-1 rounded-full" onClick={() => favoriteListRef.current?.addToFavorites?.(prop.id)}>
                        <FaHeart size={20} className='text-white' />
                      </button>
                      <button className=" p-1 rounded-full hover:text-blue-500">
                        <FaExchangeAlt size={20} className='text-white' />
                      </button>
                    </div>
                  </div>

                  {/* Middle: Property Info */}
                  <div className="flex-1 grid p-6  h-full">
                    <h3 className="text-xl font-bold text-gray-800">{prop.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Enchanting {prop.beds} bedroom, {prop.baths} bath...
                    </p>

                    {/* Specs */}
                    <div className="flex gap-6 mt-3 text-gray-600 text-sm">
                      <span className="flex flex-col justify-center items-start text-xs! gap-1">
                        <FaBed size={25} className='text-gray-500' /> {prop.beds}
                        &nbsp; BedRoom
                      </span>
                      <span className="flex flex-col justify-center items-start text-xs! gap-1">
                        <FaBath size={25} className='text-gray-500' /> {prop.baths}
                        &nbsp; Bathroom
                      </span>
                      <span className="flex flex-col justify-center items-start text-xs! gap-1">
                        <PiMapPinAreaFill size={25} className='text-gray-500' /> sq ft
                        &nbsp; Area
                      </span>
                    </div>
                  </div>

                  {/* Right: Status & Price */}
                  <div className="p-6 flex flex-col justify-between items-start gap-2.5  h-full">
                    <div>
                      <p className="text-sm text-gray-600">{prop.status}</p>
                      <p className="text-xl font-semibold text-[var(--blue)]">
                        ${prop.price.toLocaleString()}
                      </p>
                    </div>
                    <p className="grid text-md text-gray-500">
                      By <span className=" text-black">Melissa William, John David</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      {/* Favorite drawer rendered once, attached to ref */}
      <FavoriteList ref={favoriteListRef} />
    </div>
  );
}





