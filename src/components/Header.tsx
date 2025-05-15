
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">
          <Link to="/" className="text-gray-800 hover:text-gray-600 transition-colors">
            Alignr
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
