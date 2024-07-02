// src/app/onboarding.tsx
import React from "react";
import { Image, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { Redirect, useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();

  const isLogged = false; // Replace with actual authentication check

  if (isLogged) return <Redirect href="/(tabs)" />;
  const navigateToLogin = () => {
    router.push("/(auth)/sign-in"); // Replace with your login screen path
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Image
        source={{ uri: "https://example.com/onboarding-image.jpg" }} // Replace with your image URL
        className="w-40 h-40 mb-8"
      />
      <Text className="text-2xl font-bold text-center mb-4 text-black">
        Welcome to Our App
      </Text>
      <Text className="text-center text-gray-600 mb-8">
        Discover amazing features and explore the app.
      </Text>
      <Button
        mode="contained"
        onPress={navigateToLogin}
        className="w-full bg-blue-500"
      >
        Get Started
      </Button>
    </View>
  );
}
