import React, {useContext} from 'react';
import {
  Text,
  Image,
  View,
  Icon,
  CloseIcon,
  Avatar,
  Radio,
  HStack,
  VStack,
  Link,
  AspectRatio,
  Box,
  IconButton,
} from 'native-base';
import {NavigationContext} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
const Detail_First = () => {
  const navigation = useContext(NavigationContext);
  const ComponentText = (text, comment, flag) => {
    return (
      <View alignItems="center">
        <Text fontSize="sm">{text}</Text>
        {flag ? (
          <Link
            _text={{
              color: 'black.50',
              fontSize: 'xs',
            }}>
            {comment}
          </Link>
        ) : (
          <Text fontSize="xs" color="black.50">
            {comment}
          </Text>
        )}
      </View>
    );
  };
  const ImagePost = () => {
    return (
      <HStack w={200} h={200} mr={2}>
        <Image
          resizeMode="cover"
          alt="Alternate Text"
          w="100%"
          h="100%"
          source={require('../../assets/images/posts.png')}
        />

        <View style={styles.overlay} w={200} h={200} />
      </HStack>
    );
  };
  const ComponentHeader = () => {
    return (
      <Box>
        <AspectRatio ratio={6 / 3} width="100%">
          <Image
            resizeMode="cover"
            h={200}
            w="100%"
            source={require('../../assets/images/header_detail.png')}
            alt="Alternate Text"
          />
        </AspectRatio>
        <HStack
          alignItems="center"
          position="absolute"
          mt="4"
          w="100%"
          px="4"
          justifyContent="space-between">
          <IconButton onPress={navigation.goBack} icon={<CloseIcon size="5" color="black.50" />} p="0" />
          <Icon
            name="dots-horizontal"
            as={MaterialCommunityIcons}
            size="8"
            color="black.50"
          />
        </HStack>
        <HStack
          space={2}
          position="absolute"
          w={20}
          alignItems="center"
          bottom={6}
          right={10}
          justifyContent="space-between">
          <Icon as={Ionicons} name="eye" color="black.50" size="4" />
          <Text color="black.50">15,1k</Text>
          <Text color="black.50">Views</Text>
        </HStack>
      </Box>
    );
  };
  const ComponentAvatar = () => {
    return (
      <HStack mx={6} justifyContent="space-around" alignItems="center" mt="-5%">
        <VStack>
          <Avatar
            borderWidth={4}
            borderColor="primary.600"
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
            size="xl">
            <Avatar.Badge
              size={8}
              bg="primary.600"
              alignItems="center"
              justifyContent="center"
              borderColor="primary.600">
              <Icon
                as={MaterialCommunityIcons}
                name="hand-wave"
                color="white"
              />
            </Avatar.Badge>
          </Avatar>
        </VStack>
        <VStack>{ComponentText('100K', 'Interests')}</VStack>
        <VStack>{ComponentText('100', 'Matches')}</VStack>
        <VStack>{ComponentText('10', 'Endorsements', 'underline')}</VStack>
      </HStack>
    );
  };
  const ComponentInfo = () => {
    return (
      <>
        <VStack mx={6} mt={2} space={1}>
          <Text fontWeight="bold" fontSize="xl">
            Mark Dao
          </Text>
          <Text>BAP Group - Kyber Network</Text>
          <HStack>
            <Icon
              as={Ionicons}
              name="location-outline"
              color="black.50"
              size="5"
            />
            <Text color="black.50">Ho Chi Minh, VN</Text>
          </HStack>
        </VStack>
        <HStack mx={6} mt={2}>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
            size="sm"
            borderWidth={3}
            borderColor="#07B8D0"
            w={22}
            h={22}></Avatar>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
            size="sm"
            borderWidth={3}
            borderColor="#07B8D0"
            w={22}
            h={22}
            ml={1}></Avatar>
          <Text color="black.50" fontSize="xs" ml={2}>
            Victor, Nathan, and 6 other mutual matches{' '}
          </Text>
        </HStack>
      </>
    );
  };
  const ComponentContent = () => {
    return (
      <View
        h={250}
        mx={5}
        bg="white"
        borderWidth={1}
        borderRadius={6}
        borderColor="#E8EAED"
        mt={1}
        px={2}>
        <Text>
          - In my career so far, I have often been involved in market
          development during the start-up period of{' '}
        </Text>
        <Text>
          - Japanese subsidiaries of venture companies and foreign-affiliated
          companies, and I am good at the 01 and 110 phases.
        </Text>
        <Text>
          -In March 2021, established a company for inbound x ITx regional
          revitalization and cross-border EC support. In July 2022, he
          established an empathetic video distribution platform company to
          support amateur sports.
        </Text>
      </View>
    );
  };
  const ComponentPost = () => {
    return (
      <>
        <HStack
          mt={4}
          mx={6}
          justifyContent="space-between"
          alignItems="center">
          <HStack alignItems="center">
            <Icon
              as={MaterialCommunityIcons}
              name="calendar-sync"
              color="black.100"
              size={7}
            />
            <Text fontSize="md">Posts (1000)</Text>
          </HStack>
          <Link _text={{color: 'black.50', fontSize: 'sm'}}>Match to see</Link>
        </HStack>
        <HStack ml={6} mr={4} my={2}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ImagePost />
            <ImagePost />
            <ImagePost />
          </ScrollView>
        </HStack>
      </>
    );
  };
  return (
    <SafeAreaView>
        <View bg="#F8F9FA" position="relative">
          <ComponentHeader />
          <ComponentAvatar />
          <ComponentInfo />
          <HStack
            h={10}
            mx={6}
            bg="#E9F0F1"
            borderRadius={10}
            mt={2}
            pl={3}
            alignItems="center">
            <Radio.Group value="one">
              <Radio shadow={2} value="one" my="1">
                <Text fontSize="md" color="primary.600">
                  Open for collaboration
                </Text>
              </Radio>
            </Radio.Group>
          </HStack>
          <ComponentContent />
          <ComponentPost />
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default Detail_First;
