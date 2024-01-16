import * as React from 'react'

import { useWeatherController } from './Weather.controller'
import {
  Container,
  TemperatureText,
  PrecipitationsText,
  MaxAndMinText
} from './Weather.styles'

export default function Weather(): React.ReactElement {
  const { forecast, verifyCondition } = useWeatherController()

  return (
    <Container testID="weather">
     {verifyCondition(forecast[0]?.condition)}
      <TemperatureText>{forecast[0]?.max}º</TemperatureText>
      <PrecipitationsText>Precipitations</PrecipitationsText>
      <MaxAndMinText>
        Max.: {forecast[0]?.max}º  Min.: {forecast[0]?.min}º
      </MaxAndMinText>
    </Container>
  )
}
