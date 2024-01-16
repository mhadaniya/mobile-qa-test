export type useTimeAndTemperatureProps = {
  isLoading: boolean
  data: IData
  forecast: IForecast[]
  date: string
  condition: string
  clearData: () => void
  getTimeAndTemperature: ({ coords, city }: {
    coords?: ICoord
    city?: string
  }) => void
  makeAsync: <T>(props: {
    handle: () => Promise<T>
    onError?: (error: any) => void
    onFinally?: () => void
  }) => Promise<void>
}

export interface ICoord {
  lat: number
  lon: number
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
