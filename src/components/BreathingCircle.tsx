import { motion } from 'framer-motion';

export default function BreathingCircle() {
  return (
    <div className="flex justify-center items-center my-6">
      <motion.div
        className="w-32 h-32 rounded-full bg-primary"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </div>
  );
}
