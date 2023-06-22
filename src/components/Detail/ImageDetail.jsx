import React from 'react';
import {
  Icon,
  Text,
  HStack,
  Center,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export function ImageDetail(props) {
  return (
    <Center position="absolute" alignItems="flex-start" px="3" pt="6" w="100%">
      <HStack alignItems="center" mb="2">
        <Center size="7" rounded="full" bg="gray.400" mr="1">
          <Icon as={<AntDesignIcons name="star" />} size="4" color="white" />
        </Center>
        <Text fontSize="sm" color="white" fontWeight="700">
          {props.stars}
        </Text>
      </HStack>
      <HStack alignItems="center">
        <Center size="7" rounded="full" bg="gray.400" mr="1">
          <Icon as={<Ionicons name="person" />} size="4" color="white" />
        </Center>
        <Text fontSize="sm" color="white" fontWeight="700">
          {props.followers}
        </Text>
      </HStack>
    </Center>
  );
}
