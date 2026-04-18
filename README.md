# 🚀 GoulBAM Enterprises – Plateforme Web Officielle

Bienvenue sur le dépôt du site officiel de **GoulBAM Enterprises**, une entreprise spécialisée dans les solutions digitales, le consulting, le marketing, le design et la formation.

Ce projet est une plateforme web moderne développée avec **Next.js**, visant à présenter l’entreprise, attirer des clients, gérer les demandes et offrir une expérience utilisateur premium.

---

# 🌍 Vision

GoulBAM Enterprises est une entreprise **sans frontières**.

Nous travaillons avec :
- des clients partout dans le monde 🌐  
- des talents internationaux 💼  
- des projets à impact digital 🚀  

Peu importe votre localisation, vous pouvez collaborer avec nous.

---

# 🎯 Objectifs du site

Ce site permet de :

- Présenter l’entreprise et sa vision
- Mettre en avant les services et expertises
- Générer des leads (formulaire de contact)
- Offrir une image professionnelle haut de gamme
- Centraliser la communication avec les prospects
- Servir de base pour des évolutions futures (SaaS, CRM, etc.)

---

# 🧠 Stack technique

### Frontend
- Next.js (App Router)
- React
- TypeScript
- TailwindCSS

### Backend (intégré)
- API Routes Next.js
- Nodemailer (SMTP Gmail)

### UI / UX
- Design premium
- Animations dynamiques
- Responsive (mobile-first)
- Architecture modulaire

---

# 📁 Structure du projet

src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── a-propos/
│   │   ├── services/
│   │   ├── contact/
│   │   ├── projets/
│   │   ├── blog/
│   │   ├── nexium-institute/
│   │   ├── programme-ambassadeur/
│   │   ├── mentions-legales/
│   │   └── politique-confidentialite/
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── home/
│   │   ├── contact/
│   │   └── ...
│   │
│   ├── legal/
│   │   └── LegalPageLayout.tsx
│   │
│   └── ui/
│       ├── Container.tsx
│       ├── AnimatedSection.tsx
│       └── CookieConsentModal.tsx

---

# ✉️ Fonctionnalité clé : Formulaire de contact

Le formulaire permet d’envoyer une demande directement à :

👉 **goulbam8@gmail.com**

### Fonctionnement :

1. L’utilisateur remplit le formulaire  
2. Une requête est envoyée vers `/api/contact`  
3. Le serveur envoie un email via SMTP  
4. GoulBAM reçoit la demande en temps réel  

---

# 🔐 Configuration SMTP

Créer un fichier `.env.local` :

SMTP_HOST=smtp.gmail.com  
SMTP_PORT=465  
SMTP_SECURE=true  

SMTP_USER=goulbam8@gmail.com  
SMTP_PASS=YOUR_APP_PASSWORD  

MAIL_FROM_NAME=GoulBAM Enterprises  
MAIL_FROM_EMAIL=goulbam8@gmail.com  
MAIL_TO=goulbam8@gmail.com  

⚠️ IMPORTANT :

- Utiliser un **mot de passe d’application Gmail**
- Ne jamais commit ce fichier
- Ajouter `.env.local` dans `.gitignore`

---

# 🍪 Gestion des cookies

Le site inclut :

- Modal de consentement RGPD
- Choix des cookies :
  - Essentiels
  - Analytiques
  - Marketing
- Sauvegarde en localStorage
- Possibilité de modifier les préférences

---

# ⚖️ Pages légales

- `/mentions-legales`
- `/politique-confidentialite`

Accessibles depuis le footer.

---

# 🎨 Expérience utilisateur

- Design premium moderne
- Interface claire
- Animations fluides
- Responsive sur tous les appareils
- UX professionnelle

---

# 🏢 Services proposés

- Développement web
- Développement applicatif
- Solutions mobiles
- Consulting & conseil
- Marketing digital
- Design graphique
- Conception architecturale
- Formation (Nexium Institute)

---

# 🚀 Installation

git clone https://github.com/ton-repo/goulbam-site.git  
cd goulbam-site  
npm install  
npm run dev  

---

# 🧪 Production

npm run build  
npm start  

---

# 📌 Améliorations futures

- Dashboard admin  
- Base de données pour les contacts  
- CRM intégré  
- Authentification  
- Blog dynamique  
- Multilingue (FR / EN)  
- SEO avancé  
- Analytics  
- CMS  

---

# 🤝 Contribution

Projet interne à GoulBAM Enterprises.  
Toute contribution doit être validée.

---

# 📩 Contact

📧 contact@goulbam.com  
📧 goulbam8@gmail.com  
📱 WhatsApp : +237 696 896 758  

---

# 🏁 Conclusion

Ce projet représente une base solide pour :

- la croissance digitale de GoulBAM  
- la génération de leads  
- la mise en place de futurs produits SaaS  

---

# 🧾 Signature

**GoulBAM Enterprises**  
_"Construire des solutions digitales sans frontières."_