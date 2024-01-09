import { View, Text, StyleSheet, ViewStyle, ScrollView, Pressable, Touchable, TouchableOpacity } from 'react-native'
import React, { FC, memo, useCallback, useMemo } from 'react'
import Title from '../Title/Title.component';
import { useAppSelector } from '../../store/hooks';
import { Schemas } from '../../settings/scheema.settings';
import { BackgroundColor } from '../../settings/backgroundColor.settings';

interface IList<T> {
  data: Array<T>;
  renderItem: ({ item }: { item: T }) => React.ReactElement | null;
  header?: string;
  isSeporator?: boolean;
  style?: ViewStyle;
  isBorder?: boolean,
  direction?: 'row' | 'column',
  onPress?: (item: T) => void;
}
function List<T>({
  data,
  renderItem,
  header,
  isBorder = true,
  isSeporator = false,
  style: containerStyle,
  direction = 'column',
  onPress = useCallback(() => { }, [])

}: IList<T>) {
  // constants
  const isColumn = useMemo(() => direction === 'column', [direction])
  const isRenderSeporator = useMemo(() => isColumn && isSeporator, [isColumn, isSeporator])
  const { backgroundColor } = useAppSelector(state => state.settings)
  console.log('render list');

  const borderColor = useMemo(() => backgroundColor == BackgroundColor.dark ? BackgroundColor.light : BackgroundColor.dark, [backgroundColor])

  const RenderItemSuper = memo(() =>
    data.map((v, i) =>
      <Pressable key={v as string} onPress={() => onPress(v)}>
        {renderItem({ item: v })}
        {(i + 1) < data.length && isRenderSeporator && <View key={i} style={{ flex: 1, height: 1, backgroundColor: borderColor, opacity: 0.5 }} />}
      </Pressable>
    )
  )
  // return 
  return (
    <View style={[containerStyle, isBorder && style.border, { borderColor }]}>
      <Title style={[{ marginBottom: 10 }, isBorder && { paddingLeft: 10 }]}>{header}</Title>
      {
        isColumn ?
          <View style={[style.container, isColumn ? style.column : style.row, isBorder && { paddingHorizontal: 10 }]}>
            <RenderItemSuper />
          </View>
          :
          <ScrollView style={{}} horizontal contentContainerStyle={style.row} showsHorizontalScrollIndicator={false}>
            <RenderItemSuper />
          </ScrollView>
      }
    </View>

  )
}

const style = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  row: {
    flexDirection: 'row',
    columnGap: 20,
    paddingHorizontal: 10
  },
  column: {
    flexDirection: 'column',
    rowGap: 10
  },
  border: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
  }
})

export default List