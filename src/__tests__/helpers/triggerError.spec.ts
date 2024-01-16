import { showMessageError } from '@helpers/showMessage'
import { triggerError } from '@helpers/triggerError'

jest.mock('@helpers/showMessage')

describe('triggerError function', () => {
  const title = 'Error'
  const error = 'Something went wrong!'
  const buttonText = 'OK'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('calls showMessageError function with the correct arguments', () => {
    triggerError(title, error, buttonText)

    expect(showMessageError).toHaveBeenCalledTimes(1)
    expect(showMessageError).toHaveBeenCalledWith(title, error, buttonText)
  })
})
