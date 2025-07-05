import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-semibold text-primary">Cart</Text>
        <Text className="text-gray-400 mt-2">Your cart is empty</Text>
      </View>
    </SafeAreaView>
  );
} 