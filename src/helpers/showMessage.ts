import useErrorStore from '@store/error/error.store'

export const showMessageError = (
  title: string,
  error: string,
  buttonText: string
): void => {
  useErrorStore.getState().showErrorMessage(title, error, buttonText)
}
