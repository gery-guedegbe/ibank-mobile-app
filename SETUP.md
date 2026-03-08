# 🚀 Installation Guide - Setup Développement

## Prérequis

- Node.js 18+ et npm
- Expo CLI : `npm install -g expo-cli`
- Compte Firebase avec un projet créé

## 1️⃣ Cloner et Installer

```bash
git clone <your-repo-url>
cd ibank-mobile-app
npm install
```

## 2️⃣ Configurer les Variables d'Environnement

### a) Créer le fichier `.env.local`

```bash
cp .env.example .env.local
```

### b) Obtenir vos clés Firebase

1. Allez à [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez votre projet `ibank-mobile-app`
3. Cliquez sur ⚙️ **Project Settings**
4. Onglet **Your apps** → Sélectionnez l'app web
5. Copiez les infos de configuration

### c) Remplir `.env.local`

```env
EXPO_PUBLIC_FIREBASE_API_KEY=AIzaSy...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=ibank-mobile-app.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=ibank-mobile-app
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=ibank-mobile-app.firebasestorage.app
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
EXPO_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc...
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXX
```

⚠️ **Important:** N'oubliez pas que `.env.local` est dans `.gitignore` - ne commitez pas ce fichier !

## 3️⃣ Lancer l'Application

```bash
# Mode développement avec hot reload
npm start

# Puis choisissez votre plateforme :
# - iOS     : Appuyez sur i
# - Android : Appuyez sur a
# - Web     : Appuyez sur w
```

## 📱 Tester sur Appareil

### Android Studio Emulator

```bash
npm run android
```

### iOS Simulator (Mac uniquement)

```bash
npm run ios
```

## 🧪 Vérification

Pour vérifier que tout fonctionne :

```bash
# Linter
npm run lint

# Vérifier que Firebase est bien configuré
npm start
# Vous devriez voir l'écran de login sans erreurs d'environnement
```

## 🔐 Sécurité

⚠️ **IMPORTANT:** Voir [SECURITY.md](./SECURITY.md) pour les meilleures pratiques sur les variables d'environnement.

## 🐛 Troubleshooting

### Erreur: "Missing required environment variables"

**Cause:** `.env.local` est manquant ou incomplet

**Solution:**

```bash
cp .env.example .env.local
# Remplissez toutes les valeurs Firebase
```

### Erreur: "Firebase initialization failed"

**Cause:** Les clés Firebase sont incorrectes

**Solution:**

1. Vérifiez que vous utilisez les bonnes clés dans `.env.local`
2. Vérifiez que le projet Firebase est actif
3. Vérifiez que la plateforme web est ajoutée dans Firebase

### Expo Go ou Emulator ne se connecte pas

**Cause:** Problème de réseau ou port occupé

**Solution:**

```bash
# Réinitialiser le cache
npm start --clear

# Ou changer le port
npm start -- --port 19000
```

## 📚 Ressources

- [Expo Documentation](https://docs.expo.dev/)
- [Firebase Setup](https://firebase.google.com/docs/web/setup)
- [React Native Docs](https://reactnative.dev/)
- [Project README](./README.md)
- [Security Guide](./SECURITY.md)
