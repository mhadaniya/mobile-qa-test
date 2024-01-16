
import { IUseModalController } from './ModalPopup.props'
import useErrorStore from '../../store/error/error.store'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export const useModalController = (): IUseModalController => {
  const { hasError, buttonText, error, title, closePopup } = useErrorStore()

  const { getTimeAndTemperature } = useTimeAndTemperature()

  const closeModal = (): void => {
    void getTimeAndTemperature({})
    closePopup()
  }

  return {
    closeModal,
    hasError,
    buttonText,
    error,
    title
  }
}
