import { Link } from "react-router-dom";

export default function HelpButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <Link
        to="/help"
        className="px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg hover:bg-red-600 transition"
      >
        Precisa de ajuda agora?
      </Link>
    </div>
  );
}
