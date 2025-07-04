import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* À propos */}
        <div>
          <a href="#" className="flex items-center space-x-2 mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            <span className="text-white font-bold text-lg">Belaba shop</span>
          </a>
          <p className="text-gray-400"> Vous mangez bio avec nos fruits lacaux ! <br /> venez nombreux et decouvrez les merveilles de la nature</p>
        </div>
        

        <div>
          <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Accueil</a></li>
            <li><a href="#" className="hover:text-primary">Fonctionnalités</a></li>
            <li><a href="#" className="hover:text-primary">Tarifs</a></li>
            <li><a href="#" className="hover:text-primary">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Consultation</a></li>
            <li><a href="#" className="hover:text-primary">Support</a></li>
            <li><a href="#" className="hover:text-primary">Développement</a></li>
            <li><a href="#" className="hover:text-primary">Design</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Belaba/Moundou Tchad</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>+235 63 89 98 36 </span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>pazeuzahdjoutchouamone@gmail.com</span>
            </li>
          </ul>
          

          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © 2025 Belaba shop. Tous droits réservés. <a href="#" className="hover:text-primary">Mentions légales</a>
      </div>
    </footer>
  );
};
