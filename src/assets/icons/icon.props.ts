import { ImageStyle, StyleProp, ViewStyle } from 'react-native'

import { IconTypes } from '.'

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */

  containerStyle?: StyleProp<ViewStyle>

  /**
   * The name of the icon
   */

  icon?: IconTypes
  /**
   * Width of the icon
   */

  width?: string

  height?: string

  color?: string

  fill?: string
}
