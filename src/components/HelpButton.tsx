import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

export default function HelpButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <Link
        to="/help"
        className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]"
        style={{
          background: "var(--gradient-inspire)", // usa o gradiente padrão
        }}
      >
        <FaQuestionCircle className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
        <span className="text-lg">Precisa de ajuda agora?</span>
      </Link>
    </div>
  );
}


