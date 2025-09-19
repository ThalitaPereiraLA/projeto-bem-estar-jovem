import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa"; // Ícone de ajuda

export default function HelpButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <Link
        to="/help"
        className="flex items-center px-8 py-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 ease-in-out tracking-wide hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-800"
      >
        <FaQuestionCircle className="mr-3 text-2xl transform hover:scale-110 transition-all duration-200 ease-in-out" /> 
        <span className="text-lg">Precisa de ajuda agora?</span>
      </Link>
    </div>
  );
}
