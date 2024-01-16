import { SvgProps } from 'react-native-svg'

export interface ErrorStoreProps {
  hasError: boolean
  error: string
  title: string
  buttonText: string
  showErrorMessage: (title: string, error: string, buttonText: string) => void
  closePopup: () => void
}

interface MessageObjectType {
  icon: React.FC<SvgProps>
}

export interface MessageTypes {
  error: MessageObjectType
  success: MessageObjectType
  warning: MessageObjectType
}
