import * as React from 'react'

import { Icon } from '@assets/icons/icon'

import { useEnvironmentalController } from './Environmental.controller'
import { Box, Container, Text } from './Environmental.styles'

export default function Environmental(): React.ReactElement {
  const { data } = useEnvironmentalController()
  return (
    <Container testID='environmental'>
      <Box>
        <Icon icon="humidity" width="24" />
        <Text>{data.humidity}%</Text>
      </Box>
      <Box>
        <Icon icon="temperature" width="20" />
        <Text>{data.temp}%</Text>
      </Box>
      <Box>
        <Icon icon="wind" width="20" />
        <Text>{data.wind_speedy}</Text>
      </Box>
    </Container>
  )
}
