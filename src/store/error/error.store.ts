import { create } from 'zustand'

import { ErrorStoreProps } from './error.props'

const initialState = {
  hasError: false,
  error: '',
  title: '',
  buttonText: ''
}

const useErrorStore = create<ErrorStoreProps>((set) => ({
  ...initialState,

  showErrorMessage: (title: string, error: string, buttonText: string) => {
    set({ hasError: true, title, error, buttonText })
  },

  closePopup: () => {
    set({ hasError: false, error: '' })
  }
}))

export default useErrorStore
