import { View, FlatList, PixelRatio, Animated } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Title from '../../components/Title/Title.component';
import { COLORS } from '../../settings/colors.settings';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  toggleColor as toggleColorAction,
  toggleSchema as toggleSchemaAction,
} from '../../store/settings.slice';
import { styles } from '../../styles/styles';
import { Schemas } from '../../settings/scheema.settings';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import { SearchBar, SearchBarCommands, useTransitionProgress, isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
import List from '../../components/List/List';
import RadioButton from '../../components/RadioButton/RadioButton';
import RatioButtonCantainer from '../../components/RadioButtonContainer/RadioButtonCantainer';


type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const ProfileScreen: FC<Props> = ({ navigation }) => {
  const { color, schema } = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();
  const toggleColor = useCallback((color: COLORS) => dispatch(toggleColorAction(color)), [color]);
  const toggleSchema = useCallback((schema: Schemas) =>
    dispatch(toggleSchemaAction(schema)), [schema]);
  const searchRef = useRef<SearchBarCommands>(null);
  useEffect(() => {
    setTimeout(() => {
      // searchRef.current?.focus();
    }, 700);
  }, []);

  const [search, setSearch] = useState('');


  useLayoutEffect(() => {
    console.log('update');

    navigation.setOptions({
      // headerSearchBarOptions: {

      //   // obscureBackground: false,
      //   hideWhenScrolling: true,
      //   placement: 'stacked',
      //   inputType: 'text',
      //   cancelButtonText: 'Отмена',
      //   textColor: '#FFF',
      //   onChangeText: e => {
      //     setSearch(e.nativeEvent.text);
      //   },
      //   onBlur: e => {
      //     console.log('onBlur', search);
      //   },
      //   barTintColor: '#000',
      //   tintColor: color,
      //   placeholder: 'Поиск',
      //   ref: searchRef,
      // },
    });
  }, [navigation]);



  return (
    <Container >
      <List<COLORS>
        header='Палитра'
        data={Object.values(COLORS)}
        style={{ marginBottom: 10 }}
        isSeporator={true}
        onPress={toggleColor}
        renderItem={useCallback(({ item }) => {
          return (
            <RadioButton<COLORS>
              item={item}
              isColor={true}
              isChecked={item === color}
              callback={toggleColor}
              key={item}
              style={styles.mb10}
            />
          )
        }, [color])}
      />
      {/* <List<COLORS>
        header='Палитра'
        data={Object.values(COLORS)}
        style={{ marginBottom: 30 }}
        isSeporator={true}
        direction='row'
        onPress={toggleColor}
        renderItem={({ item }) => {
          return (
            <RadioButton
              item={item}
              isColor={true}
              isChecked={item === color}
              callback={() => toggleColor(item)}
              key={item}
              style={styles.mb10}
            />
          )
        }}
      /> */}
      {/* <List<Schemas>
        header='Тема'
        isSeporator={true}
        data={Object.values(Schemas)}
        renderItem={({ item }) => {
          return (
            <View style={[styles.row, styles.mb10, styles.gap10]}>
              <RadioButton
                item={item}
                isChecked={item === schema}
                callback={() => toggleSchema(item)}
                key={item}
              />
              <Text>{item}</Text>
            </View>
          )
        }}
      /> */}
    </Container>
  );
};

export default ProfileScreen;
