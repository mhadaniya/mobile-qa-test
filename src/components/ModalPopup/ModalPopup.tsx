import React, { ReactElement } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { normalize } from '@utils/normalize'
import { Modal, Text } from 'react-native'

import { useModalController } from './Modal.controller'
import {
  Button,
  Container,
  ContainerButton,
  TextButton,
  Content,
  ContainerText
} from './ModalPopup.style'

export const ModalPopup = (): ReactElement => {
  const { hasError, buttonText, error, title, closeModal } = useModalController()

  if (hasError) {
    return (
      <Modal visible={true} transparent={true}>
        <Container>
          <Content>
            <MaterialCommunityIcons
              name={'close-circle-outline'}
              color={'#CD3D14'}
              size={normalize(35)}
            />
            <ContainerText>
              <Text>{title}</Text>
              <Text>{error}</Text>
            </ContainerText>
            <ContainerButton>
              <Button
                onPress={() =>
                  closeModal()
              }
              >
                <TextButton>{buttonText}</TextButton>
              </Button>
            </ContainerButton>
          </Content>
        </Container>
      </Modal>
    )
  }
  return (null as unknown) as ReactElement
}
