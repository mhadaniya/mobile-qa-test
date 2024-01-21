import * as React from 'react'

import { Meta } from '@storybook/react-native'

import PickerLocation from './PickerLocation'

export default {
  title: 'Components/PickerLocation',
  component: PickerLocation
} as Meta

const Template = (args: any): JSX.Element => (
  <PickerLocation {...args}/>
)

export const Default = Template.bind({})
