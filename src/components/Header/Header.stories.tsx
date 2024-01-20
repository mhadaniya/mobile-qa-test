import * as React from 'react'

import { Meta } from '@storybook/react-native'

import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header
} as Meta

const Template = (args: any): JSX.Element => (
  <Header {...args}/>
)

export const Default = Template.bind({})
