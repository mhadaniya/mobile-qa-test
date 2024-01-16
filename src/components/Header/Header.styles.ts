import { normalize } from '@utils/normalize'
import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`  
    height:  ${normalize(40)}px;
    width: 100%;
    border-radius: ${({ theme }) => theme.SPACING.MD}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:   ${Platform.OS === 'ios' ? 0 : normalize(30)}px;
`
