import React from 'react'

import { render, RenderResult } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { Default as BackgroundStory } from '../../../components/Background/Background.stories'
import theme from '../../../theme'

jest.mock('../../../components/Background/Background.controller', () => {
  const originalModule = jest.requireActual(
    '../../../components/Background/Background.controller'
  )
  return {
    __esModule: true,
    default: originalModule.default,
    useBackgroundController: jest.fn(() => ({
      animation: { current: jest.fn() },
      condition: 'rain'
    }))
  }
})

describe('Background Component', () => {
  const renderBackground = (): RenderResult =>
    render(
      <ThemeProvider theme={theme}>
        <BackgroundStory />
      </ThemeProvider>
    )

  it('should have the correct colors prop', () => {
    const { getByTestId } = renderBackground()
    expect(getByTestId('background')).toBeTruthy()

    const isColorArray = Array.isArray(theme.COLORS.CONDITION)
    const isRainCondition = theme.COLORS.CONDITION === 'rain'

    if (!isRainCondition) {
      expect(isColorArray).toBe(true)
      expect(
        theme.COLORS.CONDITION.every((color) => typeof color === 'string')
      ).toBe(true)
    } else {
      expect(theme.COLORS.CONDITION).toEqual('rain')
    }
  })
})
