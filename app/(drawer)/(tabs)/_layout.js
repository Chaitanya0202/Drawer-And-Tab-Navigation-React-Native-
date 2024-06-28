import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import React from 'react';

export default function _layout() {
  return (
   <Tabs screenOptions={{headerLeft: () => <DrawerToggleButton tintColor='#000' />}}>
    <Tabs.Screen name='feed' options={{
      tabBarIcon: ({color}) => (
        <Feather name="home" size={24} color={color} />
      ),
      tabBarLabel: 'Home',
      headerTitle: 'Home',
      // headerRight: () => <Button onPress={() => router.push('feed/new')} title='Add Post' />
    }} />
    
    <Tabs.Screen name='likes' options={{
      tabBarIcon: ({color}) => (
        <AntDesign name="heart" size={24} color={color} />
      ),
      tabBarLabel: 'Likes',
      headerTitle: 'Likes'
    }} />

   
    <Tabs.Screen name='chat' options={{
      tabBarIcon: ({color}) => (
        <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
      ),
      tabBarLabel: 'Chat Page',
      headerTitle: 'Chat'
    }} />
     <Tabs.Screen name='profile' options={{
      tabBarIcon: ({color}) => (
        <AntDesign name="user" size={24} color={color} />
      ),
      tabBarLabel: 'Profile',
      headerTitle: 'Profile'
    }} />

   </Tabs>
  )
}