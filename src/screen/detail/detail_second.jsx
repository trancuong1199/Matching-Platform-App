import React from 'react';
import {
  SectionList,
  View,
  Text,
  useTheme,
  ScrollView,
  Center,
  Heading,
  VStack,
  HStack,
  Stack,
  Icon,
  Flex,
  Spacer,
  IconButton,
  Box,
  Column,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Highlight, Total} from './data';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Example() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView flex={1}>
        {Total.map((item, index) => (
          <Box key={index}>
            <Title key={index} titles={item.titles} icons={item.icons}  />
            <Containerbox data={item.data} flag={item.flag}/>
          </Box>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function Title({titles,icons}) {
  return (
    <Flex direction="row" m="2">
      <Icon as={MaterialCommunityIcons} name={icons} size="6" mr="2" />
      <Heading fontSize="xl">{titles}</Heading>
    </Flex>
  );
}

function Containerbox({data,flag}) {
  return (
    <Box>
      {data.map((item, index) => {
        return (
          <Stack key={index} direction="row" m="3" bg="gray.50">
            <Icon as={MaterialIcons} name="home-work" size={10} m="4" />
            <View p="2">
              <Stack direction="row" alignItems="center" space={2}>
                <Heading key={index} size="xs">
                  {item.title}
                </Heading>
                {flag===1?
                
                <IconButton
                  _icon={{as: EvilIcons, name: 'share-apple',color: 'gray',size:'lg'}}
                />
                :null}
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
      {data.map(() => {
        return (
          <Stack key={index} direction="row" m="3" bg="gray.50">
            <Icon as={MaterialIcons} name="home-work" size={10} m="4" />
            <View p="2">
              <Stack direction="row" alignItems="center" space={2}>
                <Heading key={index} size="xs">
                  {item.title}
                </Heading>
                <IconButton
                  size={5}
                  variant="solid"
                  _icon={{as: EvilIcons, name: 'share-apple'}}
                />
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
