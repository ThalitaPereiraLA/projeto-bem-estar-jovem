import MapOrList from '../components/MapOrList';
import helpLocations from '../data/helpLocations';

export default function HelpList() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Onde buscar ajuda</h2>
      <p>Este site é educativo e não substitui atendimento médico ou psicológico. Em caso de urgência, procure serviços de saúde.</p>
      <MapOrList locations={helpLocations} />
    </section>
  );
}
