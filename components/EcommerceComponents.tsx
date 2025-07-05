import { Image } from 'expo-image';
import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

import { ChevronRightIcon, LikeIcon, LinesHorizontalIcon, PersonTickIcon, WatchHistoryIcon } from './ui/SvgIcons';

// 搜索栏组件
export const SearchBar = () => {
  return (
    <View className="bg-gray-100 rounded-lg flex-row items-center gap-3 px-3 py-2 mx-4 mt-4">
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path 
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" 
          stroke="#828282" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M20.9999 21.0004L16.6499 16.6504" 
          stroke="#828282" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </Svg>
      <Text className="text-gray-500 text-base flex-1">Search</Text>
    </View>
  );
};

// 轮播图组件
export const CategoryCarousel = ({ title }: { title: string }) => {
  const categories = [
    { id: 1, title: 'Title', image: require('../assets/images/ecommerce/category_1.png') },
    { id: 2, title: 'Title', image: require('../assets/images/ecommerce/category_2.png') },
    { id: 3, title: 'Title', image: require('../assets/images/ecommerce/category_3.png') },
    { id: 4, title: 'Title', image: require('../assets/images/ecommerce/category_4.png') },
  ];

  return (
    <View className="mt-6">
      {/* 标题行 */}
      <View className="flex-row items-center justify-between px-4 mb-2">
        <Text className="text-black text-base font-semibold">{title}</Text>
        <TouchableOpacity className="w-5 h-5 bg-gray-100 rounded-full items-center justify-center">
          <ChevronRightIcon width={7} height={14} color="#000000" />
        </TouchableOpacity>
      </View>
      
      {/* 轮播内容 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 24 }}>
        {categories.map((category) => (
          <View key={category.id} className="items-center gap-2">
            <Image source={category.image} style={{ width: 76, height: 76 }} className="rounded-full" />
            <Text className="text-black text-sm font-medium text-center" style={{ width: 76 }}>
              {category.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// 产品卡片组件
export const ProductCard = ({ product }: { product: any }) => {
  return (
    <View className="gap-3" style={{ width: 148 }}>
      <Image source={product.image} style={{ width: 148, height: 148 }} className="rounded-lg" />
      <View className="gap-0.5">
        <Text className="text-xs text-gray-500">Brand</Text>
        <Text className="text-sm text-black">Product name</Text>
        <Text className="text-base text-black font-medium">$10.99</Text>
      </View>
    </View>
  );
};

// 产品轮播组件
export const ProductCarousel = ({ title }: { title: string }) => {
  const products = [
    { id: 1, image: require('../assets/images/ecommerce/product_1.png') },
    { id: 2, image: require('../assets/images/ecommerce/product_2.png') },
    { id: 3, image: require('../assets/images/ecommerce/product_3.png') },
  ];

  return (
    <View className="mt-6">
      {/* 标题行 */}
      <View className="flex-row items-center justify-between px-4 mb-2">
        <Text className="text-black text-base font-semibold">{title}</Text>
        <TouchableOpacity className="w-5 h-5 bg-gray-100 rounded-full items-center justify-center">
          <ChevronRightIcon width={7} height={14} color="#000000" />
        </TouchableOpacity>
      </View>
      
      {/* 产品列表 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

// 图片轮播组件
export const ImageCarousel = ({ title }: { title: string }) => {
  const images = [
    { id: 1, image: require('../assets/images/ecommerce/image_1.png') },
    { id: 2, image: require('../assets/images/ecommerce/image_2.png') },
    { id: 3, image: require('../assets/images/ecommerce/image_3.png') },
    { id: 4, image: require('../assets/images/ecommerce/image_4.png') },
  ];

  return (
    <View className="mt-6">
      {/* 标题行 */}
      <View className="flex-row items-center justify-between px-4 mb-2">
        <Text className="text-black text-base font-semibold">{title}</Text>
        <TouchableOpacity className="w-5 h-5 bg-gray-100 rounded-full items-center justify-center">
          <ChevronRightIcon width={7} height={14} color="#000000" />
        </TouchableOpacity>
      </View>
      
      {/* 图片列表 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
        {images.map((image) => (
          <Image key={image.id} source={image.image} style={{ width: 96, height: 96 }} className="rounded-lg" />
        ))}
      </ScrollView>
    </View>
  );
};

// Banner组件
export const Banner = () => {
  return (
    <View className="mx-4 mt-4 rounded-lg overflow-hidden" style={{ height: 136 }}>
      <ImageBackground source={require('../assets/images/ecommerce/banner.png')} className="flex-1 justify-between" style={{ padding: 20 }}>
        <Text className="text-black text-xl font-semibold mt-8">Banner title</Text>
        <View className="flex-row justify-center gap-1.5 mb-2">
          <View className="w-1.5 h-1.5 bg-black opacity-80 rounded-full" />
          <View className="w-1.5 h-1.5 bg-black opacity-20 rounded-full" />
          <View className="w-1.5 h-1.5 bg-black opacity-20 rounded-full" />
          <View className="w-1.5 h-1.5 bg-black opacity-20 rounded-full" />
          <View className="w-1.5 h-1.5 bg-black opacity-20 rounded-full" />
        </View>
      </ImageBackground>
    </View>
  );
};

// Pills组件
export const Pills = () => {
  const pills = [
    { id: 1, IconComponent: LikeIcon, label: 'Favorites', active: true },
    { id: 2, IconComponent: WatchHistoryIcon, label: 'History', active: false },
    { id: 3, IconComponent: PersonTickIcon, label: 'Following', active: false },
    { id: 4, IconComponent: LinesHorizontalIcon, label: 'Orders', active: false },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, marginTop: 16 }}>
      {pills.map((pill) => {
        const { IconComponent } = pill;
        return (
          <TouchableOpacity
            key={pill.id}
            className="border border-gray-200 rounded-md flex-row items-center gap-1"
            style={{ paddingHorizontal: 10, paddingVertical: 5 }}
          >
            <IconComponent 
              width={18} 
              height={18} 
              color={pill.active ? '#686868' : '#1A1A1A'} 
            />
            <Text className={`text-sm font-medium ${pill.active ? 'text-black opacity-90' : 'text-gray-800'}`}>
              {pill.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}; 