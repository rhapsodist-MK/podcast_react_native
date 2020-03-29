import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeatherIcon from 'react-native-vector-icons/Feather'

import {routes} from './router'
import { metrics } from '@constants/metrics'
import { theme } from '@constants/theme'

import HomeScreen from '@components/home/HomeScreen'
import DownloadsScreen from '@components/downloads/DownloadsScreen'
import LibraryScreen from '@components/library/LibraryScreen' 
import ProfileScreen from '@components/profile/ProfileScreen'



const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: theme.color.blueDark,
      inactiveTintColor: theme.color.grayLight,
      showLabel: false
    }}>
      <Tab.Screen options={{
        tabBarIcon: ({color}) => <FeatherIcon name="home" size={metrics.tabIconSize} color={color}/>
      }} name={routes.HOME} component={HomeScreen}/>
      <Tab.Screen options={{
        tabBarIcon: ({color}) => <FeatherIcon name="inbox" size={metrics.tabIconSize} color={color}/>
      }} name={routes.LIBRARY} component={LibraryScreen}/>
      <Tab.Screen options={{
        tabBarIcon: ({color}) => <FeatherIcon name="headphones" size={metrics.tabIconSize} color={color}/>
      }} name={routes.DOWNLOADS} component={DownloadsScreen}/>
      <Tab.Screen options={{
        tabBarIcon: ({color}) => <FeatherIcon name="user" size={metrics.tabIconSize} color={color}/>
      }} name={routes.PROFILE} component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigation