# 🍍 Belaba shop

# Projet React + Vite : Page d'accueil modulaire

## Description

Ce projet consiste à créer une page d’accueil moderne, dynamique et modulaire en utilisant **React**, **TypeScript**, **Vite** et **Tailwind CSS**. L’objectif est de maîtriser l’architecture modulaire d’une application React, organiser les composants et layouts de façon professionnelle, et appliquer les bonnes pratiques de développement front-end.

Le design est responsive, avec une palette cohérente et des composants réutilisables, intégrant des icônes via **Lucide React**.

---

## Fonctionnalités principales

- **Header** : barre de navigation responsive avec logo, menu, actions utilisateur et menu mobile.
- **Hero** : section d’accueil attractive avec badge, titre coloré, description, boutons CTA et illustration.
- **Features** : présentation des fonctionnalités sous forme de cartes avec icônes colorées, section statistiques animée.
- **Sidebar** : navigation latérale pour dashboard avec widget utilisateur et menu actif.
- **Footer** : pied de page complet avec colonnes d’informations, réseaux sociaux et contacts.
- **Layouts** : MainLayout (Header + Footer) et SidebarLayout (sidebar fixe + contenu flexible).
- **Page Dashboard** : grille de widgets simulés et section graphique placeholder.
- **Application** : assemblage final avec intégration des composants dans le layout principal.

---

## Technologies utilisées

- [React](https://reactjs.org/) (avec hooks fonctionnels)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (outil de build rapide)
- [Tailwind CSS](https://tailwindcss.com/) (framework CSS utilitaire)
- [Lucide React](https://lucide.dev/) (bibliothèque d’icônes)
- ES6 modules, typage strict, responsive design mobile-first

---

## Structure du projet

src/
├── components/
│ ├── Header.tsx
│ ├── Hero.tsx
│ ├── Features.tsx
│ ├── Sidebar.tsx
│ └── Footer.tsx
├── layouts/
│ ├── MainLayout.tsx
│ └── SidebarLayout.tsx
├── pages/
│ └── Dashboard.tsx
└── App.tsx


- `components/` : composants réutilisables et indépendants
- `layouts/` : structures de pages avec Header/Footer ou Sidebar
- `pages/` : pages principales de l’application
- `App.tsx` : composant racine

---

## Installation et lancement

1. Cloner le dépôt :

## arborescence##

src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Sidebar.tsx
│   └── Footer.tsx
├── layouts/
│   ├── MainLayout.tsx
│   └── SidebarLayout.tsx
├── pages/
│   └── Dashboard.tsx
└── App.tsx



## 📦 Installation

git clone https://github.com/pazeuzahdjou/super.git
cd Super

# Installer les dépendances
npm install

# Lancer le projet

4. Ouvrir dans le navigateur à l’adresse indiquée (par défaut http://localhost:5173)

---

## Personnalisation

- Modifier les couleurs dans `tailwind.config.js` pour adapter la palette
- Ajouter ou modifier les composants dans `src/components`
- Gérer les routes et pages dans `src/pages`
- Adapter les layouts selon les besoins spécifiques

---

## Bonnes pratiques appliquées

- Typage strict avec TypeScript pour toutes les props et interfaces
- Composants fonctionnels avec hooks React
- Responsive design mobile-first avec Tailwind CSS
- Séparation claire des responsabilités (composants, layouts, pages)
- Utilisation cohérente des icônes Lucide React avec tailles et couleurs adaptées
- Nommage clair et cohérent (PascalCase pour composants, camelCase pour variables)

---

## Améliorations possibles (bonus)

- Ajout d’animations avancées avec Tailwind ou Framer Motion
- Implémentation d’un système de thème clair/sombre
- Création de variantes de composants pour plus de flexibilité
- Ajout de tests unitaires avec Jest et React Testing Library
- Intégration d’un routeur (React Router) pour navigation multi-pages

---

## Auteur

- Votre nom
- Contact : votre.email@example.com
- GitHub : [votre-utilisateur](https://github.com/votre-utilisateur)

---

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

