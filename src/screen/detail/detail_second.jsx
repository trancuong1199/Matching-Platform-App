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
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvillIcons';
import {Total, Totals, Totalb} from './data';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function DetailSecond() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box bg="#F8F9FA" mt="6">
        {Total.map((item, index) => (
          <Box key={index}>
            <Title key={index} titles={item.titles} icons={item.icons} />
            <Containerbox data={item.data} flag={item.flag} />
          </Box>
        ))}
        <Containerchip />
        <Containerlof />
        <Divider my="5" bg="muted.50" />
        <Buttons />
      </Box>
    </SafeAreaView>
  );
}

function Title({titles, icons}) {
  return (
    <Flex direction="row" m="2">
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

function Containerbox({data, flag}) {
  return (
    <Box>
      {data.map((item, index) => {
        return (
          <Stack
            key={index}
            direction="row"
            m="3"
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
                      color: 'gray',
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
          <VStack key={index} ml="4" mr="4">
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
                <HStack key={index} flexWrap={'wrap'} space="4" mb="2" mt="2">
                  {item.content.map((text, index) => {
                    return (
                      <Center key={index} mb="2">
                        <Text
                          bg="white"
                          fontWeight="600"
                          borderRadius={20}
                          px="4"
                          py="2"
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
          <VStack key={index} ml="4" mr="4">
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
                  alignItems='center'
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
        colorScheme="dark"
        px={10}
        variant="subtle"
        leftIcon={<Icon color="white" as={AntDesign} name="close" size="sm" />}>
        Cancel
      </Button>
      <Button
        px={10}
        leftIcon={<Icon color="white" as={Entypo} name="hand" size="sm" />}>
        Match
      </Button>
    </Stack>
  );
}
