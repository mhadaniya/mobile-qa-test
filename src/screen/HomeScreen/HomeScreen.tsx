import React, { ReactElement } from 'react'

import Background from '@components/Background/Background'
import Card from '@components/Card/Card'
import DailyTemperature from '@components/DailyTemperature/DailyTemperature'
import Environmental from '@components/Environmental/Environmental'
import Header from '@components/Header/Header'
import { LoadingRequest } from '@components/Loading/LoadingRequest'
import { ModalizeLocation } from '@components/Modalize/Modalize'
import NextForecast from '@components/NextForecast/NextForecast'

import { useHomeController } from './HomeScreen.controller'
import Weather from '../../components/Weather/Weather'

export default function HomeScreen(): ReactElement {
  const { modalizeRef, onOpen, data } = useHomeController()
  return (
    <>
      <Background >
        <Header onOpen={onOpen} />

        { data && data.forecast.length < 1 ? (
          <LoadingRequest />
        ) : (
          <>
            <Weather />
            <Card>
              <Environmental />
            </Card>
            <Card paddingVertical={12}>
              <DailyTemperature />
            </Card>
            <Card paddingVertical={12}>
              <NextForecast />
            </Card>
          </>
        )}
      </Background>
      <ModalizeLocation modalizeRef={modalizeRef} />
    </>
  )
}
