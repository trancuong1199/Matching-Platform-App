import React, { useState } from 'react';
import { Text, Input, Pressable, Icon, VStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const InputLogin = ({
  textInput,
  setTextInput,
  lable,
  placeholder,
  flag,
  error,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <>
      <Text fontWeight="bold" my={4}>
        {lable}
      </Text>
      <VStack>
        <Input
          value={textInput}
          onChangeText={setTextInput}
          rounded={25}
          type={flag && hidePassword ? 'password' : 'text'}
          size="lg"
          InputLeftElement={
            (flag ? <Text pl="7"></Text> : <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />)
          }
          InputRightElement={

            (!flag ? "" : <Icon
              as={<Pressable mr="2" onPress={() => setHidePassword(!hidePassword)}>
                <Icon
                  as={<MaterialIcons name={hidePassword ? 'visibility' : 'visibility-off'} />}
                  size={5}
                  color="muted.400"
                />
              </Pressable>}
              size={5}
              ml="2"
              color="muted.400"
            />)
          }
          placeholder={placeholder}
          {...props}
        />
        {error && (
          <Text color="red.400" ml="2" mt="1">
            {error}
          </Text>
        )}
      </VStack>
    </>
  );
};
