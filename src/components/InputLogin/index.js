import React, {useState} from 'react';
import {Text, Input, Pressable, Icon, VStack} from 'native-base';
import {SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const InputLogin = ({
  lable,
  placeholder,
  flag,
  email,
  setUserName,
  errorUserName,
  pw,
  errorPW,
  setPW,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Text fontWeight="bold" my={4}>
        {lable}
      </Text>
      {flag === 'username' ? (
        <VStack>
          <Input
            type="email"
            value={email}
            onChangeText={setUserName}
            rounded={25}
            size="lg"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder={placeholder}
          />
          {errorUserName && (
            <Text fontSize="xs" ml={4} mt={1} color="red.500">
              {errorUserName}
            </Text>
          )}
        </VStack>
      ) : (
        <VStack>
          <Input
            pl={4}
            value={pw}
            onChangeText={setPW}
            size="lg"
            rounded={25}
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? 'visibility' : 'visibility-off'}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder={placeholder}
          />
          {errorPW && (
            <Text fontSize="xs" ml={4} mt={1} color="red.500">
              {errorPW}
            </Text>
          )}
        </VStack>
      )}
    </>
  );
};
export default InputLogin;
