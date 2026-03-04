import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Animated, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Empêche la splash screen native de se cacher automatiquement
SplashScreen.preventAutoHideAsync();

export default function EntryPoint() {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.9);

  useEffect(() => {
    // Simulation d'un chargement de données/session
    async function prepare() {
      try {
        // Animation d'entrée du logo/texte
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
          }),
        ]).start();

        await new Promise((resolve) => setTimeout(resolve, 2500));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
        // Redirection vers l'écran de Login après la splash
        router.replace("/login");
      }
    }

    prepare();
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary-1">
      <StatusBar style="light" />

      <Animated.View
        style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}
        className="items-center"
        accessible={true}
        accessibilityLabel="iBank Logo"
        accessibilityRole="image"
      >
        {/* Remplacement du logo par un placeholder stylisé selon ton UI */}
        <View className="shadow-card h-24 w-24 items-center justify-center rounded-3xl bg-neutral-6">
          <Text className="font-poppins-bold text-[40px] text-primary-1">
            i
          </Text>
        </View>

        <Animated.View className="mt-6 items-center">
          <Text className="font-poppins-bold text-title-1 tracking-widest text-neutral-6">
            IBANK
          </Text>

          <Text className="mt-1 font-poppins-medium text-caption-2 text-primary-3">
            Secure Digital Banking
          </Text>
        </Animated.View>
      </Animated.View>

      {/* Indicateur de chargement discret en bas */}
      <View className="absolute bottom-12">
        <View className="flex-row space-x-2">
          <View className="h-2 w-2 rounded-full bg-primary-3 opacity-40" />
          <View className="h-2 w-2 rounded-full bg-primary-3 opacity-70" />
          <View className="h-2 w-2 rounded-full bg-primary-3" />
        </View>
      </View>
    </SafeAreaView>
  );
}
