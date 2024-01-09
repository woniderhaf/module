

import { View, Pressable } from 'react-native'
import React, { FC, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabStackList } from '../../navigation/RootTabStackList';
import Title from '../../components/Title/Title.component';
import { useAppSelector } from '../../store/hooks';
import { styles } from '../../styles/styles';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import ImageUser from '../../components/ImageUser/ImageUser';
import Donut from '../../components/Donut/Donut';

type Props = NativeStackScreenProps<RootTabStackList, 'Main'>;
const MainScreen: FC<Props> = ({ navigation, route }) => {
  const { color, schema } = useAppSelector(state => state.settings)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Pressable
        onPress={() => navigation.navigate('Profile')}
        style={{ marginRight: 24 }}
      >
        <Title style={styles.h2}>Профиль</Title>
      </Pressable>,
    })

  }, [])


  return (
    <Container>
      <Title style={[styles.h1]}>
        weewew
      </Title>

      {/* <ImageUser
        src='https://images.wallpaperscraft.ru/image/single/kordilery_gory_zakat_48438_3840x2400.jpg'
        d={150}
      /> */}
      <Donut strokeWidth={5} radius={20} />
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text>Go Profile</Text>
      </Pressable>
    </Container>

  )
}

export default MainScreen