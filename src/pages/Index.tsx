import { PropertyCard } from "@/components/PropertyCard";
import { useQuery } from "@tanstack/react-query";

interface Property {
  id: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  address: string;
}
const fetchProperties = async (): Promise<Property[]> => {
  const response = await fetch("https://primary-production-a84a.up.railway.app/webhook/properties");
  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }
  return response.json();
};

const Index = () => {
  const { data: properties, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(15,23,42)] flex items-center justify-center">
        <p className="text-white">Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[rgb(15,23,42)] flex items-center justify-center">
        <p className="text-red-500">Error loading properties</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(15,23,42)]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Featured Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;