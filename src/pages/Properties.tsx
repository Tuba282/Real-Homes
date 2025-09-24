import { useState } from 'react';

import { FaBed, FaBath, FaRulerCombined, FaHeart, FaExchangeAlt } from 'react-icons/fa';


import { properties } from '../Settings/data';

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

  return (
    <section className="bg-gray-50 min-h-screen py-8 px-4 lg:px-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Property List</h1>

      {/* Map + Filters */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <select className="border p-2 rounded" defaultValue="Location">
            <option disabled>Location</option>
            <option>Miami</option>
            <option>Coral Gables</option>
            <option>Kendall</option>
          </select>
          <select className="border p-2 rounded" defaultValue="Status">
            <option disabled>Status</option>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
          <select className="border p-2 rounded" defaultValue="Type">
            <option disabled>Type</option>
            <option>Apartment</option>
            <option>Condo</option>
            <option>Single Family</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Search</button>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-64 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold">
          [Map View Placeholder]
        </div>
      </div>

      {/* Sorting + Grid */}
      <div className="w-full max-w-7xl mx-auto  flex flex-col lg:flex-row gap-8">
        {/* Left: Property Grid */}
        <div className="flex-1  w-full lg:max-w-4xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">All Properties</h2>
            <select
              className="border p-2 rounded"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              {sortOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="w-full grid gap-5 lg:gap-2">
            {sortedProperties.map((prop) => (
              <div key={prop.id} className="w-full lg:w-auto bg-white lg:h-[200px] grid lg:flex justify-center! items-center! shadow rounded  overflow-hidden">
                {/* Left: Image Section */}
                <div className="relative ">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="lg:w-[250px] w-full h-48 lg:h-[200px] object-cover"
                  />


                  {/* Icons */}
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <button className=" p-1 rounded-full hover:text-red-500">
                      <FaHeart size={18} className='text-white' />
                    </button>
                    <button className=" p-1 rounded-full hover:text-blue-500">
                      <FaExchangeAlt size={18} className='text-white' />
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
                    <span className="flex flex-col items-center gap-1">
                      BedRoom
                      <FaBed /> {prop.beds}
                    </span>
                    <span className="flex flex-col items-center gap-1">
                      BedRoom
                      <FaBath /> {prop.baths}
                    </span>
                    <span className="flex flex-col items-center gap-1">
                      BedRoom
                      <FaRulerCombined /> {prop.area} sq ft
                    </span>
                  </div>
                </div>
                <div className=" bg-[var(--gray)]/50 h-[80%] w-[1px] mx-auto mb-4"></div>

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
        </div>

        {/* Right: Sidebar */}
        <aside className="w-full hidden lg:block md:w-64">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Featured Properties</h3>
          <div className="space-y-4">
            {properties.slice(0, 2).map((prop) => (
              <div key={prop.id} className="bg-white shadow rounded-lg overflow-hidden">
                <img src={prop.image} alt={prop.title} className="w-full h-24 object-cover" />
                <div className="p-2">
                  <h4 className="text-sm font-bold text-gray-800">{prop.title}</h4>
                  <p className="text-blue-600 text-sm">${prop.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}