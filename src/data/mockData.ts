// Mock data for SRIA BIOENERGY

export const products = [
  {
    id: 1,
    name: "Premium Wood Pellets",
    category: "Industrial Grade",
    description: "High-quality industrial wood pellets for large-scale energy production",
    specs: {
      diameter: "6-8mm",
      moisture: "< 8%",
      ashContent: "< 0.7%",
      energyDensity: "4.8 kWh/kg"
    },
    image: "/products/premium-wood-pellet.png"
  },
  {
    id: 2,
    name: "Premium Residential Pellets",
    category: "Premium Grade",
    description: "Superior quality pellets for residential heating systems",
    specs: {
      diameter: "6mm",
      moisture: "< 7%",
      ashContent: "< 0.5%",
      energyDensity: "5.0 kWh/kg"
    },
    image: "/products/premium-residental-pellet.jpg"
  },
  {
    id: 3,
    name: "Bio-Coal Alternative",
    category: "Alternative Biomass",
    description: "Sustainable coal replacement for industrial applications",
    specs: {
      diameter: "10-30mm",
      moisture: "< 10%",
      ashContent: "< 3%",
      energyDensity: "4.5 kWh/kg"
    },
    image: "/products/bio-coal-alternative.jpg"
  }
  ,
  {
    id: 4,
    name: "Industrial Wood Pellets",
    category: "Industrial Grade",
    description: "Robust industrial wood pellets suitable for large-scale boilers and power plants.",
    specs: { diameter: "6-8mm", moisture: "< 8%", ashContent: "< 1%", energyDensity: "4.7 kWh/kg" },
    image: "/products/industrial-wood-pellet.png"
  },
  {
    id: 5,
    name: "Peanut Hull Pellets (PHP)",
    category: "Agricultural Biomass",
    description: "Pellets produced from peanut hulls — a sustainable agricultural residue.",
    specs: { diameter: "6-10mm", moisture: "< 10%", ashContent: "< 2%", energyDensity: "4.2 kWh/kg" },
    image: "/products/peanut-hull-pellets.png"
  },
  {
    id: 6,
    name: "Sugar Cane Bagasse Pellets",
    category: "Agricultural Biomass",
    description: "Pellets made from sugar cane bagasse for efficient combustion in industrial boilers.",
    specs: { diameter: "8-12mm", moisture: "< 12%", ashContent: "< 3%", energyDensity: "4.0 kWh/kg" },
    image: "/products/sugar-cane-bagasee.png"
  },
  {
    id: 7,
    name: "Sunflower Husk Pellets",
    category: "Agricultural Biomass",
    description: "High-heat pellets produced from sunflower husks.",
    specs: { diameter: "6-10mm", moisture: "< 10%", ashContent: "< 2%", energyDensity: "4.1 kWh/kg" },
    image: "/products/sunflower-husk-pellets.png"
  },
  {
    id: 8,
    name: "Cashew Nut Shells (CNS)",
    category: "Nut Shell Biomass",
    description: "Dense shells offering high calorific value ideal for co-firing or standalone combustion.",
    specs: { size: "variable", moisture: "< 8%", ashContent: "< 1%", energyDensity: "4.9 kWh/kg" },
    image: "/products/cashew-nut-shell.png"
  },
  {
    id: 9,
    name: "Palm Kernel Shells (PKS)",
    category: "Nut Shell Biomass",
    description: "Palm kernel shells — a widely used biomass fuel in tropical regions.",
    specs: { size: "variable", moisture: "< 10%", ashContent: "< 2%", energyDensity: "4.6 kWh/kg" },
    image: "/products/palm-kernel-shell.png"
  },
  {
    id: 10,
    name: "Crushed Cashew Nut Shells (CCNS)",
    category: "Nut Shell Biomass",
    description: "Finely crushed cashew shells ready for pelletizing or direct combustion.",
    specs: { size: "crushed", moisture: "< 8%", ashContent: "< 1%", energyDensity: "4.85 kWh/kg" },
    image: "/products/crushed-cashew-shells.png"
  },
  {
    id: 11,
    name: "Olive Pits",
    category: "Horticultural Biomass",
    description: "Olive pits with high energy density used in various combustion systems.",
    specs: { size: "variable", moisture: "< 12%", ashContent: "< 2%", energyDensity: "4.4 kWh/kg" },
    image: "/products/olive-pits.png"
  },
  {
    id: 12,
    name: "Olive Cake (Olive Pomace)",
    category: "Horticultural Biomass",
    description: "Residual olive cake useful for energy and soil amendment applications.",
    specs: { size: "variable", moisture: "< 15%", ashContent: "< 3%", energyDensity: "3.8 kWh/kg" },
    image: "/products/olive-cake.png"
  }
];

