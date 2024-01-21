import React from 'react'

import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { Default as LoadingRequestStory } from '../../../components/Loading/LoadingRequest.stories'
import theme from '../../../theme'

jest.mock('../../../components/Loading/LoadingRequest.controller', () => {
  return {
    useLoadingRequestController: jest.fn(() => ({
      animation: {
        current: { play: jest.fn() }
      }
    }))
  }
})

describe('LoadingRequest Component', () => {
  it('Checks if Animations autoPlay property is true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <LoadingRequestStory />
      </ThemeProvider>
    )

    const container = getByTestId('loading')
    expect(container).toBeTruthy()

    const animationComponent = container.children[0]
    expect(animationComponent.props.autoPlay).toBeTruthy()
  })
})
