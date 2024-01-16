import * as React from 'react'

import { Icon } from '@assets/icons/icon'

import { Container } from './Header.styles'
import PickerLocation from '../Picker/PickerLocation'

export default function Header ({ onOpen }: any): React.ReactElement {
  return (
    <Container testID="header">
        <PickerLocation onOpen={onOpen}/>
        <Icon icon="bell" width='27'/>
    </Container>
  )
}
