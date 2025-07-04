import React from 'react';
import Rd from '../assets/Rd.jpeg';

export const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Nouveau</span>
        <h1 className="text-5xl font-extrabold leading-tight ">
          Bienvenue sur <span className="text-primary">Belaba Shop</span><br />
          Votre solution sur le marché <br /> moderne de fruit de meilleures <br />Qualités
        </h1><br /><br />
        <p className="mt-4 text-gray-600 max-w-md">
          Découvrez les meilleurs produits locaux que le logone occidental vous offre en qaulité et quantité. <b>Vivez l'expérience !</b>
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-primary text-black px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">Commencer</button>
          <button className="border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:bg-blue-700 transition">En savoir plus</button>
        </div>
      </div>
      <div className="relative">
        {/* Illustration placeholder */}
        <img src={Rd} alt="Rond point Belaba" className="w-full h-auto rounded-lg shadow-lg" />
        {/* Éléments décoratifs */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};
