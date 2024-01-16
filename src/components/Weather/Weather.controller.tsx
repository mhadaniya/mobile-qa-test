import React, { useEffect, useRef } from 'react'

import { Icon } from '@assets/icons/icon'
import useTimeAndTemperature from '@store/timeAndTemperature/timeAndTemperature'
import { normalize } from '@utils/normalize'

import { IUseWeatherController } from './Weather.props'
import { Animation, ContainerAnimation, ContentAnimationDay, ContentAnimationNight } from './Weather.styles'

export const useWeatherController = (): IUseWeatherController => {
  const { forecast, data } = useTimeAndTemperature()

  const animation = useRef(null)

  useEffect(() => {
    if (animation.current) {
      // @ts-expect-error
      animation?.current.play()
    }
  }, [])

  const verifyCondition = (condition: string): React.ReactElement => {
    if (data.currently === 'noite') {
      return (
        <ContainerAnimation >
          {condition !== 'rain' ? (
              <Animation
                autoPlay
                autoSize
                ref={animation}
                source={require('../Animations/moon.json')}
              />

          ) : (
            <ContentAnimationNight>
              <Animation
                autoPlay
                ref={animation}
                source={require('../Animations/moon.json')}
              />
              <Animation
                style={{ position: 'absolute', marginTop: normalize(10) }}
                autoPlay
                ref={animation}
                source={require('../Animations/cloud.json')}
              />
            </ContentAnimationNight>
          )}
        </ContainerAnimation>
      )
    }

    if (condition !== 'rain') {
      return (
        <ContentAnimationDay >
          <Animation
            autoPlay
            ref={animation}
            source={require('../Animations/sun.json')}
          />
          <Icon icon="sun" width="200" />
        </ContentAnimationDay>
      )
    } else {
      return <Icon icon="sun_rain" width="200" />
    }
  }

  return {
    verifyCondition,
    forecast
  }
}
