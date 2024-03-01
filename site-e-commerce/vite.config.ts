import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://escanor1986.github.io/Page_produit_site_e_commerce/',
  plugins: [react()],
  // root: './', optionnel car il prend le répertoire courant, sinon erreur 404 vu que vite ne trouve pas le fichier racine
});
