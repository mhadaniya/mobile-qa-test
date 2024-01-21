import React from 'react'

import { render, RenderResult, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { IIcon } from '../../../@types/types'
import { Default as HeaderStory } from '../../../components/Header/Header.stories'
import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => ({
  Icon: ({ icon, width }: IIcon) => (
    <mock-icon testID="mock-icon" icon={icon} width={width} />
  )
}))

describe('Header', () => {
  const renderHeader = (onOpen = jest.fn()): RenderResult =>
    render(
      <ThemeProvider theme={theme}>
        <HeaderStory onOpen={onOpen} />
      </ThemeProvider>
    )

  it('should have a Container with the correct testID', () => {
    const { getByTestId } = renderHeader()
    expect(getByTestId('header')).toBeTruthy()
  })

  it('should contain a bell icon with width 27', () => {
    const { queryAllByTestId } = renderHeader()
    const bellIcon = queryAllByTestId('mock-icon').find(
      (icon) => icon.props.icon === 'bell' && icon.props.width === '27'
    )
    expect(bellIcon).toBeTruthy()
  })

  it('should render the PickerLocation with the onOpen prop', () => {
    const onOpenMock = jest.fn()
    const { getByTestId } = renderHeader(onOpenMock)
    expect(getByTestId('container')).toBeTruthy()
  })

  it('should call onOpen when the PickerLocation is interacted with', () => {
    const onOpenMock = jest.fn()
    const { getByTestId } = renderHeader(onOpenMock)

    fireEvent.press(getByTestId('container'))
    expect(onOpenMock).toHaveBeenCalled()
  })
})
