export interface IUserDailyTemperature {
  setIcons: (text: string) => React.ReactElement
  compareDate: (itemDate: string) => boolean
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
