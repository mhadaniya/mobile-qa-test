import { showMessageError } from './showMessage'

export const triggerError = (
  title: string,
  error: string,
  buttonText: string
): void => {
  showMessageError(title, error, buttonText)
}
