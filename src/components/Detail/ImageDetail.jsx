import React from 'react';
import {
  Icon,
  Text,
  HStack,
  Center,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function ImageDetail(props) {
  return (
      <HStack alignItems="center" mb="2">
        <Center size="7" rounded="full" bg="gray.400" mr="1">
          <Icon as={<Ionicons name={props.iconStar ? props.iconStar : props.iconPerson} />} size="4" color="white" />
        </Center>
        <Text fontSize="sm" color="white" fontWeight="700">
          {props.stars ? props.stars : props.followers}
        </Text>
      </HStack>
  );
}
