import { View, Text, Pressable, ViewStyle } from 'react-native'
import React, { FC, memo, useEffect, useMemo } from 'react'
import { styles } from './styles.RadioButton'
import { useAppSelector } from '../../store/hooks'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface IRadioButton<T> {
  item: T;
  isColor?: boolean;
  isChecked: boolean;
  callback?: (item: T) => void;
  style?: ViewStyle;
}
function RadioButton<T>({
  item,
  isChecked,
  isColor,
  callback,
  style
}: IRadioButton<T>) {

  const borderColor = useMemo(() => isColor ? item as string : '#000', [isColor, item])
  console.log({ isChecked });

  const animateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(isChecked ? 0.7 : 1, { duration: 1000 })
        }
      ]
    }
  })

  return (
    <Pressable key={item as string} style={[style, styles.container, { borderColor }]} onPress={() => callback && callback(item)}>
      <Animated.View style={[styles.isChecked, { backgroundColor: borderColor }, animateStyle]} />
    </Pressable>
  )
}

export default RadioButton