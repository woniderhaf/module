import React, { LegacyRef, useEffect, useRef } from "react";
import { View, Animated, Image, Alert, TextInput, StyleSheet } from "react-native";
import { Svg, G, Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedInput = Animated.createAnimatedComponent(TextInput)

export default function Donut({
  percentaged = 50,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  delay = 500,
  color = 'tomato',
  textColor = 'tomato',
  max = 1000
}) {
  const percentage = useRef(50)
  const animatedValue = React.useRef(new Animated.Value(0)).current

  const animation = (toValue: number) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true
    })
      .start(() => {
        // animation(toValue === 0 ? percentage.current : 0)
        animation(loadedRef.current)
      })
  }


  const halfCircle = radius + strokeWidth
  const circleCircumference = 2 * Math.PI * radius
  const circleRef = React.useRef<Circle>()
  const inputRef = React.useRef<View>()
  const loadedRef = useRef(0)
  const totalREf = useRef(0)
  useEffect(() => {
    animation(loadedRef.current)


    animatedValue.addListener(v => {
      if (circleRef.current) {
        const maxPercentage = 100 * v.value / totalREf.current
        const strokeDashoffset = circleCircumference - (circleCircumference * maxPercentage) / 100
        circleRef.current.setNativeProps({
          strokeDashoffset,

        })
      }
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`
        })
      }
    })
    return () => {
      animatedValue.removeAllListeners()
    }
  }, [])
  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={` 0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx={'50%'}
            cy={'50%'}
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={0.2}
            fill={'transparent'}
          />
          <AnimatedCircle
            ref={circleRef}
            cx={'50%'}
            cy={'50%'}
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill={'transparent'}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      {/* <AnimatedInput
        ref={inputRef}
        underlineColorAndroid={"transparent"}
        editable={false}
        defaultValue="0"
        style={[StyleSheet.absoluteFillObject, { fontSize: radius / 2, color: textColor ?? color, fontWeight: '900', textAlign: 'center' }]}
      /> */}
      <Image
        source={{ uri: 'https://images.wallpaperscraft.ru/image/single/kordilery_gory_zakat_48438_3840x2400.jpg' }}
        width={100}
        height={100}
        onProgress={({ nativeEvent: { loaded, total } }) => {
          loadedRef.current = loaded
          totalREf.current = total
        }}
      />
    </View>
  )
}