import React, { ReactElement } from 'react'

import { Modalize } from 'react-native-modalize'

import { Cities } from './city'
import { useModalize } from './Modalize.controller'
import { ModalizeFilterProps } from './Modalize.props'
import {
  ButtonSelectCity,
  Container,
  TextSelectCity,
  style
} from './Modalize.styles'

export const ModalizeLocation = ({
  modalizeRef
}: ModalizeFilterProps): ReactElement => {
  const { closeModalize } = useModalize(modalizeRef)

  return (
    <Modalize
      ref={modalizeRef}
      modalStyle={style.modalize}
      modalHeight={300}
      scrollViewProps={{
        scrollEnabled: true,
        showsVerticalScrollIndicator: false
      }}
      avoidKeyboardLikeIOS
      keyboardAvoidingOffset={-500}
    >
      <Container>
        {Cities.map((item, index) => (
          <ButtonSelectCity
            key={index}
            onPress={async () => closeModalize(item)}
          >
            <TextSelectCity>{item}</TextSelectCity>
          </ButtonSelectCity>
        ))}
      </Container>
    </Modalize>
  )
}
