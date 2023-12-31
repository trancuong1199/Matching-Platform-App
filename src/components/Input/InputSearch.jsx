import React, {useContext} from 'react';
import {Icon, Input, IconButton} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContext} from '@react-navigation/native';

// Render placeholder, icons
export function InputSearch(props) {
  const navigation = useContext(NavigationContext);
  return (
    <Input
      flex="1"
      size="md"
      variant="rounded"
      bg="coolGray.200"
      h={9}
      placeholder={props.placeholder}
      placeholderTextColor={'black'}
      InputLeftElement={
        <Icon
          as={<Ionicons name={props.iconSearch} />}
          size="sm"
          ml="2"
          color="black"
        />
      }
      InputRightElement={
        <IconButton
          bg="coolGray.100"
          rounded="full"
          p="0.5"
          mr="1"
          icon={
            <Icon
              as={<Ionicons name={props.iconFilter} />}
              size="md"
              color="black"
            />
          }
          onPress={() => navigation.navigate('FilterScreen')}

        />
      }
    />
  );
}
