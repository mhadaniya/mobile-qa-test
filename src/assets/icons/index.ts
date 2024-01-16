import cloud from './dailyTemperatura/cloud.svg'
import moon from './dailyTemperatura/moon.svg'
import sunCloud from './dailyTemperatura/sunCloud.svg'
import humidity from './environmental/humidity.svg'
import temperature from './environmental/temperature.svg'
import wind from './environmental/wind.svg'
import bell from './headerIcons/bell.svg'
import location from './headerIcons/location.svg'
import select from './headerIcons/select.svg'
import bigRainDrop from './nextForecast/bigRainDrop.svg'
import calendar from './nextForecast/calendar.svg'
import cloudZap from './nextForecast/cloudZap.svg'
import sun_rain from './sun-rain.svg'
import sun from './sun.svg'
export const Icons = {
  bell,
  sun,
  sun_rain,
  humidity,
  temperature,
  wind,
  select,
  location,
  calendar,
  cloudZap,
  bigRainDrop,
  cloud,
  sunCloud,
  moon
}

export type IconTypes = keyof typeof Icons
