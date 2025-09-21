import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-bold text-xl">Mente em Equilíbrio</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Promovendo bem-estar mental e conscientização sobre saúde emocional. 
              Juntos por uma mente mais saudável.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Úteis</h3>
            <div className="space-y-2">
              <Link 
                to="/info" 
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Informações sobre Saúde Mental
              </Link>
              <Link 
                to="/ferramentas" 
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Ferramentas de Autoajuda
              </Link>
              <Link 
                to="/ajuda" 
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Buscar Ajuda Profissional
              </Link>
            </div>
          </div>

          {/* Contatos de Emergência */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent">Emergência 24h</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>CVV: 188</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>SAMU: 192</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Mente em Equilíbrio. Desenvolvido com {" "}
            <Heart className="w-4 h-4 inline text-accent" /> para o bem-estar de todos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;