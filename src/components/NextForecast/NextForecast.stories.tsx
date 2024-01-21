import * as React from 'react'

import { Meta } from '@storybook/react-native'

import NextForecast from './NextForecast'

export default {
  title: 'Components/NextForecast',
  component: NextForecast
} as Meta

const Template = (args: any): JSX.Element => <NextForecast {...args} />

export const Default = Template.bind({})
