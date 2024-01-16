import LottieView from 'lottie-react-native'
import styled from 'styled-components/native'

import { normalize } from '../../utils/normalize'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const TemperatureText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const PrecipitationsText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const MaxAndMinText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: ${({ theme }) => theme.SPACING.LM}px;
`

export const Animation = styled(LottieView)`
  width: 100%;
  height: 100%;
  flex: 1;
  position: absolute;
  top: ${normalize(-3)}px;
  left: ${normalize(-5)}px;
`
export const ContainerAnimation = styled.View`
  width: ${normalize(300)}px;
  height: ${normalize(300)}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${normalize(-50)}px;
`
export const ContentAnimationNight = styled.View`
  width: ${normalize(300)}px;
  height: ${normalize(300)}px;
  align-items: center;
  justify-content: center;
`
export const ContentAnimationDay = styled.View`
  width: ${normalize(200)}px;
  height: ${normalize(200)}px;
  align-items: center;
  justify-content: center;
`
