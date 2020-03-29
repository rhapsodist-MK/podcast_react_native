import React from 'react'
import { Box, UtilityThemeProvider } from 'react-native-design-utility'

import { theme } from './src/constants/theme'

export default () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <Box bg="red" f={1}>

      </Box>
    </UtilityThemeProvider>
  )
}