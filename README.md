# Setup du projet

Pour commencer, l'application utilise l'API TMDB. Il faut donc configurer les variables d'environnements suivantes dans le fichier .env :

```bash
# url de l'api
BASE_URL=https://api.themoviedb.org/3

# url de l'api d'images
IMAGE_BASE_URL=https://image.tmdb.org/t/p/original

# clef d'api
TMDB_API_KEY=
```

# Suivre la configuration recommandée par Nuxt :

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# À faire

Certaines fonctionnalités supplémentaires restent à implémenter, leur développement est déjà en cours ou il est prévu.
Aussi, il reste certains bugs à régler.

## Fonctionnalités prévues

- [ ] Recherche (page de résultats)
  - [ ] Page
  - [ ] Pagination
  - [ ] Filtres
  - [ ] Tri
- [ ] SEO
- [ ] Comptes utilisateurs
- [ ] Listes d'oeuvres
- [ ] Evaluation
- [ ] Commentaires

## En cours de développement

- [ ] Pagination
- [ ] Barre de recherche
  - [ ] Filtre
  - [ ] Redirection vers page de résultats

## Bugs

- [ ] Problème de typage sur de nombreuses pages et composants
- [ ] Des oeuvres sans poster sont affichées
- [ ] CSS sans préfixes pour fonctionner sur tous les navigateurs
- [ ] Synopsis absents ou trop longs non gérés (à régler avec un affichage conditionnel et une modale)
- [ ] L'oeuvre recommandée en page d'accueil n'est pas mise à jour automatiquement. Cela vient sûrement de l'hébergement sur Vercel
