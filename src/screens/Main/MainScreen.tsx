

import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabStackList } from '../../navigation/RootTabStackList';

type Props = NativeStackScreenProps<RootTabStackList, 'Main'>;
const MainScreen: FC<Props> = ({ navigation, route }) => {
  return (
    <View>
      <Text>MainScreen.screen</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text>Go Profile</Text>
      </Pressable>
    </View>
  )
}

export default MainScreen