import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  address: string;
}

export function PropertyCard({
  id,
  title,
  price,
  bedrooms,
  bathrooms,
  sqft,
  image,
  address,
}: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`}>
      <Card className="overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-2xl font-semibold">${price.toLocaleString()}</h3>
          <p className="text-gray-600 mt-2">{address}</p>
          <div className="flex gap-4 mt-4 text-gray-600">
            <span>{bedrooms} beds</span>
            <span>{bathrooms} baths</span>
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <p className="text-sm text-gray-500">{title}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}