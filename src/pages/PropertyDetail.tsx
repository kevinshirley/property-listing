import { useParams } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";

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
    description: "Beautiful modern condo in the heart of downtown. Features high-end finishes, open concept living, and stunning city views. Perfect for young professionals or couples.",
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
    description: "Spectacular waterfront villa with panoramic ocean views. Featuring a gourmet kitchen, private pool, and direct beach access. The epitome of luxury living.",
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
    description: "Charming family home in a quiet suburban neighborhood. Includes a spacious backyard, updated kitchen, and close proximity to excellent schools.",
  },
];

const PropertyDetail = () => {
  const { id } = useParams();
  const property = MOCK_PROPERTIES.find((p) => p.id === id);

  if (!property) {
    return <div className="container mx-auto px-4 py-8">Property not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-6">{property.title}</h1>
          <p className="text-2xl font-semibold mt-2">
            ${property.price.toLocaleString()}
          </p>
          <p className="text-gray-600 mt-2">{property.address}</p>
          <div className="flex gap-4 mt-4 text-gray-600">
            <span>{property.bedrooms} beds</span>
            <span>{property.bathrooms} baths</span>
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
          <p className="mt-6">{property.description}</p>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Agent</h2>
            <ContactForm propertyId={property.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;