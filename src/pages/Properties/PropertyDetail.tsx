import Banner from "../../Banner"
import React, { useRef, useState } from 'react';
import "leaflet/dist/leaflet.css";
import { VideoModal } from "../../Components/nurui/video-modal";

import type { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import { properties } from "../../Settings/data";
import { agents } from "../../Settings/data";
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { FaBed, FaChevronRight, FaExchangeAlt, FaHeart, FaRegCalendarAlt, FaVectorSquare } from "react-icons/fa";
import { TbBedFilled, TbCarGarage } from "react-icons/tb";
import { FaBath } from "react-icons/fa";
import { HiArrowsExpand, HiCheck } from "react-icons/hi";
import { PiMapPinAreaFill } from "react-icons/pi";
import FavoriteList from "./FavoriteList";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";


const PropertyDetail = () => {

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

  // read id from route and get property
  const params = useParams();
  const propId = params.id ? Number(params.id) : NaN;
  const property = properties.find((p) => p.id === propId);
  // use the property's slidesImages if available, otherwise fallback to the single image
  const slides = property?.slidesImages && property.slidesImages.length > 0
    ? property.slidesImages
    : property?.image
      ? [property.image]
      : [];


  // ref to FavoriteList to call addToFavorites from property cards
  const favoriteListRef = useRef<{ addToFavorites?: (id: number) => void } | null>(null);


  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner page={'Property Detail'} />
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





        <div className="mx-auto  w-full max-w-7xl  p-2">
          {
            property && (
              <div className="w-full my-8 py-6 flex items-center justify-between">
                {/* Left Section */}
                <div>
                  {/* Breadcrumb */}
                  <div className="flex items-center text-sm text-blue-500 space-x-2">
                    <a href="/property" className="underline-0">Property</a>
                    <span><FaChevronRight /></span>
                    <a href="#" className="underline-0">{property.title}</a>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mt-1">
                    {property.title}
                  </h2>

                  {/* Address */}
                  <p className="text-gray-600 mt-1">
                    {property.title} Miami, FL 33134, USA- {property.date}
                  </p>
                </div>

                {/* Right Section */}
                <div className="text-right border-l pl-6">
                  <p className="text-sm text-gray-500">For Sale</p>
                  <p className="text-2xl font-semibold text-blue-500">$540,000</p>
                </div>
              </div>
            )
          }

          {property ? (
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
              {slides.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="w-full h-screen bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>

                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div className="swiper-button-prev left-0! !bg-blue-400 !text-white/80 text-md! !w-10 !h-10 !rounded-r !flex !items-center !justify-center shadow-md hover:!bg-blue-600"></div>
              <div className="swiper-button-next right-0! !bg-blue-400 !text-white/80 !w-10 !h-10 !rounded-l !flex !items-center !justify-center shadow-md hover:!bg-blue-600"></div>
            </Swiper>
          ) : (
            <div className="p-6 text-center text-gray-600">Property not found.</div>
          )}

        </div>



        <div className="w-full max-w-7xl mx-auto mt-10 flex flex-col xl:flex-row gap-8">
          {/* LEFT CONTENT */}
          <div className="flex-1 w-full space-y-6">
            {/* Property Info Card */}
            <div className="bg-white shadow rounded-lg p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600 text-sm font-[borik]">
                  Property ID:{" "}
                  <a href="#" className="text-blue-300 hover:underline">
                    RH-2015-06
                  </a>
                </p>

                {
                  property && (
                    <button
                      onClick={() => favoriteListRef.current?.addToFavorites?.(property.id)}
                      className="flex items-center gap-2 bg-white border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition"
                    >
                      <FaHeart />
                      Add to Favorites
                    </button>
                  )
                }
              </div>

              {/* Property Specs */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6 text-center my-7">
                <div className="flex flex-col items-center">
                  <span className=" text-blue-400 font-[borik]">3</span>
                  <span className="text-gray-500 text-sm">Bedrooms</span>
                  <TbBedFilled className=" text-blue-400" size={20} />
                </div>
                <div className="flex flex-col items-center">
                  <span className=" text-blue-400 font-[borik]">3</span>
                  <span className="text-gray-500 text-sm">Bathrooms</span>
                  <FaBath className=" text-blue-400" size={20} />
                </div>
                <div className="flex flex-col items-center">
                  <span className=" text-blue-400 font-[borik]">4300</span>
                  <span className="text-gray-500 text-sm">Area (sq ft)</span>
                  <FaVectorSquare className=" text-blue-400" size={20} />
                </div>
                <div className="flex flex-col items-center">
                  <span className=" text-blue-400 font-[borik]">5400</span>
                  <span className="text-gray-500 text-sm">Lot Size (sq ft)</span>
                  <HiArrowsExpand className=" text-blue-400" size={20} />
                </div>
                <div className="flex flex-col items-center">
                  <span className=" text-blue-400 font-[borik]">2</span>
                  <span className="text-gray-500 text-sm">Garage</span>
                  <TbCarGarage className=" text-blue-400" size={20} />
                </div>
                <div className="flex flex-col items-center">
                  <span className=" text-blue-400 font-[borik]">2018</span>
                  <span className="text-gray-500 text-sm">Year Built</span>
                  <FaRegCalendarAlt className=" text-blue-400" size={20} />
                </div>

              </div>

              {/* Description */}
              <h3 className="text-2xl mb-2 text-blue-400 font-[borik] my-5">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Enchanting three bedroom, three bath home with spacious one bedroom, one
                bath cabana, in-laws quarters. Charming living area features fireplace and
                fabulous art deco details. Formal dining room. Remodeled kitchen with
                granite countertops, white cabinetry and stainless appliances. Lovely
                master bedroom has updated bath, beautiful view of the pool. Guest bedrooms
                have walk-in, cedar closets. Delightful backyard; majestic oaks surround
                the free form pool and expansive patio, wet bar and grill.
              </p>

              {/* Additional Details */}
              <h3 className="text-2xl mb-2 text-blue-400">
                Additional Details
              </h3>
              <div className="space-y-2 mb-6">
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Bedroom Features:
                  </span>{" "}
                  <span className="text-xs">Main Floor Master Bedroom, Walk-In Closet</span>
                </p>
                <p className="bg-gray-100 px-2 py-1 rounded">
                  <span className="uppercase text-sm text-gray-500">
                    Dining Area:
                  </span>{" "}
                  <span className="text-xs">Breakfast Counter/Bar, Living/Dining Combo</span>
                </p>
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Doors & Windows:
                  </span>{" "}
                  <span className="text-xs">Bay Window</span>
                </p>
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Entry Location:
                  </span>{" "}
                  <span className="text-xs">Mid Level</span>
                </p>
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Exterior Construction:
                  </span>{" "}
                  <span className="text-xs">Wood</span>
                </p>
                <p className="bg-gray-100 px-2 py-1 rounded">
                  <span className="uppercase text-sm text-gray-500">
                    Fireplace Fuel:
                  </span>{" "}
                  <span className="text-xs">Pellet Stove</span>
                </p>
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Fireplace Location:
                  </span>{" "}
                  <span className="text-xs">Living Room</span>
                </p>
                <p className="bg-gray-100 px-2 py-1 rounded">
                  <span className="uppercase text-sm text-gray-500">
                    Floors:
                  </span>{" "}
                  <span className="text-xs">Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood</span>
                </p>
              </div>

              {/* Features */}
              <h3 className="text-2xl mb-2 text-blue-400">
                Features
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500"><HiCheck size={20} /></span> 2 Stories
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500"><HiCheck size={20} /></span> Home Theater
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500"><HiCheck size={20} /></span> Lawn
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500"><HiCheck size={20} /></span> Marble Floors
                </li>
              </ul>
            </div>


            {/* Floor Plan */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl mb-2 text-blue-400">
                Floor Plan
              </h3>
              <img
                src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/floor-plan-00.jpg"
                alt="floorplan"
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Property Video */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl mb-2 text-blue-400">
                Property Video
              </h3>
              <div className="aspect-video w-full">
                <VideoModal
                  className=""
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/uTIcquf4Z-s?si=Ptrr_c7QijPE1tRc"
                  thumbnailSrc="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg"
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>

            {/* Map */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl mb-2 text-blue-400 font-[borik]">Property on Map</h3>
              <div className="w-full h-64 bg-blue-100 rounded-lg">
                {showCity ? (
                  <CityMap city={showCity} />
                ) : (
                  <div className="w-full h-full bg-blue-100 rounded-b flex items-center justify-center text-blue-600 font-semibold">
                    [Map View Placeholder]
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full xl:w-96 space-y-6">
            {/* Agent Card */}
            {
              agents.slice(0, 3).map((agent) => (
                <div className="min-h-[500px] mb-15 relative flex flex-col justify-end" key={agent.role}>
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="absolute -top-12 left-1/3 w-27 h-27 object-cover mx-auto mt-5 rounded shadow"
                  />

                  <div
                    key={agent.role}
                    className="  rounded overflow-hidden shadow-md hover:shadow-xl transition"
                  >
                    {/* Agent Image */}

                    {/* Agent Details */}
                    <div className="bg-white p-5 pt-20 text-center">
                      <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                      <p className="text-sm text-gray-500 my-1"><span className="text-md font-semibold">Office :</span> {agent.phone}</p>
                      <p className="text-sm text-gray-500 my-1"><span className="text-md font-semibold">Email :</span> {agent.email}</p>
                      <p className="text-ms text-gray-500 my-1"><span className="text-md font-semibold"> Fax: </span> 1-333-444-5555</p>
                      <p className="text-sm text-gray-500 my-1"><span className="text-md font-semibold">Whatsapp :</span> 1-222-333-4422</p>
                      <p className="text-ms text-gray-500 my-1"><span className="text-md font-semibold">Property Count :</span> {agent.propertyCount}</p>
                      <p className="text-gray-500 text-sm my-1"><span className="text-md font-semibold">Role :</span> {agent.role}</p>

                      <h3 className="text-xl mt-5 mb-2 text-left text-blue-400">Add Message!</h3>
                      <textarea name="" id="" className="mb-5 w-full bg-blue-50 border-0 outline-0 h-25"></textarea>
                      <a className="text-white p-2 sm:px-4 sm:py-3 bg-[var(--blue)]/70 rounded hover:shadow-2xl shadow-amber-50">Send Message</a>

                    </div>

                  </div>
                </div>
              ))
            }

            {/* Featured Properties */}
            <aside className="w-full xl:w-96 space-y-6 hidden xl:block">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Featured Properties</h3>
              <div className="space-y-4 w-full min-w-[300px]">
                {properties.slice(0, 2).map((prop) => (
                  <div key={prop.id} className="w-full grid justify-center! items-center! shadow rounded overflow-hidden">
                    {/* Left: Image Section */}
                    <div className="relative ">
                      <div className="group">
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className=" w-full h-48 xl:w-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-[var(--blue)]/40 bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Link to={`/property/${prop.id}`} className="bg-white text-[var(--blue)] px-4 py-2 rounded ">
                            View Details
                          </Link>
                        </div>
                      </div>



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
          </aside>
        </div>








        {/* Favorite drawer rendered once, attached to ref */}
        <FavoriteList ref={favoriteListRef} />
      </div>
    </div>
  )
}

export default PropertyDetail