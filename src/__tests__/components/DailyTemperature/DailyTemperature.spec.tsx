import * as React from 'react'

import { render, RenderResult } from '@testing-library/react-native'
import moment from 'moment'
import { ThemeProvider } from 'styled-components/native'

import { Default as DailyTemperatureStory } from '../../../components/DailyTemperature/DailyTemperature.stories'
import theme from '../../../theme'

jest.mock(
  '../../../components/DailyTemperature/DailyTemperature.controller',
  () => ({
    useDailyTemperature: () => ({
      setIcons: jest.fn((text) => {
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
  const renderDailyTemperature = (): RenderResult =>
    render(
      <ThemeProvider theme={theme}>
        <DailyTemperatureStory />
      </ThemeProvider>
    )

  it('should have a Container with the correct testID', () => {
    const { getByTestId } = renderDailyTemperature()
    expect(getByTestId('dailyTemperature')).toBeTruthy()
  })

  it('should render correctly', () => {
    const { getByText } = renderDailyTemperature()
    expect(getByText('Today')).toBeTruthy()
  })

  it('should display current date correctly', () => {
    const { getByText } = renderDailyTemperature()
    const currentDate = moment().format('MMMM, DD')
    expect(getByText(currentDate)).toBeTruthy()
  })

  it('should validate FlatList attributes', () => {
    const { getByTestId } = renderDailyTemperature()
    const flatList = getByTestId('flatList')
    expect(flatList.props.showsHorizontalScrollIndicator).toBeFalsy()
    expect(flatList.props.horizontal).toBeTruthy()
    expect(flatList.props.keyExtractor({ date: '2021-01-01' })).toBe(
      '2021-01-01'
    )
  })

  it('should validate Content color in FlatList', () => {
    const { getAllByTestId } = renderDailyTemperature()
    const contents = getAllByTestId('contentFlatList')
    contents.forEach((content) => {
      expect(content.props.color).toBe('red')
    })
  })

  it('should validate rendering of bigRainDrop icon', () => {
    const { getByTestId } = renderDailyTemperature()
    expect(getByTestId('bigRainDrop')).toBeTruthy()
  })

  it('should validate rendering of sun icon', () => {
    const { getByTestId } = renderDailyTemperature()
    expect(getByTestId('sun')).toBeTruthy()
  })

  it('should validate rendering of moon icon', () => {
    const { getByTestId } = renderDailyTemperature()
    expect(getByTestId('moon')).toBeTruthy()
  })
})