export const offices = [
  { id: 1, name: "London, UK", lat: 51.5074, lng: -0.1278, employees: 45 },
  { id: 2, name: "Copenhagen, Denmark", lat: 55.6761, lng: 12.5683, employees: 38 },
  { id: 3, name: "New York, USA", lat: 40.7128, lng: -74.0060, employees: 52 },
  { id: 4, name: "Singapore", lat: 1.3521, lng: 103.8198, employees: 28 },
  { id: 5, name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503, employees: 34 },
  { id: 6, name: "São Paulo, Brazil", lat: -23.5505, lng: -46.6333, employees: 29 },
  { id: 7, name: "Sydney, Australia", lat: -33.8688, lng: 151.2093, employees: 31 },
  { id: 8, name: "Vancouver, Canada", lat: 49.2827, lng: -123.1207, employees: 27 },
  { id: 9, name: "Amsterdam, Netherlands", lat: 52.3676, lng: 4.9041, employees: 36 },
  { id: 10, name: "Dubai, UAE", lat: 25.2048, lng: 55.2708, employees: 25 },
  { id: 11, name: "Stockholm, Sweden", lat: 59.3293, lng: 18.0686, employees: 33 }
];

export const jobs = [
  {
    id: 1,
    title: "Senior Biomass Trading Specialist",
    location: "London, UK",
    type: "Full-time",
    department: "Trading",
    description: "Lead biomass trading operations across European markets. Manage client relationships and negotiate supply contracts.",
    requirements: [
      "5+ years in commodity trading",
      "Strong market analysis skills",
      "Excellent negotiation abilities",
      "Fluent in English and one European language"
    ]
  },
  {
    id: 2,
    title: "Sustainability Manager",
    location: "Copenhagen, Denmark",
    type: "Full-time",
    department: "Sustainability",
    description: "Drive our sustainability initiatives and ensure compliance with environmental standards.",
    requirements: [
      "Degree in Environmental Science or related field",
      "3+ years in sustainability role",
      "Knowledge of biomass certification standards",
      "Project management experience"
    ]
  },
  {
    id: 3,
    title: "Logistics Coordinator",
    location: "Singapore",
    type: "Full-time",
    department: "Operations",
    description: "Coordinate global biomass shipments and optimize supply chain operations.",
    requirements: [
      "Experience in international logistics",
      "Familiarity with maritime shipping",
      "Strong organizational skills",
      "Proficiency in logistics software"
    ]
  }
];

export const certificates = [
  {
    id: 1,
    name: "FSC Certification",
    description: "Forest Stewardship Council - Responsible Forest Management",
    image: "/placeholder-cert.jpg"
  },
  {
    id: 2,
    name: "PEFC Certification",
    description: "Programme for the Endorsement of Forest Certification",
    image: "/placeholder-cert.jpg"
  },
  {
    id: 3,
    name: "SBP Certification",
    description: "Sustainable Biomass Program - Ensuring biomass sustainability",
    image: "/placeholder-cert.jpg"
  },
  {
    id: 4,
    name: "ISO 14001",
    description: "Environmental Management System Standard",
    image: "/placeholder-cert.jpg"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Sarah Anderson",
    position: "Chief Executive Officer",
    bio: "With over 20 years in renewable energy, Sarah leads our vision for sustainable biomass solutions.",
    image: "/placeholder-team.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Chief Trading Officer",
    bio: "Michael brings extensive commodity trading experience to drive our global market presence.",
    image: "/placeholder-team.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Head of Sustainability",
    bio: "Emma ensures our operations meet the highest environmental and social standards.",
    image: "/placeholder-team.jpg"
  },
  {
    id: 4,
    name: "James O'Connor",
    position: "VP of Operations",
    bio: "James oversees our global logistics network and production facilities.",
    image: "/placeholder-team.jpg"
  }
];

export const stats = {
  tonnesDelivered: 2500000,
  offices: 11,
  employees: 378,
  countries: 45
};
