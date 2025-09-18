import BreathingCircle from '../components/BreathingCircle';
import CheckIn from '../components/CheckIn';
import SOSCard from '../components/SOSCard';

export default function Tools() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Ferramentas práticas</h2>
      <BreathingCircle />
      <CheckIn />
      <SOSCard />
    </section>
  );
}
