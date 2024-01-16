import useErrorStore from '@store/error/error.store'

import { showMessageError } from '../../helpers/showMessage'

jest.mock('@store/error/error.store', () => ({
  __esModule: true,
  default: {
    ...jest.requireActual('@store/error/error.store').default,
    useErrorStore: () => ({
      hasError: false,
      error: '',
      title: '',
      buttonText: '',
      showErrorMessage: jest.fn(),
      closePopup: jest.fn()
    })
  }
}))

describe('showMessageError', () => {
  it('should call showErrorMessage with correct parameters', () => {
    const mockShowErrorMessage = jest.fn()
    useErrorStore.getState().showErrorMessage = mockShowErrorMessage

    const title = 'Test error title'
    const error = 'Test error message'
    const buttonText = 'Ok'

    showMessageError(title, error, buttonText)

    expect(mockShowErrorMessage).toHaveBeenCalledWith(title, error, buttonText)
  })
})
