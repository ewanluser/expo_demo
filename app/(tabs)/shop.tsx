import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../global.css';

import {
  Banner,
  CategoryCarousel,
  ImageCarousel,
  Pills,
  ProductCarousel,
  SearchBar
} from '@/components/EcommerceComponents';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* 搜索栏 */}
        <SearchBar />
        
        {/* Banner */}
        <Banner />
        
        {/* Pills导航 */}
        <Pills />
        
        {/* 分类轮播 */}
        <CategoryCarousel title="Title" />
        
        {/* 产品轮播 */}
        <ProductCarousel title="Title" />
        
        {/* 图片轮播 */}
        <ImageCarousel title="Title" />
        
        {/* 底部间距 */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}
