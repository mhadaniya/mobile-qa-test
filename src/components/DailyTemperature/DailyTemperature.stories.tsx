import * as React from 'react'

import { Meta } from '@storybook/react-native'

import DailyTemperature from './DailyTemperature'

export default {
  title: 'Components/DailyTemperature',
  component: DailyTemperature
} as Meta

const Template = (args: any): JSX.Element => (
  <DailyTemperature {...args}/>
)

export const Default = Template.bind({})
