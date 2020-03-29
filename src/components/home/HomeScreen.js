import React from 'react'
import { Box, Text } from 'react-native-design-utility'
import { ScrollView, SafeAreaView } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import {theme} from '@constants/theme'

const PodcastCard = () => {
  return <Box w={100} h={100} radius={4} bg="red" mr="sm" />
}

const Category = ({ color, icon }) => {
  const bg = `${color}50`
  return (
    <Box center w={80} mr="sm">
      <Box circle={80} bg={bg} center mb="2xs">
        <FeatherIcon name={icon} size={25} color={color}/>
      </Box>
      <Box>
        <Text size="xs">Education</Text>
      </Box>
    </Box>
  )
}

export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Box mt={100}>
        <Box ml="sm">
          <Text size="xl">Trending</Text>
        </Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </ScrollView>
      </Box>
      <Box mt={10}>
        <Box ml="sm">
          <Text size="xl">Categories</Text>
        </Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Category icon="heart" color={theme.color.red}/>
        </ScrollView>
      </Box>
    </SafeAreaView>
  )
}