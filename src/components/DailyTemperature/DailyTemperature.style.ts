import { normalize } from '@utils/normalize'
import styled from 'styled-components/native'

export const Container = styled.View`
  border-radius: ${({ theme }) => theme.SPACING.MD}px;
  align-items: center;
`
interface IContent {
  color: boolean
}

export const Content = styled.View<IContent>`
  background-color: ${({ color }) =>
    color ? 'rgba(000, 000, 000, 0.2)' : 'transparent'};
  height: 155px;
  width: ${normalize(65)}px;
  border-radius: ${({ theme }) => theme.SPACING.MD}px;
  margin-left:  ${({ theme }) => theme.SPACING.M}px;
  align-items: center;
  justify-content: space-around;
  border-color: ${({ color }) =>
    color ? 'rgba(80, 150, 255, 0.8)' : 'transparent'};
  border-width: ${({ color }) => (color ? 1 : 0)}px;
`

export const TextTime = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const TodayText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const MonthText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const TextDate = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const ContainerTitleCard = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-horizontal: ${({ theme }) => theme.SPACING.MD}px;
  margin-bottom: ${({ theme }) => theme.SPACING.M}px;
`
