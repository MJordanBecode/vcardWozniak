/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Active l'exportation statique
  trailingSlash: true, // Ajoute un slash à la fin des URLs (utile pour l'export sur GitHub Pages)
  images: {
    unoptimized: true, // Désactive l'optimisation des images pour éviter des erreurs lors de l'exportation
  },
  // basePath: '/vcardWozniak', // Remplace par le nom de ton repository GitHub
  // assetPrefix: '/vcardWozniak', // Le chemin relatif pour ton repository GitHub
};

module.exports = nextConfig;
