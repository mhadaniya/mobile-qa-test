export interface IData {
  data: {
    temp: number
    city: string
    wind_speedy: string
    description: string
    forecast: IForecast[]
    humidity: number
    date?: string
  }
}

interface IForecast {
  date: string
  weekday: string
  max: number
  min: number
  description: string
  condition: string
}
