# Site E-Commerce

## Description

Ce projet est un site e-commerce développé avec React, TypeScript, et TailwindCSS, et construit avec Vite. Il utilise Docker pour la conteneurisation, intégrant des outils de CI/CD, de linting (ESLint) et de formatage de code (Prettier).

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

## Installation

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

## Docker

Pour construire et exécuter l'application dans un conteneur Docker :

- docker build -t site-e-commerce .
- docker run -p 3000:3000 site-e-commerce
