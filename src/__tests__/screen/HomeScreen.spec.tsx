import React from 'react'

import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import HomeScreen from '../../screen/HomeScreen/HomeScreen'
import theme from '../../theme'

jest.mock('../../screen/HomeScreen/HomeScreen.controller', () => {
  const originalModule = jest.requireActual(
    '../../screen/HomeScreen/HomeScreen.controller'
  )
  return {
    __esModule: true,
    default: originalModule.default,
    useHomeController: () => ({
      modalizeRef: { current: jest.fn() },
      onOpen: jest.fn(),
      data: {
        forecast: [
          {
            condition: 'cloud',
            date: '2021-03-01',
            max: 30,
            min: 20
          },
          {
            condition: 'cloud',
            date: '2021-03-01',
            max: 30,
            min: 20
          },
          {
            condition: 'cloud',
            date: '2021-03-01',
            max: 30,
            min: 20
          }
        ]
      }
    })
  }
})

jest.mock('@assets/icons/icon', () => {
  return {
    Icon: ({ icon }: any) => {
      return <>{icon}</>
    }
  }
})

describe('HomeScreen', () => {
  it('should render correctly with loading component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    )

    expect(getByTestId('header')).toBeDefined()
  })

  it('should render correctly with weather and forecast data', () => {
    const { getByTestId, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    )

    expect(getByTestId('background')).toBeDefined()
    expect(getByTestId('header')).toBeDefined()
    expect(queryByTestId('loading')).toBeNull()
    expect(getByTestId('weather')).toBeDefined()
    expect(getByTestId('environmental')).toBeDefined()
    expect(getByTestId('dailyTemperature')).toBeDefined()
    expect(getByTestId('nextForecast')).toBeDefined()
  })
})
