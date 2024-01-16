import { useEffect, useRef } from 'react'

import useTimeAndTemperature from '@store/timeAndTemperature/timeAndTemperature'

import { IUseBackgroundController } from './Background.props'
import theme from '../../theme'

export const useBackgroundController = (): IUseBackgroundController => {
  const { condition, data } = useTimeAndTemperature()
  const animation = useRef(null)

  useEffect(() => {
    if (data.currently !== 'noite') {
      if (condition !== 'rain') {
        theme.COLORS.CONDITION = ['#29B2DD', '#33AADD', '#2DC8EA']
      } else {
        theme.COLORS.CONDITION = theme.COLORS.DAY_RAIN
      }
    } else {
      if (condition === 'rain') {
        theme.COLORS.CONDITION = theme.COLORS.NIGHT_RAIN
      } else {
        theme.COLORS.CONDITION = theme.COLORS.NIGHT_CLEAN
      }
    }

    if (animation.current) {
      // @ts-expect-error
      animation?.current.play()
    }
  }, [condition])

  return {
    animation,
    condition
  }
}
