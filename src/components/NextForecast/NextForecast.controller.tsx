import React from 'react'

import { Icon } from '@assets/icons/icon'
import useTimeAndTemperature from '@store/timeAndTemperature/timeAndTemperature'

import { IUseNextForecastController } from './NextForecast.props'

export const useNextForecastController = (): IUseNextForecastController => {
  const { forecast, data } = useTimeAndTemperature()

  function convertDayOfWeek(day: string): string | null {
    switch (day) {
      case 'Seg':
        return 'Monday'
      case 'Ter':
        return 'Tuesday'
      case 'Qua':
        return 'Wednesday'
      case 'Qui':
        return 'Thursday'
      case 'Sex':
        return 'Friday'
      case 'Sáb':
        return 'Saturday'
      case 'Dom':
        return 'Sunday'
      default:
        return null
    }
  }

  const setIcons = (text: string): React.ReactElement => {
    if (data.currently === 'noite') {
      if (text.includes('Chuva')) {
        return <Icon icon="bigRainDrop" width="50" />
      } else {
        return <Icon icon="moon" width="30" />
      }
    } else {
      if (text.includes('Chuva')) {
        return <Icon icon="bigRainDrop" width="50" />
      }
      if (text.includes('clear_day')) {
        return <Icon icon="sun" width="50" />
      } else {
        return <Icon icon="sun" width="50" />
      }
    }
  }

  return {
    setIcons,
    convertDayOfWeek,
    forecast,
    data
  }
}
