import * as React from 'react'

import { render } from '@testing-library/react-native'
import moment from 'moment'
import { ThemeProvider } from 'styled-components/native'

import { Default as DailyTemperatureStory } from '../../../components/DailyTemperature/DailyTemperature.stories'
import theme from '../../../theme'

jest.mock(
  '../../../components/DailyTemperature/DailyTemperature.controller',
  () => ({
    useDailyTemperature: () => ({
      setIcons: jest.fn((text: string) => {
        const lowerText = text.toLowerCase()
        if (lowerText.includes('chuva')) {
          return <mock-icon testID="bigRainDrop" />
        } else if (lowerText.includes('clear_day')) {
          return <mock-icon testID="sun" />
        } else {
          return <mock-icon testID="moon" />
        }
      }),

      compareDate: jest.fn(() => 'red'),
      forecast: [
        { date: '2021-01-01', max: 25, description: 'chuva' },
        { date: '2021-01-02', max: 27, description: 'clear_day' },
        { date: '2021-01-03', max: 22, description: 'noite' }
      ]
    })
  })
)

describe('DailyTemperature component', () => {
  it('must have a Container with the correct testID', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory onOpen={() => {}} />
      </ThemeProvider>
    )

    expect(getByTestId('dailyTemperature')).toBeTruthy()
  })

  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory onOpen={() => {}} />
      </ThemeProvider>
    )

    expect(getByText('Today')).toBeTruthy()
  })

  it('should display current data correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory />
      </ThemeProvider>
    )

    const currentDate = moment().format('MMMM, DD')
    expect(getByText(currentDate)).toBeTruthy()
  })

  it('validates FlatList attributes', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory />
      </ThemeProvider>
    )

    const flatList = getByTestId('flatList')

    expect(flatList.props.showsHorizontalScrollIndicator).toBeFalsy()

    expect(flatList.props.horizontal).toBeTruthy()

    expect(flatList.props.keyExtractor({ date: '2021-01-01' })).toBe(
      '2021-01-01'
    )
  })

  it('validates Content color in FlatList', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory />
      </ThemeProvider>
    )

    const contents = getAllByTestId('contentFlatList')
    contents.forEach((content: any) => {
      expect(content.props.color).toBe('red')
    })
  })

  it('validates that the bigRainDrop icon is being rendered', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory />
      </ThemeProvider>
    )

    expect(getByTestId('bigRainDrop')).toBeTruthy()
  })

  it('validates that the sun icon is being rendered', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory />
      </ThemeProvider>
    )

    expect(getByTestId('sun')).toBeTruthy()
  })

  it('validates that the moon icon is being rendered', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory />
      </ThemeProvider>
    )

    expect(getByTestId('moon')).toBeTruthy()
  })
})
