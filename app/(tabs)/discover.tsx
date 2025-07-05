import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../global.css';

import {
    CategoryCarousel,
    ImageCarousel,
    ProductCarousel,
    SearchBar,
} from '@/components/EcommerceComponents';

export default function DiscoverScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-4 pt-4 pb-2">
          <Text className="text-2xl font-bold text-gray-900">Discover</Text>
          <Text className="text-gray-600 mt-1">Find new trends and inspiration</Text>
        </View>
        
        {/* Search Bar */}
        <SearchBar />
        
        {/* Trending Categories */}
        <CategoryCarousel title="Trending Categories" />
        
        {/* Recommended for You */}
        <ProductCarousel title="Recommended for You" />
        
        {/* Popular This Week */}
        <ProductCarousel title="Popular This Week" />
        
        {/* Inspiration Gallery */}
        <ImageCarousel title="Get Inspired" />
        
        {/* New Arrivals */}
        <ProductCarousel title="Just Dropped" />
        
        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
} 