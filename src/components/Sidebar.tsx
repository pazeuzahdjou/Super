import React, { useState } from 'react';
import { Home, Settings, Bell, User, MessageCircle, Calendar } from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Accueil', icon: <Home className="w-5 h-5" />, href: '#' },
  { name: 'Profil', icon: <User className="w-5 h-5" />, href: '#' },
  { name: 'Messages', icon: <MessageCircle className="w-5 h-5" />, href: '#' },
  { name: 'Notifications', icon: <Bell className="w-5 h-5" />, href: '#' },
  { name: 'Calendrier', icon: <Calendar className="w-5 h-5" />, href: '#' },
  { name: 'Paramètres', icon: <Settings className="w-5 h-5" />, href: '#' },
];

export const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className="w-64 bg-white shadow-md h-screen flex flex-col justify-between sticky top-0">
      {/* Widget utilisateur */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-4">
          <img src="/avatar-placeholder.png" alt="Utilisateur" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold text-gray-800">Jean Dupont</p>
            <p className="text-sm text-gray-500">Administrateur</p>
          </div>
        </div>
      </div>

      {/* Menu navigation */}
      <nav className="flex-grow px-4 py-6">
        <ul className="space-y-3">
          {navItems.map(({ name, icon, href }, index) => (
            <li key={name}>
              <a
                href={href}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center space-x-3 px-4 py-2 rounded-md font-medium ${
                  index === activeIndex ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {icon}
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Widget info */}
      <div className="p-6 border-t">
        <div className="bg-primary bg-opacity-10 p-4 rounded-md text-primary font-semibold mb-3">
          Nouvelle mise à jour disponible !
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition">
          Mettre à jour
        </button>
      </div>
    </aside>
  );
};
