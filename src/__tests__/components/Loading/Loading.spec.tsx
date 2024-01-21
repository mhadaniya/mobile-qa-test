import React from 'react'

import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { Default as LoadingRequestStory } from '../../../components/Loading/LoadingRequest.stories'
import theme from '../../../theme'

describe('LoadingRequest Component', () => {
  it('must have a Container with the correct testID', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <LoadingRequestStory />
      </ThemeProvider>
    )

    expect(getByTestId('loading')).toBeTruthy()
  })
})
