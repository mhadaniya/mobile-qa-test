import { normalize } from '@utils/normalize'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${normalize(47)}px;
  flex-direction: row;
  justify-content: space-around;
  border-radius: ${({ theme }) => theme.SPACING.MD}px;
  align-items: center;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-left: ${({ theme }) => theme.SPACING.P}px;
`

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
