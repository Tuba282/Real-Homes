type Property = {
  id: number;
  title: string;
  price: number;
  date: string;
  image: string;
  slidesImages?: string[];
  status: "For Sale" | "For Rent";
  type: "Apartment" | "Condo" | "Villa" | "Single Family";
  beds: number;
  baths: number;
  area: number;
};
export const properties: Property[] = [
  {
    id: 1,
    title: "Home in Merrick Way",
    price: 540000,
    date: "2024-08-01",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/11/Property-1-488x326.jpg",
    status: "For Sale",
    type: "Single Family",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-04-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/house-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    beds: 3,
    baths: 3,
    area: 4300,
  },
  {
    id: 2,
    title: "Villa in Coral Gables",
    price: 825000,
    date: "2024-07-15",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Villa-in-Coral-Gables-488x326.jpg",
    status: "For Sale",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/interior-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/interior-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-05-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    type: "Villa",
    beds: 4,
    baths: 4,
    area: 3500,
  },
  {
    id: 3,
    title: "Villa on Hollywood Boulevard",
    price: 740000,
    date: "2024-06-28",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/zac-gudakov-0qir5hBOj18-unsplash-488x326.jpg",
    status: "For Sale",
    type: "Single Family",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/dining-01-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-01-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    beds: 3,
    baths: 4,
    area: 4530,
  },
  {
    id: 4,
    title: "Traditional Food Restaurant",
    price: 2600,
    date: "2024-09-10",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Modern-House-488x326.jpg",
    status: "For Rent",
    type: "Condo",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Villa-in-Coral-Gables-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/dining-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-04-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-01-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    beds: 2,
    baths: 1,
    area: 950,
  },
  {
    id: 5,
    title: "Villa on Grand Avenue",
    price: 4750,
    date: "2024-08-20",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-488x326.jpg",
    status: "For Rent",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-04-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/house-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    type: "Villa",
    beds: 4,
    baths: 4,
    area: 9350,
  },
  {
    id: 6,
    title: "Luxury Penthouse in Downtown",
    price: 1200000,
    date: "2024-05-05",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2015/07/property-06-exterior-1-488x326.jpg",
    status: "For Sale",
    type: "Apartment",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-04-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/house-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    beds: 5,
    baths: 5,
    area: 6000,
  },
  {
    id: 7,
    title: "Modern Apartment in Brickell",
    price: 3200,
    date: "2024-09-01",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Beautiful-House-488x326.jpg",
    status: "For Rent",
    type: "Apartment",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/dining-01-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-01-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    beds: 2,
    baths: 2,
    area: 1200,
  },
  {
    id: 8,
    title: "Apartment House in Key Biscayne",
    price: 2400000,
    date: "2024-06-12",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Apartment-488x326.jpg",
    status: "For Sale",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Villa-in-Coral-Gables-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/dining-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-04-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-01-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    type: "Apartment",
    beds: 6,
    baths: 5,
    area: 7200,
  },
  {
    id: 9,
    title: "Cozy Cottage in Coconut Grove",
    price: 1850,
    date: "2024-07-30",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Apartments-488x326.jpg",
    status: "For Rent",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-04-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/house-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    type: "Single Family",
    beds: 2,
    baths: 1,
    area: 800,
  },
  {
    id: 10,
    title: "Office Space in Downtown Miami",
    price: 5500,
    date: "2024-09-15",
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-03-488x326.jpg",
    status: "For Rent",
    slidesImages: [
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-00-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-04-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/house-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
    ],
    type: "Condo",
    beds: 0,
    baths: 2,
    area: 2500,
  },
];

export const agents = [
  {
    name: "John Smith",
    role: "Real Estate Agent",
    email: "robot@inspirythemes.com",
    phone: "1-234-456-7892",
    propertyCount: 4,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-210x210.jpg",
  },
  {
    name: "Sophia Johnson",
    role: "Luxury Specialist",
    email: "robot@inspirythemes.com",
    phone: "1-234-456-7892",
    propertyCount: 3,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-210x210.jpg",
  },
  {
    name: "Michael Brown",
    role: "Commercial Expert",
    email: "robot@inspirythemes.com",
    phone: "1-234-456-7892",
    propertyCount: 5,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2-210x210.jpg",
  },
  {
    name: "Emma Davis",
    role: "Villa Consultant",
    email: "robot@inspirythemes.com",
    phone: "1-234-456-7892",
    propertyCount: 8,
    image:
      "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6-210x210.jpg",
  },
];


