import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const profileStats = [
    { label: 'Posts', value: '127' },
    { label: 'Followers', value: '2.4K' },
    { label: 'Following', value: '892' },
  ];

  const settingsItems = [
    { 
      id: 1, 
      title: 'Edit Profile', 
      icon: require('../../assets/images/person.svg'), 
      hasChevron: true 
    },
    { 
      id: 2, 
      title: 'Notifications', 
      icon: require('../../assets/images/bell.svg'), 
      hasChevron: true 
    },
    { 
      id: 3, 
      title: 'Privacy & Security', 
      icon: require('../../assets/images/person_tick.svg'), 
      hasChevron: true 
    },
    { 
      id: 4, 
      title: 'Favorites', 
      icon: require('../../assets/images/like.svg'), 
      hasChevron: true 
    },
    { 
      id: 5, 
      title: 'Watch History', 
      icon: require('../../assets/images/watch_history.svg'), 
      hasChevron: true 
    },
    { 
      id: 6, 
      title: 'Settings', 
      icon: require('../../assets/images/lines_horizontal.svg'), 
      hasChevron: true 
    },
  ];

  const renderSettingItem = (item: any) => {
    return (
      <TouchableOpacity 
        key={item.id} 
        className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100"
        activeOpacity={0.7}
      >
        <View className="flex-row items-center flex-1">
          <View className="w-6 h-6 mr-3">
            <Image 
              source={item.icon} 
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-black text-base font-medium">{item.title}</Text>
        </View>
        
        {item.hasChevron && (
          <View className="w-5 h-5">
            <Image 
              source={require('../../assets/images/chevron_right.svg')} 
              style={{ width: 20, height: 20, tintColor: '#828282' }}
              resizeMode="contain"
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View className="px-4 py-4 border-b border-gray-100">
        <Text className="text-black text-xl font-semibold">Profile</Text>
      </View>
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Info Section */}
        <View className="px-4 py-6">
          {/* Avatar and Basic Info */}
          <View className="flex-row items-center mb-6">
            <View className="w-20 h-20 rounded-full bg-gray-100 mr-4 overflow-hidden">
              <Image 
                source={{ uri: 'https://picsum.photos/80/80?random=profile' }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
            
            <View className="flex-1">
              <Text className="text-black text-xl font-semibold mb-1">Alex Johnson</Text>
              <Text className="text-gray-500 text-sm mb-2">@alexjohnson</Text>
              <Text className="text-gray-600 text-sm leading-5">
                Creative designer & photographer. Sharing moments that inspire ✨
              </Text>
            </View>
          </View>
          
          {/* Stats */}
          <View className="flex-row justify-around py-4 border-t border-b border-gray-100">
            {profileStats.map((stat, index) => (
              <View key={index} className="items-center">
                <Text className="text-black text-lg font-semibold">{stat.value}</Text>
                <Text className="text-gray-500 text-sm mt-1">{stat.label}</Text>
              </View>
            ))}
          </View>
          
          {/* Action Buttons */}
          <View className="flex-row gap-3 mt-6">
            <TouchableOpacity 
              className="flex-1 bg-black py-3 rounded-lg"
              activeOpacity={0.8}
            >
              <Text className="text-white text-center font-medium">Edit Profile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="flex-1 border border-gray-200 py-3 rounded-lg"
              activeOpacity={0.7}
            >
              <Text className="text-black text-center font-medium">Share Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Settings Section */}
        <View className="mt-4">
          <View className="px-4 py-3 bg-gray-50">
            <Text className="text-gray-600 text-sm font-medium uppercase tracking-wider">
              Account
            </Text>
          </View>
          
          <View className="bg-white">
            {settingsItems.slice(0, 3).map(renderSettingItem)}
          </View>
        </View>
        
        {/* Preferences Section */}
        <View className="mt-6">
          <View className="px-4 py-3 bg-gray-50">
            <Text className="text-gray-600 text-sm font-medium uppercase tracking-wider">
              Preferences
            </Text>
          </View>
          
          <View className="bg-white">
            {settingsItems.slice(3).map(renderSettingItem)}
          </View>
        </View>
        
        {/* Support Section */}
        <View className="mt-6">
          <View className="px-4 py-3 bg-gray-50">
            <Text className="text-gray-600 text-sm font-medium uppercase tracking-wider">
              Support
            </Text>
          </View>
          
          <View className="bg-white">
            <TouchableOpacity 
              className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100"
              activeOpacity={0.7}
            >
              <Text className="text-black text-base font-medium">Help Center</Text>
              <View className="w-5 h-5">
                <Image 
                  source={require('../../assets/images/chevron_right.svg')} 
                  style={{ width: 20, height: 20, tintColor: '#828282' }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100"
              activeOpacity={0.7}
            >
              <Text className="text-black text-base font-medium">About</Text>
              <View className="w-5 h-5">
                <Image 
                  source={require('../../assets/images/chevron_right.svg')} 
                  style={{ width: 20, height: 20, tintColor: '#828282' }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="px-4 py-4"
              activeOpacity={0.7}
            >
              <Text className="text-red-500 text-base font-medium">Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
} 