import { View, Text as TextRN, TextComponent, TextStyle, useColorScheme } from 'react-native'
import React, { FC, PropsWithChildren, useMemo } from 'react'
import { useAppSelector } from '../../store/hooks'
import { Schemas } from '../../settings/scheema.settings'

interface Props extends PropsWithChildren {
  style?: TextStyle
}
const Text: FC<Props> = ({ children, style }) => {
  const { schema } = useAppSelector(state => state.settings)
  const systemSchema = useColorScheme()

  const color = useMemo(() => {
    if (schema === Schemas.system) {
      return systemSchema === 'dark' ? '#FFF' : '#000'
    } else {
      return schema === Schemas.dark ? '#FFF' : "#000"
    }

  }, [schema, systemSchema])

  return (

    <TextRN style={[{ color }, style]}>{children}</TextRN>
  )
}

export default Text