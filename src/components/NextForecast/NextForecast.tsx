import * as React from 'react'

import { Icon } from '@assets/icons/icon'

import { useNextForecastController } from './NextForecast.controller'
import {
  Container,
  ContainerIcon,
  ContainerTextTemperature,
  Content,
  ContentMaxMinTemp,
  NextForecastText,
  TextCMax,
  TextCMin,
  TextDay,
  TextTemperatureMax,
  TextTemperatureMin,
  TitleNewForecast
} from './NextForecast.styles'

export default function NextForecast(): React.ReactElement {
  const {
    setIcons,
    convertDayOfWeek,
    forecast
  } = useNextForecastController()

  return (
    <Container testID='nextForecast'>
      <TitleNewForecast >
        <NextForecastText>Next Forecast</NextForecastText>
        <Icon icon="calendar" width="22" />
      </TitleNewForecast>
      {forecast.map((item) => (
        <Content key={item.date}>
          <TextDay>{convertDayOfWeek(item.weekday)}</TextDay>
          <ContainerIcon >
            {setIcons(item.description)}
          </ContainerIcon>

          <ContentMaxMinTemp>
            <ContainerTextTemperature>
              <TextTemperatureMax>{item.max}</TextTemperatureMax>
              <TextCMax>ºC</TextCMax>
            </ContainerTextTemperature>

            <ContainerTextTemperature>
              <TextTemperatureMin>{item.min}</TextTemperatureMin>
              <TextCMin>ºC</TextCMin>
            </ContainerTextTemperature>
          </ContentMaxMinTemp>
        </Content>
      ))}
    </Container>
  )
}
