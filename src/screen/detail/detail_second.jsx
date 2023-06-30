import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Center,
  Heading,
  VStack,
  HStack,
  Stack,
  Icon,
  Flex,
  IconButton,
  Button,
  Box,
  Divider,
  Link,
  Image,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Total, Totals, Totalb } from './data';
import { useNavigation } from '@react-navigation/native';
import { removeTokenOnKeychain } from '../../services/keychain';
import { removeToken } from '../../redux/authSlice';

export default function DetailSecond() {
  return (
    <Box bg="#F8F9FA" pt="6">
      {Total.map((item, index) => (
        <Box key={index}>
          <Title key={index} titles={item.titles} icons={item.icons} />
          <Containerbox data={item.data} flag={item.flag} />
        </Box>
      ))}
      <Containerchip />
      <Containerlof />
      <Divider my="5" bg="gray.300" />
      <Buttons />
    </Box>
  );
}

function Title({ titles, icons }) {
  return (
    <Flex direction="row" my="2" mx="6">
      <Icon
        color="black.100"
        as={MaterialCommunityIcons}
        name={icons}
        size="6"
        mr="2"
      />
      <Heading fontSize="xl">{titles}</Heading>
    </Flex>
  );
}

function Containerbox({ data, flag }) {
  return (
    <Box>
      {data.map((item, index) => {
        return (
          <Stack
            key={index}
            direction="row"
            my="2"
            mx="6"
            borderWidth={0.2}
            borderColor="gray.500"
            borderRadius={5}
            bg="gray.100">
            {/* <Icon  as={MaterialIcons} name="home-work" size="20" m="4" /> */}
            <Image
              alt="image building"
              m="4"
              size="sm"
              source={require('../../assets/images/building.png')}
            />
            <View p="2">
              <Stack direction="row" alignItems="center" space={2}>
                <Heading key={index} size="xs">
                  {item.title}
                </Heading>
                {flag === 1 ? (
                  <IconButton
                    _icon={{
                      as: EvilIcons,
                      name: 'share-apple',
                      color: 'gray.300',
                      size: 'lg',
                    }}
                  />
                ) : null}
              </Stack>
              {item.content.map((text, index) => {
                return <Text key={index}>{text}</Text>;
              })}
            </View>
          </Stack>
        );
      })}
    </Box>
  );
}

function Containerchip() {
  return (
    <Box>
      {Totals.map((item, index) => {
        return (
          <VStack key={index} mx="6">
            <HStack>
              <Icon
                color="black.100"
                as={MaterialCommunityIcons}
                name={item.icons}
                size="6"
                mr="2"
              />
              <Heading fontSize="xl" color={'gray'}>
                {item.titles}
              </Heading>
            </HStack>
            {item.data.map((item, index) => {
              return (
                <HStack key={index} flexWrap={'wrap'} space="2" my="2">
                  {item.content.map((text, index) => {
                    return (
                      <Center key={index} mb="2">
                        <Text
                          bg="white"
                          fontWeight="600"
                          borderWidth={0.2}
                          borderColor="gray.300"
                          borderRadius={20}
                          px="4"
                          py="2"
                          shadowColor="gray.500"
                          shadowOffset={{ width: 0, height: 2 }}
                          shadowOpacity={0.3}
                          shadowRadius={4}
                          elevation={4}
                          key={index}>
                          {text}
                        </Text>
                      </Center>
                    );
                  })}
                </HStack>
              );
            })}
          </VStack>
        );
      })}
    </Box>
  );
}

function Containerlof() {
  return (
    <Box>
      {Totalb.map((i, index) => {
        return (
          <VStack key={index} mx="6">
            <HStack direction="row" alignItems="center" space={2}>
              <Icon
                color="black.100"
                as={MaterialCommunityIcons}
                name={i.icons}
                size="6"
                mr="2"
              />
              <Heading fontSize="xl" color={'gray'}>
                {i.titles}
              </Heading>
            </HStack>
            {i.data.map((item, index, flag) => {
              return (
                <HStack
                  key={index}
                  pr="4"
                  my="3"
                  borderWidth={0.2}
                  borderColor="gray.500"
                  borderRadius={5}
                  alignItems="center"
                  bg="gray.100">
                  <Icon
                    as={item.icon === 'language' ? FontAwesome : MaterialIcons}
                    color={
                      item.icon === 'language' ? 'gray.500' : 'primary.500'
                    }
                    name={item.icon}
                    size="10"
                    m="4"
                  />
                  <VStack flex={1}>
                    <HStack alignItems="center" justifyContent="space-between">
                      <Heading key={index} size="xs">
                        {item.title}
                      </Heading>
                      {i.flag === 1 ? (
                        <Link
                          _text={{
                            color: 'gray.500',
                          }}
                          fontWeight="400">
                          See more
                        </Link>
                      ) : null}
                    </HStack>
                    {item.content.map((text, index) => {
                      return <Text key={index}>{text}</Text>;
                    })}
                  </VStack>
                </HStack>
              );
            })}
          </VStack>
        );
      })}
    </Box>
  );
}

function Buttons() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(removeToken())
    removeTokenOnKeychain()
  }
  return (
    <Stack
      justifyContent={'center'}
      pb="5"
      direction={{
        base: 'row',
        md: 'row',
      }}
      space={10}>
      <Button
        onPress={() => logOut()}
        shadowColor="gray.500"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.3}
        shadowRadius={4}
        elevation={4}
        bg="gray.400"
        color="white"
        px={10}
        variant="subtle"
        leftIcon={<Icon color="white" as={AntDesign} name="close" size="sm" />}>
        <Text color="white">Cancel</Text>
      </Button>
      <Button
        shadowColor="gray.500"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.3}
        shadowRadius={4}
        elevation={4}
        px={10}
        leftIcon={
          <Icon
            color="white"
            as={MaterialCommunityIcons}
            name="hand-wave-outline"
            size="sm"
          />
        }>
        Match
      </Button>
    </Stack>
  );
}
