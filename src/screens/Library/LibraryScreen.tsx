import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabStackList } from '../../navigation/RootTabStackList';

type Props = NativeStackScreenProps<RootTabStackList, 'Library'>;
const LibraryScreen: FC<Props> = ({ navigation, route }) => {
  return (
    <View>
      <Text>LibraryScreen</Text>
      <TextInput placeholder='wewew' />
    </View>
  )
}

export default LibraryScreen