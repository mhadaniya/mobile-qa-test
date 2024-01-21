import * as React from 'react'

import { render, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { IIcon } from '../../../@types/types'
import { Default as PickerLocationStory } from '../../../components/Picker/PickerLocation.stories'
import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => {
  return {
    Icon: ({ icon, width }: IIcon): React.ReactElement => {
      return <mock-icon testID='mock-icon' icon={icon} width={width} />
    }
  }
})

describe('PickerLocation component', () => {
  it('must have a Container with the correct testID', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PickerLocationStory onOpen={() => {}} />
      </ThemeProvider>
    )

    expect(getByTestId('container')).toBeTruthy()
  })

  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <PickerLocationStory onOpen={() => {}} />
      </ThemeProvider>
    )

    expect(getByText('Location')).toBeTruthy()
  })

  it('must contain an icon location', () => {
    const { queryAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <PickerLocationStory onOpen={() => {}} />
      </ThemeProvider>
    )

    const allIcons = queryAllByTestId('mock-icon')
    const locationIcon = allIcons.find(
      (icon) => icon.props.icon === 'location' && icon.props.width === '27'
    )
    const selectIcon = allIcons.find(
      (icon) => icon.props.icon === 'select' && icon.props.width === '15'
    )
    expect(locationIcon).toBeTruthy()
    expect(selectIcon).toBeTruthy()
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
