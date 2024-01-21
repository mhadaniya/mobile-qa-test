import * as React from 'react'

import { Meta } from '@storybook/react-native'

import { LoadingRequest } from './LoadingRequest'

export default {
  title: 'Components/LoadingRequest',
  component: LoadingRequest
} as Meta

const Template = (args: any): JSX.Element => <LoadingRequest {...args} />

export const Default = Template.bind({})
