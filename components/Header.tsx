
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400 tracking-wider">
        RPG Portrait Generator
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Craft your hero's visage with the power of AI
      </p>
    </header>
  );
};

export default Header;
