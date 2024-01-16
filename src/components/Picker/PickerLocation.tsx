import * as React from 'react'

import { Icon } from '@assets/icons/icon'

import { IPickerLocation } from './PickerLocation.props'
import { Container, TextLocation } from './PickerLocation.styles'

export default function PickerLocation({ onOpen }: IPickerLocation): React.ReactElement {
  return (
    <Container onPress={() => onOpen()} testID='container'>
      <Icon icon="location" width="27" />
      <TextLocation>Location</TextLocation>
      <Icon icon="select" width="15" />
    </Container>
  )
}
