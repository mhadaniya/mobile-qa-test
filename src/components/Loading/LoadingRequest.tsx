import React, { ReactElement } from 'react'

import { useLoadingRequestController } from './LoadingRequest.controller'
import { Animation, Container } from './LoadingRequest.styles'

export const LoadingRequest = (): ReactElement => {
  const { animation } = useLoadingRequestController()

  return (
    <Container testID='loading'>
      <Animation
        autoPlay
        ref={animation}
        source={require('../Animations/loading.json')}
      />
    </Container>
  )
}
