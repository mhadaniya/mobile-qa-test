import { normalize } from '@utils/normalize'
import styled from 'styled-components/native'

interface IProps {
  paddingVertical?: number
}

export const Container = styled.View<IProps>`
  background-color: rgba(0, 16, 38, 0.2);
  width: 100%;
  border-radius: ${({ theme }) => theme.SPACING.MD}px;
  margin-bottom: ${({ theme }) => theme.SPACING.MD}px;
  padding-vertical: ${(props) =>
  props.paddingVertical ? normalize(props.paddingVertical) : normalize(0)}px;
`
