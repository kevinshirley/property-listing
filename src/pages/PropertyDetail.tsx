import { useParams } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
  description: string;
}

const fetchProperty = async (propertyId: string): Promise<Property[]> => {
  const response = await fetch(`https://primary-production-a84a.up.railway.app/webhook/property?id=${propertyId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch property");
  }
  return response.json();
};

const PropertyDetail = () => {
  const { id } = useParams();
  const { data: property, isLoading, error } = useQuery({
    queryKey: ["property", id],
    queryFn: () => fetchProperty(id),
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

  if (property.length < 1) {
    return <div className="container mx-auto px-4 py-8">Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-[rgb(15,23,42)]">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2" />
            Back to Listings
          </Button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={property[0].image}
              alt={property[0].title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <h1 className="text-3xl font-bold mt-6 text-white">{property[0].title}</h1>
            <p className="text-2xl font-semibold mt-2 text-white">
              ${property[0].price.toLocaleString()}
            </p>
            <p className="text-gray-300 mt-2">{property[0].address}</p>
            <div className="flex gap-4 mt-4 text-gray-300">
              <span>{property[0].bedrooms} beds</span>
              <span>{property[0].bathrooms} baths</span>
              <span>{property[0].sqft.toLocaleString()} sqft</span>
            </div>
            <p className="mt-6 text-gray-300">{property[0].description}</p>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Agent</h2>
              <ContactForm propertyId={property[0].id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;