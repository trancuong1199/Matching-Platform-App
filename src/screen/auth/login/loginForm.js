import React, {useEffect, useState} from 'react';
import {
  Text,
  Box,
  StatusBar,
  Image,
  Center,
  VStack,
  Button,
  Link,
} from 'native-base';
import {SafeAreaView} from 'react-native';
import InputLogin from '../../../components/InputLogin';
import {useNavigation} from '@react-navigation/native';
export const FormLogin = () => {
  const [userName, setUserName] = useState('');
  const [pw, setPW] = useState('');
  const [errorUserName, setErrorUser] = useState('');
  const [errorPW, setErrorPW] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    if (!!userName) setErrorUser('');
    if (!!pw) setErrorPW('');
  }, [userName.length === 0, pw.length === 0]);
  const checkUser = () => {
    if (!userName) {
      setErrorUser('Please enter your username');
    } else {
      setErrorUser('');
    }
  };
  const checkPassword = () => {
    if (!pw) {
      setErrorPW(' Please enter password');
    } else {
      setErrorPW('');
    }
  };
  const handleLogin = () => {
    checkUser();
    checkPassword();
    if (!errorUserName && !errorPW && !!userName && !!pw) {
      navigation.navigate('BottomTabs');
    }
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
            userName={userName}
            setUserName={setUserName}
            errorUserName={errorUserName}
            lable="Username"
            placeholder="Username"
            flag="username"
          />
          <InputLogin
            pw={pw}
            setPW={setPW}
            errorPW={errorPW}
            lable="Password"
            placeholder="Password"
            flag="password"
          />
          <Button onPress={handleLogin} h={12} rounded={25} mt={8} success>
            <Text color="white" fontSize="lg">
              Login
            </Text>
          </Button>
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
