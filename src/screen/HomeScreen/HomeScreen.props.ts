import { IHandles } from 'react-native-modalize/lib/options'

export interface IUseHomeController {
  modalizeRef: React.RefObject<IHandles>
  onOpen: () => void
  data: IData
}

export interface IData {
  temp: number
  city: string
  wind_speedy: string
  description: string
  forecast: IForecast[]
  humidity: number
  date?: string

}

interface IForecast {
  date: string
  weekday: string
  max: number
  min: number
  description: string
  condition: string
}
