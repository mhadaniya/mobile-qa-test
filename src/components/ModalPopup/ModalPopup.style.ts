import styled from 'styled-components/native'

import { normalize } from '../../utils/normalize'

export const ActivityIndicator = styled.ActivityIndicator``

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: transparent;
  flex: 1; 
`
export const ContainerButton = styled.View`
  width: 100%; 
  justify-content: center;
  align-items: center; 
`

export const TextButton = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${normalize(12)}px;
  color: #fff;
  text-align: center;
`
interface IButtonProps {
  color?: string
}

export const Button = styled.TouchableOpacity<IButtonProps>`
  width: 70%;
  height: ${normalize(40)}px;
  background: ${({ theme }) => theme.COLORS.CONDITION[0]};
  border-radius: ${normalize(8)}px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  elevation: 5;
  justify-content: center; 
  align-items: center;
  flex-direction: row;
  padding-right: ${normalize(10)}px;
  padding-left: ${normalize(10)}px;
`

export const Content = styled.View`
  width: 80%;
  height: ${normalize(200)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG}px;
  align-items: center;
  justify-content:  space-around;
  padding: ${normalize(20)}px;
`
export const ContainerText = styled.View`
  align-items: center;
  justify-content: center; 
`
