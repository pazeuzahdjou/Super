import React, { useState } from 'react';
import { Menu, Search, User, X } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '#' },
  { name: 'Fonctionnalités', href: '#' },
  { name: 'Tarifs', href: '#' },
  { name: 'Contact', href: '#' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          <span className="font-bold text-xl text-primary">Belaba Shop</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-35">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:bg-blue-700 hover:text-primary font-medium">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button aria-label="Recherche" className="text-gray-700 hover:text-primary">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Profil utilisateur" className="text-gray-700 hover:text-primary">
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu mobile"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="block text-gray-700 hover:text-primary font-medium">
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex space-x-4 mt-2">
              <button aria-label="Recherche" className="text-gray-700 hover:text-primary">
                <Search className="w-5 h-5" />
              </button>
              <button aria-label="Profil utilisateur" className="text-gray-700 hover:text-primary">
                <User className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
