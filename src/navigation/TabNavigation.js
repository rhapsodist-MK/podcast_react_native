import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {routes} from './router'

import HomeScreen from '@components/home/HomeScreen'
import DownloadsScreen from '@components/downloads/DownloadsScreen'
import LibraryScreen from '@components/library/LibraryScreen'
import ProfileScreen from '@components/profile/ProfileScreen'


const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.HOME} component={HomeScreen}/>
      <Tab.Screen name={routes.LIBRARY} component={LibraryScreen}/>
      <Tab.Screen name={routes.DOWNLOADS} component={DownloadsScreen}/>
      <Tab.Screen name={routes.PROFILE} component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigation