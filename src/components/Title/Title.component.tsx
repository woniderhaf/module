import { View, Text, TextProps } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { useAppSelector } from '../../store/hooks'
import { useSelector } from 'react-redux'

interface Props extends TextProps {
  title?: string
}
const Title: FC<Props> = ({ children, style }) => {
  const { color } = useAppSelector(state => state.settings)
  return (
    <Text
      style={
        [
          { color },
          style
        ]
      }
    >
      {children}
    </Text>
  )
}

// должны быть базовые стили для текста - передаем h1 - прописывается h1



export default Title