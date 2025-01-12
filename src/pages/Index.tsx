import { PropertyCard } from "@/components/PropertyCard";

const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Modern Downtown Condo",
    price: 599000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    address: "123 Main St, Downtown",
  },
  {
    id: "2",
    title: "Luxury Waterfront Villa",
    price: 1299000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    address: "456 Ocean Ave, Beachfront",
  },
  {
    id: "3",
    title: "Cozy Suburban Home",
    price: 449000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    address: "789 Oak Rd, Suburbs",
  },
];

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROPERTIES.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Index;