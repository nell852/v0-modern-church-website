# Configuration de la Page Services - Paroisse Saint-Esprit

## 🎯 Vue d'ensemble

La page Services est maintenant entièrement fonctionnelle avec :
- ✅ Récupération des services depuis Supabase
- ✅ Horaires des messes dynamiques
- ✅ Formulaires de rendez-vous avec EmailJS
- ✅ Gestion des intentions de messe
- ✅ Statistiques en temps réel

## 🗄️ Base de Données

### Tables utilisées

1. **`services`** - Services religieux disponibles
2. **`mass_schedules`** - Horaires des messes
3. **`service_bookings`** - Réservations de services
4. **`team_members`** - Équipe pastorale

### Scripts SQL à exécuter

```sql
-- 1. Créer la table services
-- Exécuter: scripts/003_create_services_table.sql

-- 2. Configurer les données
-- Exécuter: scripts/004_setup_services_data.sql
```

## 📧 Configuration EmailJS

### Variables d'environnement requises

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Templates EmailJS à créer

1. **Template de rendez-vous**
   - Sujet: `Nouvelle demande de rendez-vous - {{service}}`
   - Variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{message}}`, `{{preferred_date}}`, `{{preferred_time}}`

2. **Template d'intention de messe**
   - Sujet: `Demande d'intention de messe - {{from_name}}`
   - Variables: `{{from_name}}`, `{{from_email}}`, `{{intention}}`, `{{mass_date}}`, `{{mass_time}}`, `{{offering}}`

## 🎨 Composants Créés

### 1. `ServicesList`
- Affiche tous les services depuis Supabase
- Boutons de rendez-vous conditionnels
- Icônes dynamiques selon le type de service

### 2. `MassScheduleDynamic`
- Horaires des messes depuis la base de données
- Groupement par jour de la semaine
- Affichage des descriptions spéciales

### 3. `BookingForm`
- Formulaire de rendez-vous avec EmailJS
- Champs personnalisés selon le service
- Gestion des erreurs et états de chargement

### 4. `BookingModal`
- Modal pour les formulaires de rendez-vous
- Interface utilisateur moderne
- Responsive design

### 5. `MassIntentionForm`
- Formulaire spécialisé pour les intentions de messe
- Champs spécifiques (intention, offrande, etc.)
- Envoi par EmailJS

### 6. `ServicesStats`
- Statistiques en temps réel
- Nombre de services, rendez-vous, etc.
- Affichage dynamique

## 🔧 Fonctionnalités Implémentées

### ✅ Services Dynamiques
- Récupération depuis Supabase
- Affichage conditionnel des boutons de rendez-vous
- Icônes et couleurs personnalisées

### ✅ Horaires des Messes
- Données depuis `mass_schedules`
- Groupement par jour
- Affichage des messes spéciales

### ✅ Formulaires de Rendez-vous
- Modal avec formulaire complet
- Validation côté client
- Envoi par EmailJS
- Messages de confirmation

### ✅ Intentions de Messe
- Formulaire spécialisé
- Champs pour l'intention, l'offrande
- Sélection de date et heure

### ✅ Statistiques
- Compteurs en temps réel
- Services, rendez-vous, horaires
- Interface moderne

## 🚀 Installation et Configuration

### 1. Installer les dépendances
```bash
npm install @emailjs/browser
```

### 2. Configurer Supabase
```bash
# Exécuter les scripts SQL dans l'ordre
# 1. scripts/003_create_services_table.sql
# 2. scripts/004_setup_services_data.sql
```

### 3. Configurer EmailJS
1. Créer un compte sur [EmailJS.com](https://www.emailjs.com/)
2. Configurer un service email
3. Créer les templates
4. Ajouter les variables d'environnement

### 4. Tester la fonctionnalité
```bash
npm run dev
# Aller sur /services
# Tester un formulaire de rendez-vous
```

## 📱 Interface Utilisateur

### Page Services Structure
```
1. Hero Section
   └── Titre et description

2. Statistiques
   └── Cartes avec chiffres clés

3. Services Grid
   └── Liste des services avec boutons de rendez-vous

4. Horaires des Messes
   └── Planning dynamique

5. Intentions de Messe
   └── Formulaire spécialisé
```

### Responsive Design
- **Mobile** : 1 colonne, formulaires empilés
- **Tablette** : 2 colonnes, layout adaptatif
- **Desktop** : 3 colonnes, interface complète

## 🔍 Dépannage

### Erreurs courantes

1. **Services non affichés**
   - Vérifier la connexion Supabase
   - Vérifier que les services sont `active = true`

2. **Formulaires ne s'envoient pas**
   - Vérifier les variables d'environnement EmailJS
   - Tester la configuration EmailJS

3. **Horaires non affichés**
   - Vérifier la table `mass_schedules`
   - Vérifier que les horaires sont `active = true`

### Logs de débogage
```javascript
// Dans la console du navigateur
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('EmailJS Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
```

## 📈 Améliorations Futures

### Fonctionnalités à ajouter
- [ ] Système de notifications
- [ ] Calendrier de disponibilité
- [ ] Gestion des conflits de rendez-vous
- [ ] Rappels automatiques
- [ ] Historique des rendez-vous

### Optimisations
- [ ] Cache des données
- [ ] Pagination pour les services
- [ ] Recherche et filtres
- [ ] Export des données

## 🎉 Résultat Final

La page Services est maintenant **100% fonctionnelle** avec :
- ✅ Données dynamiques depuis Supabase
- ✅ Formulaires fonctionnels avec EmailJS
- ✅ Interface moderne et responsive
- ✅ Gestion d'erreurs complète
- ✅ Statistiques en temps réel

**Prêt pour la production !** 🚀

