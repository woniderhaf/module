import { View, Text, SectionList, Pressable } from 'react-native'
import React, { memo, useMemo, useState } from 'react'
import RadioButton from '../RadioButton/RadioButton'

const RatioButtonCantainer = () => {
  const [activeRatio, setActiveRatio] = useState(0)
  const ratios = useMemo(() => ['1', '2', '3', '4', '5'], [])
  // const Result = memo(() => ratios.map((v, i) =>

  // <RadioButton
  //   key={v}
  //   callback={() => { console.log('click'); setActiveRatio(i) }}
  //   isChecked={i === activeRatio}
  //   item={v}
  // />
  // ))
  const MMM = memo(({ v, i }: { v: string, i: number }) => {
    console.log('render');

    return (

      <Pressable key={v} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'red' }} onPress={() => setActiveRatio(i)}>

      </Pressable>
    )

  }
  )
  return (
    <View>
      {
        ratios.map((v, i) => {
          return <MMM v={v} i={i} key={v} />
        })
      }
    </View>
  )
}

export default RatioButtonCantainer