export interface IUseWeatherController {
  verifyCondition: (condition: string) => React.ReactElement
  forecast: IForecast[]
}

interface IForecast {
  date: string
  weekday: string
  max: number
  min: number
  description: string
  condition: string
}
