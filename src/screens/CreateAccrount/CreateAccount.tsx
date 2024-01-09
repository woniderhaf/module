import { View, Text } from 'react-native'
import React, { FC, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;
const CreateAccount: FC<Props> = ({ navigation, route }) => {
  return (
    <View>
      <Text>CreateAccount</Text>
    </View>
  )
}

export default CreateAccount