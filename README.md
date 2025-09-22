# Paroisse Saint-Esprit - Site Web Moderne

Un site web moderne et responsive pour une paroisse catholique, développé avec Next.js 14, TypeScript, et Tailwind CSS.

## 🌟 Fonctionnalités

### Pages Principales
- **Accueil** : Hero section, horaires des messes, actualités, CTA
- **À propos** : Histoire, mission, valeurs, galerie photos
- **Services** : Sacrements, horaires, intentions de messe
- **Événements** : Calendrier interactif, événements à venir
- **Blog** : Articles, catégories, système de publication
- **Contact** : Formulaire de contact, informations, carte
- **Dons** : Système de don avec réduction fiscale, projets
- **Hébergement** : Réservation, galerie, calendrier de disponibilité
- **Équipe** : Membres du clergé et personnel pastoral

### Fonctionnalités Techniques
- ✅ **Responsive Design** : Optimisé pour mobile, tablette et desktop
- ✅ **Internationalisation** : Support français/anglais
- ✅ **Thème sombre/clair** : Basculement automatique
- ✅ **Base de données** : Supabase pour la gestion des données
- ✅ **Formulaires interactifs** : Contact, réservation, newsletter
- ✅ **SEO optimisé** : Métadonnées, sitemap, robots.txt
- ✅ **Performance** : Images optimisées, lazy loading

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 14 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Composants UI** : Radix UI + shadcn/ui
- **Base de données** : Supabase (PostgreSQL)
- **Icônes** : Lucide React
- **Internationalisation** : Système i18n personnalisé
- **Déploiement** : Vercel (recommandé)

## 🚀 Installation et Configuration

### Prérequis
- Node.js 18+ 
- Compte Supabase
- Git

### 1. Cloner le projet
```bash
git clone <repository-url>
cd v0-modern-church-website
```

### 2. Installer les dépendances
```bash
npm install
# ou
pnpm install
```

### 3. Configuration Supabase

1. Créer un nouveau projet sur [Supabase](https://supabase.com)
2. Exécuter les scripts SQL dans l'ordre :
   ```bash
   # Dans l'éditeur SQL de Supabase
   # 1. Exécuter scripts/001_create_church_tables.sql
   # 2. Exécuter scripts/002_insert_sample_data.sql
   ```

### 4. Variables d'environnement

Créer un fichier `.env.local` :
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Lancer le serveur de développement
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── about/             # Page À propos
│   ├── accommodation/     # Page Hébergement
│   ├── blog/             # Page Blog/Actualités
│   ├── contact/          # Page Contact
│   ├── donations/        # Page Dons
│   ├── events/           # Page Événements
│   ├── services/         # Page Services
│   ├── team/             # Page Équipe
│   └── globals.css       # Styles globaux
├── components/            # Composants React
│   ├── ui/              # Composants UI de base
│   ├── accommodation/   # Composants hébergement
│   ├── blog/            # Composants blog
│   ├── contact/         # Composants contact
│   ├── donations/       # Composants dons
│   ├── events/          # Composants événements
│   └── ...
├── lib/                  # Utilitaires et configuration
│   ├── supabase/        # Configuration Supabase
│   ├── i18n.ts          # Internationalisation
│   └── utils.ts         # Fonctions utilitaires
├── hooks/               # Hooks React personnalisés
├── scripts/             # Scripts SQL
└── public/              # Assets statiques
```

## 🗄️ Base de Données

### Tables Principales
- `posts` : Articles de blog
- `events` : Événements et calendrier
- `team_members` : Équipe pastorale
- `accommodations` : Types d'hébergement
- `bookings` : Réservations
- `contact_submissions` : Messages de contact
- `newsletter_subscriptions` : Abonnements newsletter
- `mass_schedules` : Horaires des messes

## 🎨 Personnalisation

### Couleurs et Thème
Les couleurs sont définies dans `app/globals.css` :
- Primary : Couleur principale de l'église
- Secondary : Couleur secondaire
- Accent : Couleur d'accent

### Contenu
- Modifier les textes dans les composants
- Ajouter des images dans `/public`
- Configurer les horaires dans la base de données

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablette : 768px - 1024px  
- Desktop : > 1024px

## 🌐 Internationalisation

Support français/anglais avec :
- Système de traduction dans `lib/i18n.ts`
- Hook `useLocale()` pour détecter la langue
- Composant `LanguageToggle` pour basculer

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connecter le repository à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Autres plateformes
- Netlify
- Railway
- DigitalOcean App Platform

## 📞 Support

Pour toute question ou problème :
- Créer une issue sur GitHub
- Contacter l'équipe de développement

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

**Développé avec ❤️ pour la communauté paroissiale**