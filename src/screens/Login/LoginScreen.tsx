import { View, TextInput, Pressable } from 'react-native';
import React, { FC, useRef } from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title.component';
import { styles } from '../../styles/styles';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Text from '../../components/Text/Text';
import { LoginStyle } from './Login.style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/RootStackParamList';
import Button from '../../components/Button/Index';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen: FC<Props> = ({ navigation }) => {
  const secondInputRef = useRef<TextInput>(null);
  return (
    <Container style={{ justifyContent: 'center' }}>
      <Title style={[styles.title, { color: 'white' }]}>Вход</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors: any = {};
          if (!values.email) {
            errors.email = 'Обязательное поле';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Неверный E-mail';
          }
          return errors;
        }}
        onSubmit={({ email, password }, { setSubmitting, setErrors }) => {
          console.log('onsubmit');
          setTimeout(() => {
            setSubmitting(false);
            setErrors({
              email: undefined,
              password: 'Неверный логин или пароль!',
            });
          }, 1000);
        }}>
        {({
          isSubmitting,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
        }) => (
          <View style={[LoginStyle.form, {}]}>
            <TextInput
              returnKeyType="next"
              onSubmitEditing={() => secondInputRef.current?.focus()}
              blurOnSubmit={false}
              style={LoginStyle.input}
              keyboardType="email-address"
              placeholder="E-mail"
              placeholderTextColor={'#000'}
              onBlur={handleBlur('email')}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <ErrorMessage
              name="email"
              component={() => (
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              )}
            />
            <TextInput
              returnKeyType="send"
              onSubmitEditing={() => isValid && handleSubmit()}
              ref={secondInputRef}
              style={LoginStyle.input}
              keyboardType="visible-password"
              placeholder="Пароль"
              placeholderTextColor={'#000'}
              onBlur={handleBlur('password')}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <ErrorMessage
              name="password"
              component={() => (
                <Text style={{ color: 'red' }}>{errors.password}</Text>
              )}
            />
            <Button
              title="Войти"
              disabled={isSubmitting || !isValid}
              onPress={({ }) => handleSubmit()}
              style={{ opacity: isSubmitting || !isValid ? 0.8 : 1 }}
            />
          </View>
        )}
      </Formik>
      <View style={[styles.row, styles.center]}>
        <Title style={[styles.title, styles.h2, { marginRight: 20 }]}>
          Нет аккаунта?
        </Title>
        <Button
          title="Создать"
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </View>
    </Container>
  );
};

export default LoginScreen;
