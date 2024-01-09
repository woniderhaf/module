import { View, Text, useColorScheme, ViewStyle } from 'react-native';
import React, { FC, PropsWithChildren, useMemo } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Schemas } from '../../settings/scheema.settings';
import { styles } from '../../styles/styles';
import { SafeAreaView, useSafeAreaInsets, } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';


interface Props extends PropsWithChildren {
  style?: ViewStyle;
}
const Container: FC<Props> = ({ children, style }) => {
  const { schema, backgroundColor } = useAppSelector(state => state.settings);
  const { bottom, top } = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor, paddingTop: top, paddingBottom: bottom },
        style,
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* <View style={[styles.container, { backgroundColor, paddingTop: top, paddingBottom: bottom }, style]}> */}
        {children}
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Container;
