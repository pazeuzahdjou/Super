import React from 'react';

const widgets = [
  { title: 'Ventes', value: '15K', color: 'bg-gray-300' },
  { title: 'Utilisateurs', value: '8.4K', color: 'bg-gray-300' },
  { title: 'Nouveaux clients', value: '1.2K', color: 'bg-gray-300' },
  { title: 'Revenus', value: '$24K', color: 'bg-gray-300' },
  { title: 'Tickets', value: '32', color: 'bg-gray-300' },
  { title: 'Feedback', value: '89%', color: 'bg-gray-300' },
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-8">Tableau de bord</h1>

      {/* Grille widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {widgets.map(({ title, value, color }) => (
          <div key={title} className={`p-6 rounded-lg text-black shadow-md ${color}`}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-3xl mt-2">{value}</p>
          </div>
        ))}
      </div>

      {/* Section graphique placeholder */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl text-center font-semibold mb-4">Graphiques</h2>
        <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
          {/* Placeholder */}
          Graphiques à venir...
        </div>
      </section>
    </div>
  );
};
