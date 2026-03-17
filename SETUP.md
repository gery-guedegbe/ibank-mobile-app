# Installation et Configuration

Guide pour configurer le projet en développement

## Prérequis

- Node.js 18 ou plus
- Expo CLI installée globalement
- Un compte Firebase avec un projet créé

## Étape 1 : Cloner et Installer

```bash
git clone https://github.com/gery-guedegbe/ibank-mobile-app.git
cd ibank-mobile-app
npm install
```

## Étape 2 : Configurer les Variables d'Environnement

### Créer le fichier `.env.local`

```bash
cp .env.example .env.local
```

### Obtenir les clés Firebase

1. Allez à [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez le projet `ibank-mobile-app`
3. Cliquez sur Project Settings (roue dentée)
4. Allez à l'onglet "Your apps"
5. Sélectionnez l'app web
6. Copiez les informations de configuration

### Remplir le fichier `.env.local`

```env
EXPO_PUBLIC_FIREBASE_API_KEY=AIzaSy...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=ibank-mobile-app.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=ibank-mobile-app
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=ibank-mobile-app.firebasestorage.app
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
EXPO_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc...
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXX
```

Important : Le fichier `.env.local` est ignoré par Git. Ne le committez jamais !

## Étape 3 : Lancer l'Application

```bash
npm start
```

Dans le terminal, appuyez sur :

- `i` pour iOS
- `a` pour Android
- `w` pour Web

## Tester sur Appareil

### Android Studio Emulator

```bash
npm run android
```

### iOS Simulator (Mac uniquement)

```bash
npm run ios
```

## Vérification

Pour vérifier que tout fonctionne :

```bash
npm run lint           # Vérifier le code
npm start              # Vérifier que Firebase est bien configuré
```

Vous devriez voir l'écran de login sans erreurs d'environnement.

## Sécurité

Voir [SECURITY.md](./SECURITY.md) pour les bonnes pratiques sur les variables d'environnement.

## Dépannage

### Erreur: "Missing required environment variables"

Cause : Le fichier `.env.local` est manquant ou incomplet.

Solution :

```bash
cp .env.example .env.local
# Puis remplissez les valeurs Firebase
```

### Erreur: "Firebase initialization failed"

Cause : Les clés Firebase sont incorrectes.

Solution :

1. Vérifiez les clés dans `.env.local`
2. Vérifiez que le projet Firebase est actif
3. Vérifiez que l'app web est ajoutée dans Firebase

### Expo Go ou Emulator ne se connecte pas

Cause : Problème de réseau ou port occupé.

Solution :

```bash
npm start --clear                 # Réinitialiser le cache
npm start -- --port 19000        # Ou changer le port
```

## Ressources

- [Expo Documentation](https://docs.expo.dev/)
- [Firebase Setup](https://firebase.google.com/docs/web/setup)
- [React Native Docs](https://reactnative.dev/)
- [Project README](./README.md)
- [Security Guide](./SECURITY.md)
