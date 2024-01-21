import * as React from 'react'

import { render, RenderResult, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { IIcon } from '../../../@types/types'
import { Default as PickerLocationStory } from '../../../components/Picker/PickerLocation.stories'
import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => ({
  Icon: ({ icon, width }: IIcon) => (
    <mock-icon testID="mock-icon" icon={icon} width={width} />
  )
}))

describe('PickerLocation component', () => {
  const renderPickerLocation = (onOpen = jest.fn()): RenderResult =>
    render(
      <ThemeProvider theme={theme}>
        <PickerLocationStory onOpen={onOpen} />
      </ThemeProvider>
    )

  it('should have a Container with the correct testID', () => {
    const { getByTestId } = renderPickerLocation()
    expect(getByTestId('container')).toBeTruthy()
  })

  it('should render correctly', () => {
    const { getByText } = renderPickerLocation()
    expect(getByText('Location')).toBeTruthy()
  })

  it('should contain location and select icons', () => {
    const { queryAllByTestId } = renderPickerLocation()
    const locationIcon = queryAllByTestId('mock-icon').find(
      (icon) => icon.props.icon === 'location' && icon.props.width === '27'
    )
    const selectIcon = queryAllByTestId('mock-icon').find(
      (icon) => icon.props.icon === 'select' && icon.props.width === '15'
    )

    expect(locationIcon).toBeTruthy()
    expect(selectIcon).toBeTruthy()
  })

  it('should call onOpen prop when container is pressed', () => {
    const onOpenMock = jest.fn()
    const { getByTestId } = renderPickerLocation(onOpenMock)

    fireEvent.press(getByTestId('container'))
    expect(onOpenMock).toHaveBeenCalled()
  })
})
