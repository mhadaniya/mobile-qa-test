import { ICoord } from '../../../store/timeAndTemperature/timeAndTemperature.props'

export interface ITimeAndTemperatureProps {
  coords?: ICoord
  city?: string
}

export interface IData {
  temp: number
  city: string
  wind_speedy: string
  description: string
  forecast: IForecast[]
  humidity: number
  date: string
  currently: string
}

interface IForecast {
  date: string
  weekday: string
  max: number
  min: number
  description: string
  condition: string
}
