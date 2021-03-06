import React from 'react'
import { Box, UtilityThemeProvider } from 'react-native-design-utility'

import { theme } from './src/constants/theme'

import MainNavigation from './src/navigation/MainNaigation'

export default () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <Box f={1}>
        <MainNavigation />
      </Box>
    </UtilityThemeProvider>
  )
}