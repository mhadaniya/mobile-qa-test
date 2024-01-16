import { normalize } from '@utils/normalize'
import AnimatedLottieView from 'lottie-react-native'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { height } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 100%;
  margin-top: ${height * 0.25}px;
`

export const Animation = styled(AnimatedLottieView)`
  width: ${normalize(200)}px;
  height: ${normalize(200)}px;
`
