type Location = {
  id: number;
  name: string;
  phone: string;
  address: string;
};

export default function MapOrList({ locations }: { locations: Location[] }) {
  return (
    <ul className="space-y-3">
      {locations.map(l => (
        <li key={l.id} className="p-3 border rounded">
          <p className="font-semibold">{l.name}</p>
          <p>{l.address}</p>
          <a href={`tel:${l.phone}`} className="text-blue-600 underline">{l.phone}</a>
        </li>
      ))}
    </ul>
  );
}
