# 🔒 Security Guide - Environment Variables

## ⚠️ Important: Firebase Credentials Leak Fix

Les clés Firebase sensibles ont été supprimées du code source et déplacées dans un fichier `.env.local` qui est **ignoré par Git**.

### 📋 Ce qui a été fait

✅ Clés Firebase déplacées de `config/firebase.ts` vers `.env.local`
✅ Validation des variables d'environnement au démarrage
✅ Fichier `.env.example` créé pour la documentation
✅ `.gitignore` mis à jour pour ignorer `*.env.local`

### 🔴 Actions Nécessaires IMMÉDIATEMENT

1. **Révoquer les clés compromises sur Google Cloud :**
   - Allez à : https://console.cloud.google.com/
   - Projet : `ibank-mobile-app`
   - API & Services > Identifiants
   - Supprimez les clés API exposées
   - Créez de nouvelles clés API

2. **Nettoyer l'historique Git :**

   ```bash
   # Option 1: Utiliser git-filter-repo (recommandé)
   pip install git-filter-repo
   git filter-repo --replace-text <(echo 'AIzaSyBISJ4tVYeuwqr5gKn5PDieD-TDInTgnVc==>')

   # Option 2: Utiliser BFG Repo-Cleaner
   bfg --replace-text config/firebase.ts ~/.bfg-cache

   # Puis forcer le push
   git push --force-with-lease --all
   git push --force-with-lease --tags
   ```

3. **Mettez à jour votre `.env.local` :**
   ```bash
   cp .env.example .env.local
   # Remplissez les nouvelles clés Firebase
   ```

### 📝 Utilisation

#### Pour les développeurs

1. Créer un fichier `.env.local` :

   ```bash
   cp .env.example .env.local
   ```

2. Remplissez les valeurs avec vos clés Firebase (depuis [Firebase Console](https://console.firebase.google.com/)) :
   - `EXPO_PUBLIC_FIREBASE_API_KEY`
   - `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
   - `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `EXPO_PUBLIC_FIREBASE_APP_ID`
   - `EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID`

3. Lancez l'application normalement :
   ```bash
   npm start
   # ou
   expo start
   ```

#### Pour les variables de build (CI/CD)

Dans votre pipeline, définissez les variables d'environnement avant le build :

**GitHub Actions:**

```yaml
env:
  EXPO_PUBLIC_FIREBASE_API_KEY: ${{ secrets.FIREBASE_API_KEY }}
  EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: ${{ secrets.FIREBASE_AUTH_DOMAIN }}
  # ... etc
```

**EAS Build (Expo):**

```bash
eas build --local --env-file=.env.local
```

### 🚫 JAMAIS

- ❌ Ne committez pas de fichiers `.env`
- ❌ Ne mettez pas de secrets hardcodés dans le code
- ❌ Ne poussez pas sur GitHub sans vérifier `.gitignore`
- ❌ Ne commitez pas `node_modules` ou autres dossiers générés

### ✅ Bonnes pratiques

- ✅ Utilisez `.env.local` pour le développement local
- ✅ Utilisez les secrets du CI/CD (GitHub Secrets, etc.) en production
- ✅ Changez régulièrement vos clés API
- ✅ Utilisez les restrictions de clés API dans Google Cloud
- ✅ Vérifiez `.env.example` est à jour
- ✅ Limitez les permissions Firebase par environnement

### 🔍 Vérification

Pour vérifier que les secrets ne sont plus dans le code :

```bash
# Recherchez les clés exposées
grep -r "AIzaSy\|firebaseapp\|160824508991" src/

# Listez les fichiers trackés par git
git ls-tree -r HEAD | grep -E "(\.env|firebase\.ts)"
```

### 📚 Références

- [Expo Environment Variables](https://docs.expo.dev/workflow/configuration/)
- [Firebase Security Best Practices](https://firebase.google.com/docs/projects/configure/settings)
- [Git History Cleanup](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
