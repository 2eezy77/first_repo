import Image from "next/image";

const property = {
  name: "House",
  price: "$800 / Month",
  about: "Central AC\n1 bathroom\n1 Bed\nElectric heating\nIn-unit laundry\nParking available",
  description:
    "Newly built, beautiful house which stands out from the rest. Minutes from downtown Norfolk, MacArthur Center Mall, Naval Station Norfolk, ODU Campus, Zoo, One Life Norfolk Gym, and the Norfolk Botanical Garden. Wrap-around parking space that accommodates three cars and on-street parking with a wrap-around Security system. Preferably young adult military and students. 5G internet, In house laundry and dryer, full access to kitchen and its appliances, and full access to living area which includes a 75” TV.",
  rentDetails: "$800 (6 month lease minimum)\nUtilities: $100",
  contact: "571-278-4412",
  image: "/house.jpg",
};

export default function Properties() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Available Property</h1>
      <div className="border rounded-lg shadow-md p-6">
        <Image
          src={property.image}
          alt={property.name}
          width={800}
          height={400}
          className="rounded-lg"
        />
        <h2 className="text-xl font-semibold my-4">{property.name}</h2>
        <p className="text-blue-500 font-bold text-lg">{property.price}</p>
        <h3 className="mt-4 font-bold">About this property for rent:</h3>
        <ul className="list-disc list-inside">
          {property.about.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="mt-4 font-bold">Description:</h3>
        <p>{property.description}</p>
        <h3 className="mt-4 font-bold">Rent Details:</h3>
        <p>{property.rentDetails}</p>
        <h3 className="mt-4 font-bold">Contact:</h3>
        <p>
          <a href={`tel:${property.contact}`} className="text-blue-500 underline">
            {property.contact}
          </a>
        </p>
      </div>
    </div>
  );
}
