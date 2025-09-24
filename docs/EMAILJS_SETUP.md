# Configuration EmailJS pour la Paroisse Saint-Esprit

## 📧 Configuration EmailJS

### 1. Créer un compte EmailJS

1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer un service email

1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez l'**Service ID** généré

### 3. Créer des templates d'email

#### Template pour les rendez-vous (booking_template)
```
Sujet: Nouvelle demande de rendez-vous - {{service}}

Bonjour,

Vous avez reçu une nouvelle demande de rendez-vous :

**Service demandé :** {{service}}
**Nom :** {{from_name}}
**Email :** {{from_email}}
**Téléphone :** {{phone}}
**Date souhaitée :** {{preferred_date}}
**Heure souhaitée :** {{preferred_time}}
**Message :** {{message}}

Merci de contacter cette personne dans les plus brefs délais.

Cordialement,
Site web Paroisse Saint-Esprit
```

#### Template pour les intentions de messe (mass_intention_template)
```
Sujet: Demande d'intention de messe - {{from_name}}

Bonjour,

Nouvelle demande d'intention de messe :

**Nom :** {{from_name}}
**Email :** {{from_email}}
**Téléphone :** {{phone}}
**Intention :** {{intention}}
**Date souhaitée :** {{mass_date}}
**Heure préférée :** {{mass_time}}
**Offrande :** {{offering}}
**Message :** {{message}}

Merci de traiter cette demande.

Cordialement,
Site web Paroisse Saint-Esprit
```

#### Template pour les contacts (contact_template)
```
Sujet: Nouveau message de contact - {{subject}}

Bonjour,

Nouveau message de contact :

**Nom :** {{from_name}}
**Email :** {{from_email}}
**Téléphone :** {{phone}}
**Sujet :** {{subject}}
**Message :** {{message}}

Merci de répondre à cette personne.

Cordialement,
Site web Paroisse Saint-Esprit
```

### 4. Obtenir les clés API

1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**
3. Notez les **Template IDs** de vos templates

### 5. Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Tester la configuration

1. Lancez le serveur de développement : `npm run dev`
2. Allez sur la page Services
3. Testez un formulaire de rendez-vous
4. Vérifiez que l'email arrive dans votre boîte

## 🔧 Dépannage

### Erreurs courantes

1. **"EmailJS is not defined"**
   - Vérifiez que `@emailjs/browser` est installé
   - Redémarrez le serveur de développement

2. **"Template not found"**
   - Vérifiez l'ID du template dans EmailJS
   - Assurez-vous que le template est publié

3. **"Service not found"**
   - Vérifiez l'ID du service dans EmailJS
   - Assurez-vous que le service est actif

4. **Emails non reçus**
   - Vérifiez les spams
   - Testez avec un autre email
   - Vérifiez la configuration du service email

### Limites du plan gratuit

- 200 emails/mois
- 1 service email
- Templates limités

Pour plus d'emails, passez au plan payant.

## 📱 Personnalisation

### Modifier les templates

1. Allez dans EmailJS > Templates
2. Modifiez le contenu HTML
3. Sauvegardez et republiez

### Ajouter de nouveaux formulaires

1. Créez un nouveau composant de formulaire
2. Utilisez `emailjs.send()` avec les bons paramètres
3. Testez la fonctionnalité

## 🚀 Déploiement

### Variables d'environnement en production

1. Ajoutez les variables dans votre plateforme de déploiement
2. Redéployez l'application
3. Testez en production

### Vercel
```bash
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID  
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

### Netlify
Ajoutez les variables dans Site settings > Environment variables

---

**Note :** Gardez vos clés API secrètes et ne les commitez jamais dans le code source.

