export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  type: "flat" | "house";
  image: string;
  description: string;
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern 2-Bed Flat in Shoreditch",
    address: "45 Brick Lane, Shoreditch, London E1",
    price: 2200,
    bedrooms: 2,
    bathrooms: 1,
    type: "flat",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    description:
      "Contemporary flat in trendy Shoreditch with excellent transport links",
  },
  {
    id: "2",
    title: "1-Bed Flat in Manchester City Centre",
    address: "12 Deansgate, Manchester M1",
    price: 1200,
    bedrooms: 1,
    bathrooms: 1,
    type: "flat",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    description: "Perfect for young professionals in the heart of Manchester",
  },
  {
    id: "3",
    title: "Family House in Birmingham",
    address: "78 Edgbaston Road, Birmingham B15",
    price: 1800,
    bedrooms: 3,
    bathrooms: 2,
    type: "house",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    description: "Spacious family home with garden in sought-after Edgbaston",
  },
  {
    id: "4",
    title: "Luxury 2-Bed Flat in Canary Wharf",
    address: "23 Canada Square, Canary Wharf, London E14",
    price: 3200,
    bedrooms: 2,
    bathrooms: 2,
    type: "flat",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    description: "High-end flat with river views and concierge service",
  },
  {
    id: "5",
    title: "1-Bed Flat in Leeds City Centre",
    address: "15 Briggate, Leeds LS1",
    price: 1200,
    bedrooms: 1,
    bathrooms: 1,
    type: "flat",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    description: "Cosy flat in quiet neighbourhood with excellent amenities",
  },
  {
    id: "6",
    title: "3-Bed House in Bristol",
    address: "67 Clifton Road, Bristol BS8",
    price: 2100,
    bedrooms: 3,
    bathrooms: 2,
    type: "house",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
    description: "Victorian house in desirable Clifton area",
  },
  {
    id: "7",
    title: "2-Bed Flat in Glasgow West End",
    address: "89 Byres Road, Glasgow G12",
    price: 1400,
    bedrooms: 2,
    bathrooms: 1,
    type: "flat",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    description: "Spacious flat perfect for young professionals",
  },
  {
    id: "8",
    title: "4-Bed House in Liverpool",
    address: "34 Rodney Street, Liverpool L1",
    price: 2400,
    bedrooms: 4,
    bathrooms: 2,
    type: "house",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    description: "Characterful house in Georgian townhouse",
  },
];
