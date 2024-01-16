import * as React from 'react'

import { ContainerProps } from './Card.props'
import { Container } from './Card.styles'

export default function Card({
  children,
  paddingVertical
}: ContainerProps): React.ReactElement {
  return <Container paddingVertical={paddingVertical}>{children}</Container>
}
