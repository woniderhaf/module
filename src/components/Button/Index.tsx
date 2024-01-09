import { View, Text, ViewStyle, Button as Btn, ButtonProps, Pressable, PressableProps, TouchableOpacityProps, TouchableOpacity, TextStyle } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { styles } from './button.styles'

interface Props extends TouchableOpacityProps {
  title: string;
  textStyle?: TextStyle
}
const Button: FC<Props> = (props) => {
  const { title, style, textStyle, ...buttonProps } = props
  return (
    <TouchableOpacity activeOpacity={0.8} {...buttonProps} style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button