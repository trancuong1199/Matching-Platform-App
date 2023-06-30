import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Text,
  Box,
  StatusBar,
  Image,
  Center,
  VStack,
  Link,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { loginUser } from '../../../redux/authSlice';
import { InputLogin } from '../../../components/Input';
import { ButtonLogin } from '../../../components/Button';
import { saveTokenOnKeychain } from '../../../services/keychain';
import { SECRET_KEY } from '@env'

export function LogIn() {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({ userName: '', password: '' });
  const [errors, setErrors] = useState({});
  const [flagButton, setFlagButton] = useState(false)
  const dispatch = useDispatch()
  const dataLogin = useSelector(state => state.auth)
  const dataInput = {
    username: inputs.userName,
    password: inputs.password,
    secret_key: SECRET_KEY,
  }
  useEffect(() => {
    if(!dataLogin.token == '') {
      saveTokenOnKeychain(dataLogin.token)
    }
  }, [flagButton])


  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const validate = async () => {
    let isValid = true;
    if (!inputs.userName) {
      handleError('Please input username', 'userName');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      onLogin();
    }
  };

  const onLogin = async () => {
    await dispatch(loginUser(dataInput))
    setFlagButton(!flagButton)
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box h="100%" bg="white" justifyContent="center">
        <VStack>
          <Center>
            <Image
              alt="image login"
              source={require('../../../assets/images/imageLogin.png')}
            />
            <Text mt={8} fontSize="2xl" fontWeight="bold">
              Welcome Back!
            </Text>
            <Text mt={4} fontSize="md">
              Please Log into your existing account
            </Text>
          </Center>
        </VStack>
        <Box mt={10} mx={8}>
          <InputLogin
            onChangeText={text => handleOnchange(text, 'userName')}
            onFocus={() => handleError(null, 'userName')}
            lable="Username"
            placeholder="Username"
            error={errors.userName}
          />
          <InputLogin
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            lable="Password"
            placeholder="Password"
            flag={true}
            error={errors.password}
          />
          <ButtonLogin title='Login' onPress={validate} />
          <Center mt={4}>
            <Link
              isExternal
              _text={{
                color: 'red.600',
              }}>
              Register
            </Link>
          </Center>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

