
import { VscTriangleRight } from "react-icons/vsc";
import React, { useState } from 'react';
import "leaflet/dist/leaflet.css";

import type { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import Banner from "../Banner";


const Agent = () => {

  // Random number for listed properties (max 6)
  const randomListed = Math.floor(Math.random() * 6) + 1;


  const categories = [
    {
      title: "Commercial",
      subcategories: ["Office", "Shop"],
    },
    {
      title: "Residential",
      subcategories: [
        "Apartment",
        "Apartment Building",
        "Condominium",
        "Single Family",
        "Villa",
      ],
    },
    {
      title: "Commercial",
      subcategories: ["Office", "Shop"],
    },
  ];

  const agents = [
    {
      name: "Nathan James",
      phone: "+1-234-456-7893",
      email: "robot@inspirythemes.com",
      listed: 4,
      watsap: 1 - 222 - 333 - 4433,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-300x300.jpg",
    },
    {
      name: "Melissa William",
      phone: "+1-234-456-7892",
      email: "robot@inspirythemes.com",
      listed: 4,
      watsap: 1 - 222 - 333 - 4433,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-300x300.jpg",
    },
    {
      name: "Alice Brian",
      phone: "+1-234-456-7891",
      email: "robot@inspirythemes.com",
      listed: 3,
      watsap: 1 - 222 - 333 - 4433,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6.jpg",
    },
    {
      name: "John David",
      phone: "+1-234-456-7890",
      email: "robot@inspirythemes.com",
      listed: 5,
      watsap: 1 - 222 - 333 - 4433,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg",
    },
  ];



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
    <div className="bg-[#F7F7F7]">

      <Banner page={'Agents'} />

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



      <div className="max-w-7xl  mx-auto grid lg:grid-cols-3 gap-8 lg:mt-16 md:mt-10 mt-5  lg:p-3">

        {/* Blog Posts*/}
        <div className="lg:col-span-2 space-y-8 px-2  ">

          <div className="">
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6  p-1">
              {agents.map((agent, index) => (
                <Link
                  to={`/agent/${index}`}
                  key={index}
                  className="bg-white shadow-md rounded-2xl p-6 mb-15 flex gap-6 items-center hover:shadow-lg transition-shadow duration-200"
                >
                  {/* Card */}
                  <div className=" rounded-2xl ">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <div className="flex-shrink-0 relative ">
                        <span className=" ">
                          <img
                            src={agent.image}
                            alt={agent.name}
                            className="w-32 h-32 lg:-mt-[60px] rounded-lg   object-cover"
                          />
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col items-center justify-center mb-2 gap-3">
                            <span className="text-lg flex gap-3 flex-row justify-center items-center font-bold text-[black]  group-hover:text-[#1CB2FF] transition-colors duration-300">
                              {agent.name}
                              <span className="text-xs bg-[#1CB2FF] text-white px-1 py-1 rounded-full"> <TiTick /></span>
                            </span>
                            <p className="text-gray-500 text-sm mt-1">
                              <span className="text-[#1CB2FF]"> {randomListed}</span> <span>Listed Properties</span>
                            </p>
                          </div>

                          {/* Social */}
                          <div className="flex gap-3 mt-2 text-gray-400 text-lg">
                            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                            <FaInstagram className="hover:text-[#ffb3c2] cursor-pointer" />
                            <FaPinterestP className="hover:text-red-600 cursor-pointer" />
                          </div>
                        </div>


                      </div>
                    </div>
                    {/* Static description */}
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                      Interactively procrastinate high-payoff content without backward-compatible data.
                      Quickly cultivate optimal processes and tactical architectures. Completely iterate
                      strategic theme areas via accuratee-markets.
                      <br />                       <br />
                      Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                      <br />                       <br />
                      Credibly intermediate backend ideas for cross-platform models. Continually re intermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.
                    </p>

                    {/* Static contact */}
                    <div className="mt-4 text-sm flex gap-5 justify-between items-center text-gray-700 space-y-1">
                      <div className="flex gap-4 flex-wrap">
                        <p><span className="font-medium">Office:</span> 1-222-333-4444</p>
                        <p><span className="font-medium">Mobile:</span> {agent.phone}</p>
                        <p><span className="font-medium">Fax:</span> 1-333-444-5555</p>
                        <p><span className="font-medium">Email:</span> {agent.email}</p>
                      </div>

                      {/* Action text -- detail navigation handled by wrapping Link */}
                      <span className="text-blue-300 lg:w-[200px] font-medium mt-2 inline-block">View My Listings →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8 px-2">

          {/* Categories */}
          <div className="px-4 py-8 rounded-lg lg:text-left text-center" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-xl mb-4 text-[#041C33]" >Property Types</h2>
            <ul className="flex flex-col sm:flex-col-reverse md:flex-row lg:flex-col gap-3 lg:justify-start justify-center lg:items-start items-center  text-sm text-gray-700">
              {categories.map((cat, i) => (
                <li key={i} className="cursor-pointer">
                  <div className="hover:text-[#1CB2FF] flex justify-between items-center">
                    <span className="heading flex gap-1 font-semibold">
                      <VscTriangleRight />
                      {cat.title}
                    </span>
                  </div>

                  <ul className="ml-6 mt-2 space-y-1">
                    {cat.subcategories.map((sub, j) => (
                      <li
                        key={j}
                        className="flex gap-1 items-center text-gray-600 hover:text-[#1CB2FF]"
                      >
                        <VscTriangleRight className="text-xs" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Agent;