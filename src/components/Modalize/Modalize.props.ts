import { IHandles } from 'react-native-modalize/lib/options'

export interface IModalize {
  closeModalize: (city: string) => void
}

export interface ModalizeFilterProps {
  modalizeRef: React.RefObject<IHandles>
}
