import React from 'react';
import { Cpu, Shield, Zap, Users, Globe, BarChart2 } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  { icon: <Cpu className="w-6 h-6" />, title: 'Performance', description: 'Optimisé pour la rapidité.', color: 'text-blue-500' },
  { icon: <Shield className="w-6 h-6" />, title: 'Sécurité', description: 'Protection avancée.', color: 'text-green-500' },
  { icon: <Zap className="w-6 h-6" />, title: 'Réactivité', description: 'Design adaptable.', color: 'text-yellow-500' },
  { icon: <Users className="w-6 h-6" />, title: 'Communauté', description: 'Support actif.', color: 'text-purple-500' },
  { icon: <Globe className="w-6 h-6" />, title: 'Accessibilité', description: 'Partout et tout le temps.', color: 'text-pink-500' },
  { icon: <BarChart2 className="w-6 h-6" />, title: 'Analytique', description: 'Données en temps réel.', color: 'text-red-500' },
];

const stats = [
  { label: 'Utilisateurs actifs', value: '12K+' },
  { label: 'Projets réalisés', value: '1.2K' },
  { label: 'Temps moyen', value: '5h/jour' },
  { label: 'Satisfaction', value: '98%' },
];



export const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2">Fonctionnalités clés</h2>
          <p className="text-gray-600">Découvrez ce qui rend Belaba shop unique et efficace.</p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {features.map(({ icon, title, description, color }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <div className={`mb-4 ${color}`}>
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-white p-6 rounded-lg shadow animate-fadeIn">
              <p className="text-3xl font-extrabold text-primary">{value}</p>
              <p className="text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
