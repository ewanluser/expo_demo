import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ActivitiesScreen() {
  const categories = [
    { id: 1, title: 'All', active: true },
    { id: 2, title: 'Follows', active: false },
    { id: 3, title: 'Likes', active: false },
    { id: 4, title: 'Comments', active: false },
  ];

  const activities = [
    {
      id: 1,
      type: 'follow',
      username: 'starryskies23',
      action: 'Started following you',
      timestamp: '1d',
      hasButton: true,
      hasNotificationDot: true,
      avatar: 'https://picsum.photos/48/48?random=1',
    },
    {
      id: 2,
      type: 'like',
      username: 'nebulanomad',
      action: 'Liked your post',
      timestamp: '1d',
      hasNotificationDot: true,
      avatar: 'https://picsum.photos/48/48?random=2',
      postImage: 'https://picsum.photos/48/48?random=10',
    },
    {
      id: 3,
      type: 'comment_like',
      username: 'emberecho',
      action: 'Liked your comment',
      timestamp: '2d',
      hasNotificationDot: true,
      avatar: 'https://picsum.photos/48/48?random=3',
      quote: 'Happy birthday!!! 🎉🎉',
    },
    {
      id: 4,
      type: 'save',
      username: 'lunavoyager',
      action: 'Saved your post',
      timestamp: '3d',
      hasNotificationDot: true,
      avatar: 'https://picsum.photos/48/48?random=4',
      postImage: 'https://picsum.photos/48/48?random=11',
    },
    {
      id: 5,
      type: 'comment',
      username: 'shadowlynx',
      action: 'Commented on your post',
      timestamp: '4d',
      comment: "i'm going in september. what about you?",
      hasNotificationDot: true,
      avatar: 'https://picsum.photos/48/48?random=5',
      postImage: 'https://picsum.photos/48/48?random=12',
    },
    {
      id: 6,
      type: 'share',
      username: 'nebulanomad',
      action: 'Shared a post you might like',
      timestamp: '5d',
      avatar: 'https://picsum.photos/48/48?random=2',
      postImage: 'https://picsum.photos/48/48?random=13',
    },
    {
      id: 7,
      type: 'comment_like',
      username: 'lunavoyager',
      action: 'Liked your comment',
      timestamp: '5d',
      avatar: 'https://picsum.photos/48/48?random=4',
      quote: 'This is so adorable!!!',
    },
  ];

  const renderActivityItem = (activity: any) => {
    return (
      <View key={activity.id} className="flex-row px-4 py-4 relative">
        {/* Notification dot */}
        {activity.hasNotificationDot && (
          <View className="absolute left-1.5 top-7 w-1.5 h-1.5 bg-red-500 rounded-full z-10" />
        )}
        
        {/* Avatar */}
        <Image 
          source={{ uri: activity.avatar }} 
          style={{ width: 48, height: 48, marginRight: 24, borderRadius: 24 }} 
        />
        
        {/* Content Container */}
        <View className="flex-1">
          <View className="flex-row justify-between items-start">
            {/* Text Content */}
            <View className="flex-1 pr-4">
              {/* Username and timestamp */}
              <View className="flex-row items-center flex-wrap mb-1.5">
                <Text className="text-black text-sm font-medium mr-2">{activity.username}</Text>
                <Text className="text-gray-500 text-sm">{activity.timestamp}</Text>
              </View>
              
              {/* Action */}
              <Text className="text-gray-500 text-sm mb-2">{activity.action}</Text>
              
              {/* Comment text */}
              {activity.comment && (
                <Text className="text-black text-sm leading-5">{activity.comment}</Text>
              )}
            </View>
            
            {/* Right side content */}
            <View className="flex-shrink-0">
              {activity.hasButton && (
                <TouchableOpacity className="bg-black px-4 py-2 rounded-lg">
                  <Text className="text-white text-sm font-medium">Follow</Text>
                </TouchableOpacity>
              )}
              
              {activity.postImage && (
                <View style={{ width: 48, height: 48, borderRadius: 24, overflow: 'hidden' }}>
                  <Image 
                    source={{ uri: activity.postImage }} 
                    style={{ width: '100%', height: '100%' }} 
                  />
                </View>
              )}
            </View>
          </View>
          
          {/* Quote */}
          {activity.quote && (
            <View className="flex-row mt-3 pl-1">
              <View className="w-0.5 h-5 bg-gray-300 rounded mr-3" />
              <Text className="text-gray-500 text-sm flex-1 leading-5">{activity.quote}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View className="px-4 py-4 border-b border-gray-100">
        <Text className="text-black text-xl font-semibold">Activity</Text>
      </View>
      
      {/* Category Pills */}
      <View className="py-4">
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className={`rounded-full border ${
                category.active 
                  ? 'border-transparent' 
                  : 'border-gray-200'
              }`}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: category.active ? 'rgba(0, 0, 0, 0.9)' : '#FFFFFF',
                alignSelf: 'flex-start',
              }}
            >
              <Text 
                className={`text-sm font-medium ${
                  category.active ? 'text-white' : 'text-black'
                }`}
                style={{ lineHeight: 16 }}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      {/* Activity Feed */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {activities.map(renderActivityItem)}
        
        {/* Bottom spacing */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
} 