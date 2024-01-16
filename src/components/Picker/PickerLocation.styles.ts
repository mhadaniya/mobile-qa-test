import { normalize } from '@utils/normalize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  height: ${normalize(40)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const TextLocation = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-horizontal: ${({ theme }) => theme.SPACING.M}px;
`
