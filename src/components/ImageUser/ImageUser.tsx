
import { View, Text, Image } from 'react-native'
import React, { FC, useRef } from 'react'
import Donut from '../Donut/Donut'

interface IImageUser {
  src: string,
  d?: number
}
const ImageUser: FC<IImageUser> = ({ src, d = 100 }) => {
  const loadedCount = useRef(0)
  const totalCount = useRef(0)
  return (
    <>
      <Image
        source={{ uri: src }}
        width={d}
        height={d}
        borderRadius={d / 2}
        style={{ alignSelf: 'center', resizeMode: 'cover' }}
        onProgress={({ nativeEvent: { loaded, total } }) => {
          loadedCount.current = loaded
          totalCount.current = total
        }}
      />

    </>

  )
}

export default ImageUser