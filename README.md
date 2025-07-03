# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Deployment

This app supports deployment to multiple platforms. Choose the deployment method that best fits your needs:

### 🚀 Production Deployment with EAS Build

For production-ready builds, we recommend using [EAS Build](https://docs.expo.dev/build/introduction/):

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Configure EAS**
   ```bash
   eas build:configure
   ```

3. **Build for different platforms**
   ```bash
   # Build for iOS
   eas build --platform ios
   
   # Build for Android
   eas build --platform android
   
   # Build for both platforms
   eas build --platform all
   ```

4. **Submit to App Stores**
   ```bash
   # Submit to App Store
   eas submit --platform ios
   
   # Submit to Google Play Store
   eas submit --platform android
   ```

### 🌐 Web Deployment

Since this project supports web, you can deploy it as a static website:

1. **Build for web**
   ```bash
   npx expo export --platform web
   ```

2. **Deploy to hosting services**
   
   **Netlify:**
   - Upload the `dist` folder to [Netlify](https://netlify.com)
   - Or connect your Git repository for automatic deployments
   
   **Vercel:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```
   
   **GitHub Pages:**
   - Push the `dist` folder contents to your `gh-pages` branch
   - Enable GitHub Pages in repository settings

### 📱 Development/Testing Deployment

For quick testing and sharing with team members:

1. **Expo Go (Development)**
   ```bash
   npx expo start
   ```
   Then scan the QR code with the Expo Go app

2. **Development Build**
   ```bash
   # Create a development build
   eas build --profile development --platform ios
   eas build --profile development --platform android
   ```

3. **Preview Build**
   ```bash
   # Create a preview build for testing
   eas build --profile preview --platform all
   ```

### 📋 Pre-deployment Checklist

Before deploying to production:

- [ ] Update app version in `app.json`
- [ ] Test on all target platforms
- [ ] Configure app icons and splash screens
- [ ] Set up proper app store metadata
- [ ] Test the production build locally
- [ ] Configure environment variables if needed
- [ ] Review and update app permissions

### 🔧 Environment Setup

Make sure you have the following set up for deployment:

- **For iOS:** Xcode and Apple Developer account
- **For Android:** Android Studio and Google Play Console account
- **For Web:** Choose your preferred hosting service

For detailed deployment guides, visit the [Expo deployment documentation](https://docs.expo.dev/distribution/introduction/).

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
