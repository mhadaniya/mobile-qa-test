import React, { ReactElement } from 'react'

import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { IIcon } from '../../../@types/types'
import { Default as NextForecastStory } from '../../../components/NextForecast/NextForecast.stories'
import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => {
  return {
    Icon: ({ icon, width }: IIcon): ReactElement => {
      return <mock-icon testID="mock-icon" icon={icon} width={width} />
    }
  }
})

jest.mock('../../../components/NextForecast/NextForecast.controller', () => ({
  useNextForecastController: jest.fn(() => ({
    setIcons: jest.fn(),
    convertDayOfWeek: jest.fn((day) => {
      switch (day) {
        case 'Seg':
          return 'Monday'
        case 'Ter':
          return 'Tuesday'
        case 'Qua':
          return 'Wednesday'
        case 'Qui':
          return 'Thursday'
        case 'Sex':
          return 'Friday'
        case 'Sáb':
          return 'Saturday'
        case 'Dom':
          return 'Sunday'
        default:
          return null
      }
    }),
    forecast: [
      { date: '2021-01-01', weekday: 'Dom', max: 30, min: 20 },
      { date: '2021-01-02', weekday: 'Seg', max: 28, min: 18 },
      { date: '2021-01-03', weekday: 'Ter', max: 28, min: 18 },
      { date: '2021-01-04', weekday: 'Qua', max: 25, min: 15 },
      { date: '2021-01-05', weekday: 'Qui', max: 26, min: 17 },
      { date: '2021-01-06', weekday: 'Sex', max: 29, min: 19 },
      { date: '2021-01-07', weekday: 'Sáb', max: 31, min: 21 }
    ]
  }))
}))

describe('NextForecast Component', () => {
  it('must have a Container with the correct testID', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NextForecastStory />
      </ThemeProvider>
    )

    expect(getByTestId('nextForecast')).toBeTruthy()
  })

  it('must contain an icon with icon=calendar and width=22', () => {
    const { queryAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <NextForecastStory />
      </ThemeProvider>
    )

    const allIcons = queryAllByTestId('mock-icon')
    const bellIcon = allIcons.find(
      (icon) => icon.props.icon === 'calendar' && icon.props.width === '22'
    )
    expect(bellIcon).toBeTruthy()
  })

  it('renders forecast data correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NextForecastStory />
      </ThemeProvider>
    )
    expect(getByText('Sunday')).toBeTruthy()
    expect(getByText('Monday')).toBeTruthy()
    expect(getByText('Tuesday')).toBeTruthy()
    expect(getByText('Wednesday')).toBeTruthy()
    expect(getByText('Thursday')).toBeTruthy()
    expect(getByText('Friday')).toBeTruthy()
    expect(getByText('Saturday')).toBeTruthy()
    expect(getByText('30')).toBeTruthy()
    expect(getByText('20')).toBeTruthy()
  })
})
