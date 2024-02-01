# Site E-Commerce

## Description

### Ce projet est un site e-commerce développé :

- Pour la partie front avec React, React Router, TypeScript, et TailwindCSS, et construit avec Vite. Il utilise Docker pour la conteneurisation, intégrant des outils de CI/CD, de linting (ESLint) et de formatage de code (Prettier).

- Pour la partie Back avec une api Rest construite from scratch avec Nodejs, JavaScript et le framework express pour servir les données nécessaire côté client.

## Fonctionnalités

- Interface utilisateur moderne et réactive conçue avec React et TailwindCSS.
- Typage fort avec TypeScript pour une meilleure maintenabilité.
- Intégration de tests unitaires et d'intégration avec Vitest.
- Configuration de Docker pour un déploiement facile et consistent.
- Flux de travail CI/CD pour l'intégration et le déploiement automatiques.
- Configuration ESLint et Prettier pour garantir la cohérence du code.

## Prérequis

Pour utiliser ce projet, vous devez avoir installé :

- Node.js (version recommandée: 18.x.x)
- npm (version recommandée: 8.x.x)
- Docker (pour la conteneurisation et le déploiement)

## Installation du Front :

1. Clonez le dépôt :

   - git clone https://github.com/Escanor1986/Page_produit_site_e_commerce
   - cd site-e-commerce

2. Installez les dépendances :

- npm install

## Usage

### Pour démarrer le serveur de développement :

- npm run dev

### Pour construire la version de production :

- npm run build

### Pour exécuter les tests :

- npm run test

### Pour lancer ESLint :

- npm run lint

## Installation du back :

1. Accéder au dossier du Back :

   - cd api

2. Installez les dépendances :

   - npm install

## Usage :

### Pour démarrer le serveur de développement (nodemon) :

- npm run devstart (Listening on port 8000)

### Pour démarrer le server node :

- npm run start (ou) npm start

## Docker

Pour construire et exécuter l'application dans un conteneur Docker :

- docker build -t site-e-commerce .
- docker run -p 3000:3000 site-e-commerce
