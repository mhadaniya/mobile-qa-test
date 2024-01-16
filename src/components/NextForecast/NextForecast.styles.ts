import styled from 'styled-components/native'

import { normalize } from '../../utils/normalize'

export const Container = styled.View`
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG}px;
`
export const Content = styled.View`
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG}px;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.SPACING.PM}px;
  height: ${normalize(50)}px;
  padding-horizontal: ${normalize(20)}px;
`

export const TextDay = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD_ALEGREYASANS};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 35%;
`
export const NextForecastText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const TextTemperatureMax = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM_ALEGREYASANS};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
export const TextTemperatureMin = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM_ALEGREYASANS};
  color: ${({ theme }) => theme.COLORS.GREY};
`

export const ContainerTextTemperature = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: ${({ theme }) => theme.SPACING.PM}px;
`

export const TextCMax = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.P}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const TextCMin = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.P}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD_SF};
  color: ${({ theme }) => theme.COLORS.GREY};
`

export const ContentMaxMinTemp = styled.View`
  flex-direction: row;
`

export const TitleNewForecast = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-horizontal:${({ theme }) => theme.SPACING.MD}px;
`
export const ContainerIcon = styled.View`
  width: 33%;
  justify-content: center;
  align-items: center;
`
