import * as React from 'react'

import { render, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { Default as PickerLocationStory } from '../../../components/Picker/PickerLocation.stories'
import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => {
  return {
    Icon: ({ icon }: any) => {
      return <>{icon}</>
    }
  }
})

describe('PickerLocation component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <PickerLocationStory onOpen={() => {}} />
      </ThemeProvider>
    )

    expect(getByText('Location')).toBeTruthy()
  })

  it('calls onOpen prop when container is pressed', () => {
    const onOpen = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PickerLocationStory onOpen={onOpen} />
      </ThemeProvider>
    )

    fireEvent.press(getByTestId('container'))

    expect(onOpen).toHaveBeenCalled()
  })
})
