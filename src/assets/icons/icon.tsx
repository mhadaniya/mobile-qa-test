import * as React from 'react'

import { View, ImageStyle } from 'react-native'

import { Icons } from '.'
import { IconProps } from './icon.props'
import { normalize } from '../../utils/normalize'

const ROOT: ImageStyle = {
  resizeMode: 'contain'
}

export function Icon (props: IconProps): React.ReactElement {
  const { style: styleOverride, icon, containerStyle, width, color, fill } = props

  const SvgIcon = Icons[icon as keyof typeof Icons]

  const size = normalize(Number(width))

  return (
    <View style={containerStyle}>
       <SvgIcon style={[ROOT, styleOverride]} width={size || normalize(15)} height={size || normalize(15)} stroke={color} fill={fill}/>
    </View>
  )
}
