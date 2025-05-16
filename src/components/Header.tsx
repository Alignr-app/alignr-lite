
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-100/10">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img 
            src="/lovable-uploads/5209f898-6194-435f-bf23-8d1ea66e2976.png" 
            alt="Alignr Logo" 
            className="h-10 w-10"
          />
          <span className="text-xl font-semibold text-brand-gold">Alignr</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
