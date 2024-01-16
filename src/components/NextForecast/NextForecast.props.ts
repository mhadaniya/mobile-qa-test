export interface IUseNextForecastController {
  setIcons: (text: string) => React.ReactElement
  convertDayOfWeek: (day: string) => string | null
  forecast: IForecast[]
  data: IData
}

interface IData {
  temp: number
  city: string
  wind_speedy: string
  description: string
  forecast: IForecast[]
  humidity: number
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
