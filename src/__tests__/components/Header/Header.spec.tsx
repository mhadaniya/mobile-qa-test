import React, { ReactElement } from 'react'

import { render, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { Default as HeaderStory } from '../../../components/Header/Header.stories'
import theme from '../../../theme'

interface IIcon {
  icon: string
  width: string
}

jest.mock('@assets/icons/icon', () => {
  return {
    Icon: ({ icon, width }: IIcon): ReactElement => {
      return <mock-icon testID="mock-icon" icon={icon} width={width} />
    }
  }
})

describe('Header', () => {
  test('must have a Container with the correct testID', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <HeaderStory onOpen={() => {}} />
      </ThemeProvider>
    )

    expect(getByTestId('header')).toBeTruthy()
  })

  test('must contain an icon with icon=bell and width=27', () => {
    const { queryAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <HeaderStory onOpen={() => {}} />
      </ThemeProvider>
    )

    const allIcons = queryAllByTestId('mock-icon')
    const bellIcon = allIcons.find(
      (icon) => icon.props.icon === 'bell' && icon.props.width === '27'
    )
    expect(bellIcon).toBeTruthy()
  })

  test('must render the PickerLocation with the onOpen prop', () => {
    const onOpenMock = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <HeaderStory onOpen={onOpenMock} />
      </ThemeProvider>
    )

    expect(getByTestId('container')).toBeTruthy()
  })

  test('must call onOpen when the PickerLocation is interacted with', () => {
    const onOpenMock = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <HeaderStory onOpen={onOpenMock} />
      </ThemeProvider>
    )

    fireEvent.press(getByTestId('container'))
    expect(onOpenMock).toHaveBeenCalled()
  })
})
