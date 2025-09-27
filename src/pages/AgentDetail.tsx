import { FaBath, FaBed, FaExchangeAlt } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
import { FaHeart } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import { TiTick } from "react-icons/ti";


import "leaflet/dist/leaflet.css";

import type { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Banner from "../Banner";
import React, { useRef, useState } from "react";
import { properties } from "../Settings/data";
import FavoriteList from "./Properties/FavoriteList";
import { PiMapPinAreaFill } from "react-icons/pi";

const agents = [
  {
    id: 1,
    name: "Nathan James",
    phone: "+1-234-456-7893",
    email: "robot@inspirythemes.com",
    listed: 4,
    watsap: 1 - 222 - 333 - 4433,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-300x300.jpg",
  },
  {
    id: 2,
    name: "Melissa William",
    phone: "+1-234-456-7892",
    email: "robot@inspirythemes.com",
    listed: 4,
    watsap: 1 - 222 - 333 - 4433,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-300x300.jpg",
  },
  {
    id: 3,
    name: "Alice Brian",
    phone: "+1-234-456-7891",
    email: "robot@inspirythemes.com",
    listed: 3,
    watsap: 1 - 222 - 333 - 4433,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6.jpg",
  },
  {
    id: 4,
    name: "John David",
    phone: "+1-234-456-7890",
    email: "robot@inspirythemes.com",
    listed: 5,
    watsap: 1 - 222 - 333 - 4433,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg",
  },
];

const AgentDetail = () => {
  const params = useParams();
  const propId = params.id ? Number(params.id) : NaN;
  const agent = agents.find((p) => p.id === propId);


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


  const Posts = [
    {
      id: 1,
      title: "Modern Villa Dubai",
      price: 950000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 2,
      title: "Luxury Home in Clifton",
      price: 1250000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 3,
      title: "Modern Villa Dubai",
      price: 950000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 4,
      title: "Luxury Home in Clifton",
      price: 1250000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 5,
      title: "Elegant Bungalow in DHA",
      price: 780000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },

      sale: "Trendy",
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
    {
      id: 6,
      title: "Elegant Bungalow in DHA",
      price: 780000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },

      sale: "Trendy",
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
  ];



  const [currentPage, setCurrentPage] = useState(1);

  // pagination
  const postsPerPage = 4;
  const totalPages = Math.ceil(Posts.length / postsPerPage);

  const getPaginatedPosts = () => {
    const start = (currentPage - 1) * postsPerPage;
    return Posts.slice(start, start + postsPerPage);
  };

  const paginatedPosts = getPaginatedPosts();
  console.log(paginatedPosts);



  if (!agent) {
    return <div className="p-10 text-center text-red-500">Agent not found</div>;
  }



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


  // ref to FavoriteList to call addToFavorites from property cards
  const favoriteListRef = useRef<{ addToFavorites?: (id: number) => void } | null>(null);


  return (
    <div className="bg-[#F7F7F7]">

      <Banner page={'Agent Detail'} />

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


      <div className="max-w-7xl  mx-auto grid lg:grid-cols-3 gap-8 lg:mt-16 md:mt-10 mt-5 lg:mb-15 md:mb-10 mb-5  lg:p-3">

        {/* Blog Posts*/}
        <div className="lg:col-span-2 space-y-8 px-2  " data-aos="fade-up" data-aos-duration="1050">
          <div className="">
            <div className="grid grid-cols-1  gap-6 mb-15">
              <div className="max-w-4xl mx-auto shadow-md p-6 rounded bg-white">

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
                  <div className="mt-4 text-sm flex gap-5 text-gray-700 space-y-1">
                    <p><span className="font-medium">Office:</span> 1-222-333-4444</p>
                    <p><span className="font-medium">Mobile:</span> {agent.phone}</p>
                    <p><span className="font-medium">Fax:</span> 1-333-444-5555</p>
                    <p><span className="font-medium">Email:</span> {agent.email}</p>
                  </div>
                </div>

                <div className="max-w-6xl mx-auto  py-10">
                  <h2 className="text-2xl mb-2 text-blue-400 font-[borik] my-5">Progress & Stats</h2>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12 ">

                    {/* Chart 1: Property Location */}
                    <div className="flex flex-col">
                      <p className="mt-4 text-gray-700 font-[borik]">Property Location</p>
                      <div className="py-4 flex flex-row gap-2 items-center justify-center">
                        <div>
                          <svg width="100" height="100" viewBox="-4 -4 45 45" className="transform -rotate-90">
                            <circle
                              cx="18"
                              cy="18"
                              r="15.915"
                              fill="none"
                              stroke="#ffe4ec"
                              strokeWidth="4"
                            />
                            <circle
                              cx="18"
                              cy="18"
                              r="15.915"
                              fill="none"
                              stroke="#ffb3c2"
                              strokeWidth="7"
                              strokeDasharray="100 0"
                            />
                          </svg>
                        </div>

                        <ul className="text-sm text-gray-500 space-y-1 text-left">
                          <li className="flex gap-1 lg:flex-row text-[11px] flex-wrap"><span className="text-pink-200">o</span>  100% -
                            <span className="text-gray-500">Miami </span> </li>
                        </ul>
                      </div>
                    </div>

                    {/* Chart 2: Property Type */}
                    <div className="flex flex-col">
                      <p className="mt-4 text-gray-700 font-[borik]">Property Type</p>
                      <div className="py-4 flex flex-row gap-2 items-center justify-center">
                        <div>
                          <svg width="100" height="100" viewBox="-4 -4 45 45" className="transform -rotate-90">
                            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#ffb3c2" strokeWidth="7" strokeDasharray="60 40" />
                            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="7" strokeDasharray="20 80" strokeDashoffset="-60" />
                            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#fbbf24" strokeWidth="7" strokeDasharray="20 80" strokeDashoffset="-80" />
                          </svg>
                        </div>
                        <ul className="text-sm text-gray-500 space-y-1 text-left">
                          <li className="flex gap-1 lg:flex-row text-[11px] flex-wrap"><span className="text-pink-200">o</span> 60% - <span className="text-gray-500">Villa</span> </li>
                          <li className="flex gap-1 lg:flex-row text-[11px] flex-wrap"><span className="text-blue-200">o</span> 20% - <span className="text-gray-500">Residential</span> </li>
                          <li className="flex gap-1 lg:flex-row text-[11px] flex-wrap"><span className="text-yellow-200">o</span> 20% - <span className="text-gray-500">Single Family</span> </li>
                        </ul>
                      </div>
                    </div>

                    {/* Chart 3: Property Status */}
                    <div className="flex flex-col">
                      <p className="mt-4 text-gray-700 font-[borik]">Property Status</p>
                      <div className="py-4 flex flex-row gap-2 items-center justify-center">
                        <div>
                          <svg width="100" height="100" viewBox="-4 -4 45 45" className="transform -rotate-90">
                            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#ffb3c2" strokeWidth="7" strokeDasharray="75 25" />
                            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="7" strokeDasharray="25 75" strokeDashoffset="-75" />
                          </svg>
                        </div>
                        <ul className="text-sm text-gray-500 space-y-1 text-left">
                          <li className="flex gap-1 lg:flex-row text-[11px] flex-wrap"><span className="text-pink-200">o</span>  75% -
                            <span className="text-gray-500">For Sale </span> </li>
                          <li className="flex gap-1 lg:flex-row text-[11px] flex-wrap"><span className="text-blue-200">o</span>  25% -
                            <span className="text-gray-500">For Rent</span> </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <form className="space-y-4 text-left">
                    <label className="block lg:text-left mb-2 text-blue-400 font-[borik]">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-gray-200 text-sm rounded-md px-4 py-2 outline-0"
                    />
                    < label className="block lg:text-left mb-2 text-blue-400 font-[borik]">Email</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full border border-gray-200 text-sm rounded-md px-4 py-2 outline-0"
                    />
                    <label className="block lg:text-left mb-2 text-blue-400 font-[borik]">Phone #</label>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full border border-gray-200 text-sm rounded-md px-4 py-2 outline-0"
                    />
                    <label className="block lg:text-left mb-2 text-blue-400 font-[borik]">Message</label>
                    <textarea
                      placeholder="Your Message"
                      className="w-full border border-gray-200 text-sm rounded-md px-4 py-2 outline-0"
                    ></textarea>
                    <a className="text-white p-2 sm:px-4 sm:py-3 bg-[var(--blue)]/70 rounded hover:shadow-2xl shadow-amber-50">Send Message</a>

                  </form>
                </div>


              </div>


              {/* Left: Property Grid */}
              <div className="flex-1  w-full lg:max-w-4xl  p-2">

                <div className="w-full flex flex-wrap md:grid gap-5 lg:gap-2 p-3 justify-center items-center">
                  {properties.slice(0, 3).map((prop) => (
                    <div key={prop.id} className=" bg-white lg:h-[200px] grid md:flex justify-center! items-center! shadow rounded overflow-hidden">
                      {/* Left: Image Section */}
                      <div className="relative ">
                        <div className="group">
                          <img
                            src={prop.image}
                            alt={prop.title}
                            className="md:w-[250px] w-full h-48 md:h-[200px] object-cover"
                          />
                          <div className="absolute inset-0 bg-[var(--blue)]/40 bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Link to={`/property/${prop.id}`} className="bg-white text-[var(--blue)] px-4 py-2 rounded ">
                              View Details
                            </Link>
                          </div>
                        </div>


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

              </div>
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


      {/* Favorite drawer rendered once, attached to ref */}
      <FavoriteList ref={favoriteListRef} />
    </div>
  );
};

export default AgentDetail;