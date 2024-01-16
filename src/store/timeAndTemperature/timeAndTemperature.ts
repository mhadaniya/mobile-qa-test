import { triggerError } from '@helpers/triggerError'
import { getTimeAndTemperatureRequest } from '@services/request/timeAndTemperature/timeAndTemperature.request'
import { create } from 'zustand'

import { FailedRequest } from './timeAndTemperature.message'
import { useTimeAndTemperatureProps } from './timeAndTemperature.props'

const initialState = {
  isLoading: false,
  data: {
    temp: 0,
    city: '',
    wind_speedy: '',
    description: '',
    forecast: [],
    humidity: 0,
    currently: ''
  },
  forecast: [],
  date: '',
  condition: '',
  loading: true
}

const useTimeAndTemperature = create<useTimeAndTemperatureProps>(
  (set, get) => ({
    ...initialState,

    getTimeAndTemperature: async ({ coords, city }) => {
      const { makeAsync } = get()
      set({ isLoading: true })
      const handle = async (): Promise<void> => {
        const data = await getTimeAndTemperatureRequest({ coords, city })
        if (data) {
          set({
            data,
            forecast: data.forecast,
            date: data.date,
            condition: data.forecast[0].condition,
            isLoading: false
          })
        }
      }
      const onError = (): void => {
        triggerError(
          FailedRequest.title,
          FailedRequest.description,
          FailedRequest.buttonText
        )
      }
      void makeAsync({ handle, onError })
    },

    clearData () {
      set(initialState)
    },

    makeAsync: async ({ handle, onError, onFinally }) => {
      try {
        await handle()
      } catch (error) {
        if (onError != null) {
          return onError(error)
        }
      } finally {
        if (onFinally != null) onFinally()
        set({ isLoading: false })
      }
    }
  })
)
export default useTimeAndTemperature
