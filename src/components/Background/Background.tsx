import React from 'react'

import { ScrollView } from 'react-native'

import { useBackgroundController } from './Background.controller'
import { ContainerProps } from './Background.props'
import { Animation, Container, ContainerAnimation, SafeAreaView } from './Background.styles'
import theme from '../../theme'

export default function Background({
  children
}: ContainerProps): React.ReactElement {
  const { animation, condition } = useBackgroundController()
  return (
    <Container colors={theme.COLORS.CONDITION} testID='background'>
      <SafeAreaView >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerAnimation >
            {condition !== 'rain' ? null : <Animation
            autoPlay
            ref={animation}
            source={require('../Animations/animation.json')}
          />}
          </ContainerAnimation>
          {children}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}
