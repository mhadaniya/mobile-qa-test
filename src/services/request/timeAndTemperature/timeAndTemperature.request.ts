import { IData, ITimeAndTemperatureProps } from './timeAndTemperature.dto'
import { instance } from '../../api'

export const getTimeAndTemperatureRequest = async ({
  coords,
  city
}: ITimeAndTemperatureProps): Promise<IData> => {
  try {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`

    const data = await instance.get(
      `date=${formattedDate}&city_name=${city}&lat=${coords?.lat || ''}&lon=${coords?.lon || ''}&locale=pt`
    )
    return data.data.results
  } catch (error) {
    throw new Error('Erro desconhecido')
  }
}
