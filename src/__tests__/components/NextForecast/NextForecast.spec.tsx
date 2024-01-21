import React from 'react'

import { render, RenderResult } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { IIcon } from '../../../@types/types'
import { Default as NextForecastStory } from '../../../components/NextForecast/NextForecast.stories'
import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => ({
  Icon: ({ icon, width }: IIcon) => (
    <mock-icon testID="mock-icon" icon={icon} width={width} />
  )
}))

jest.mock('../../../components/NextForecast/NextForecast.controller', () => ({
  useNextForecastController: jest.fn(() => ({
    setIcons: jest.fn(),
    convertDayOfWeek: (day) =>
      ({
        Seg: 'Monday',
        Ter: 'Tuesday',
        Qua: 'Wednesday',
        Qui: 'Thursday',
        Sex: 'Friday',
        Sáb: 'Saturday',
        Dom: 'Sunday'
      }[day]),
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
  const renderComponent = (): RenderResult =>
    render(
      <ThemeProvider theme={theme}>
        <NextForecastStory />
      </ThemeProvider>
    )

  it('should have a Container with the correct testID', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('nextForecast')).toBeTruthy()
  })

  it('should contain an icon with icon=calendar and width=22', () => {
    const { queryAllByTestId } = renderComponent()
    const calendarIcon = queryAllByTestId('mock-icon').find(
      (icon) => icon.props.icon === 'calendar' && icon.props.width === '22'
    )
    expect(calendarIcon).toBeTruthy()
  })

  it('should render forecast data correctly', () => {
    const { getByText } = renderComponent();
    [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      '30',
      '20'
    ].forEach((text) => {
      expect(getByText(text)).toBeTruthy()
    })
  })
})
