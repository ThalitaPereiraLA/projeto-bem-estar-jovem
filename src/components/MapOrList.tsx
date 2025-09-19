type Location = {
  id: number;
  name: string;
  phone: string;
  address: string;
};

export default function MapOrList({ locations }: { locations: Location[] }) {
  return (
    <ul className="space-y-4">
      {locations.map(l => (
        <li key={l.id} className="p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
          <p className="text-xl font-semibold text-gray-800">{l.name}</p>
          <p className="text-gray-600">{l.address}</p>
          <a
            href={`tel:${l.phone}`}
            className="text-blue-600 underline hover:text-blue-700 transition-colors duration-300 ease-in-out"
          >
            {l.phone}
          </a>
        </li>
      ))}
    </ul>
  );
}
