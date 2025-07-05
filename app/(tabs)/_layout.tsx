import { Tabs } from 'expo-router';
import React from 'react';

import {
  BellFillIcon,
  CartFillIcon,
  DiscoverFillIcon,
  HomeFillIcon,
  PersonFillIcon
} from '@/components/ui/SvgIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
      }}>
      <Tabs.Screen
        name="shop"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeFillIcon 
              width={24} 
              height={24} 
              color={focused ? '#000000' : '#9CA3AF'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ focused }) => (
            <DiscoverFillIcon 
              width={24} 
              height={24} 
              color={focused ? '#000000' : '#9CA3AF'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <CartFillIcon 
              width={24} 
              height={24} 
              color={focused ? '#000000' : '#9CA3AF'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          tabBarIcon: ({ focused }) => (
            <BellFillIcon 
              width={24} 
              height={24} 
              color={focused ? '#000000' : '#9CA3AF'} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <PersonFillIcon 
              width={24} 
              height={24} 
              color={focused ? '#000000' : '#9CA3AF'} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
