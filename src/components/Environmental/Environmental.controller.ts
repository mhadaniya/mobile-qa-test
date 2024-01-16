import useTimeAndTemperature from '@store/timeAndTemperature/timeAndTemperature'

import { IData } from './Environmental.props'

export const useEnvironmentalController = (): IData => {
  const { data } = useTimeAndTemperature()
  return {
    data
  }
}
