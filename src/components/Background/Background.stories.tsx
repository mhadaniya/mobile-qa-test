import * as React from 'react'

import { Meta } from '@storybook/react-native'

import Background from './Background'

export default {
  title: 'Components/Background',
  component: Background
} as Meta

const Template = (args: any): JSX.Element => <Background {...args} />

export const Default = Template.bind({})
