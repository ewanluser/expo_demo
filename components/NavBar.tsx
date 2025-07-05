import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const NavBar = () => {
  return (
    <View className="flex-row items-center justify-between p-5 bg-white shadow-md">
      {/* Logo */}
      <View>
        <Text className="text-2xl font-bold text-gray-800">Pilates</Text>
      </View>

      {/* Navigation Links (for larger screens) */}
      <View className="hidden md:flex flex-row items-center">
        <Link href="/" asChild>
          <Pressable className="px-4 py-2 rounded-lg active:bg-gray-200 hover:bg-gray-100">
            <Text className="text-base text-gray-600">Home</Text>
          </Pressable>
        </Link>
        <Link href="/explore" asChild>
          <Pressable className="px-4 py-2 rounded-lg active:bg-gray-200 hover:bg-gray-100">
            <Text className="text-base text-gray-600">Classes</Text>
          </Pressable>
        </Link>
      </View>

      {/* Action Button */}
      <Pressable className="px-5 py-2 bg-blue-600 rounded-full active:bg-blue-700 hover:bg-blue-500">
        <Text className="font-bold text-white">Get Started</Text>
      </Pressable>
    </View>
  );
};

export default NavBar; 