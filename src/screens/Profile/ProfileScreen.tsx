import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react'
import { RootStackParamList } from '../../navigation/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>
const ProfileScreen: FC<Props> = () => {
  return (
    <View>

      <Text>ProfileScreen</Text>
    </View>
  )
}


export default ProfileScreen