import React, { useState, useEffect } from 'react'
import { Box, Text } from 'react-native-design-utility'
import { ScrollView, SafeAreaView, Image } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'

import {theme} from '@constants/theme'
import {searchPodcast} from '@services/ItunesApiServices'

const Divider = () => <Box h={1} w="100%" bg="greyLight"/>

const PodcastCard = ({podcast}) => {
  return (
    <Box mr="sm" h={105}>
      <Box w={100} h={100} radius="xs" mr="sm" shadow={1}>
        <Image style={{flex: 1, borderRadius: theme.radius.xs}} source={{uri: podcast.artworkUrl60 }}/>
      </Box>
    </Box>
  )
}

const PodcastTile = ({podcast}) => {
  return (
    <Box mb="sm">
      <Box dir="row" mb="sm">
        <Box w={100} h={100} radius="xs" mr="xs">
          <Image style={{flex: 1}} source={{uri: podcast.artworkUrl60 }}/>
        </Box>
        <Box f={1}>
          <Text size="sm" numberOfLines={1}>{podcast.artistName}</Text>
        </Box>
      </Box>
      <Divider/>
    </Box>
  )
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
  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    searchPodcast('syntax')
      .then((results) => {
        setPodcasts(results)
      })
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Box mt={100}>
        <Box ml="sm">
          <Text size="xl">Trending</Text>
        </Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {podcasts.map((podcast) => <PodcastCard podcast={podcast} key={podcast.trackId} />)}
        </ScrollView>
      </Box> */}
      <Box mt={10}>
        <Box ml="sm">
          <Text size="xl">Categories</Text>
        </Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Category icon="heart" color={theme.color.red}/>
        </ScrollView>
      </Box>
      <Box mt={100}>
        <ScrollView>
          {podcasts.map((podcast) => <PodcastTile podcast={podcast} key={podcast.trackId} />)}
        </ScrollView>
      </Box>
    </SafeAreaView>
  )
}