import React from 'react';
import {Text, Image, View, Icon, CloseIcon, Avatar, Radio} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
const Detail_First = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const componentText = (text, comment, flag) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text fontSize="sm">{text}</Text>
        <Text
          fontSize="xs"
          color="black.50"
          style={!!flag ? styles.underline : null}>
          {comment}
        </Text>
      </View>
    );
  };
  const imagePost = () => {
    return (
      <View>
        <Image
          resizeMode="cover"
          style={styles.imgPost}
          alt="Alternate Text"
          size="xl"
          source={require('../../assets/images/posts.png')}
        />
        <View style={styles.overlay} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <ScrollView>
        <View style={styles.page}>
          <View style={styles.header}>
            <Image
              resizeMode="cover"
              style={[styles.img, {height: windowHeight / 4}]}
              source={require('../../assets/images/header_detail.png')}
              alt="Alternate Text"
              size="xl"
            />
            <CloseIcon
              style={styles.cancel}
              size="5"
              mt="0.5"
              color="black.50"
            />
            <View style={styles.view}>
              <Icon as={Ionicons} name="eye" color="black.50" size="4" />
              <Text color="black.50">15,1k</Text>
              <Text color="black.50">Views</Text>
            </View>
          </View>
          <View style={styles.banner}>
            <Avatar
              style={[styles.avatar, {top: -30}]}
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
              size="xl">
              <Avatar.Badge bg="primary.400" />
            </Avatar>
            <View style={styles.textContent}>
              {componentText('100K', 'Interests')}
              {componentText('100', 'Matches')}
              {componentText('10', 'Endorsements', 'underline')}
            </View>
          </View>
          <View style={styles.info}>
            <Text fontWeight="bold" style={{fontSize: 20}}>
              Mark Dao
            </Text>
            <Text>BAP Group - Kyber Network</Text>
            <View style={styles.location}>
              <Icon
                as={Ionicons}
                name="location-outline"
                color="black.50"
                size="5"
              />
              <Text color="black.50">Ho Chi Minh, VN</Text>
            </View>
          </View>
          <View style={styles.matches}>
            <Avatar
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
              size="sm"
              style={styles.matAvatar}></Avatar>
            <Avatar
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
              size="sm"
              style={styles.matAvatar}></Avatar>
            <Text color="black.50" fontSize="xs">
              Victor, Nathan, and 6 other mutual matches{' '}
            </Text>
          </View>
          <View style={styles.open}>
            <Radio.Group value="one">
              <Radio shadow={2} value="one" my="1">
                <Text fontSize="md" color="primary.600">
                  Open for collaboration
                </Text>
              </Radio>
            </Radio.Group>
          </View>
          <View style={styles.content}>
            <Text>
              - In my career so far, I have often been involved in market
              development during the start-up period of{' '}
            </Text>
            <Text>
              - Japanese subsidiaries of venture companies and
              foreign-affiliated companies, and I am good at the 01 and 110
              phases.
            </Text>
            <Text>
              {' '}
              -In March 2021, established a company for inbound x ITx regional
              revitalization and cross-border EC support. In July 2022, he
              established an empathetic video distribution platform company to
              support amateur sports.
            </Text>
          </View>
          <View style={styles.post}>
            <View style={styles.childrenPost}>
              <Icon
                as={MaterialCommunityIcons}
                name="calendar-sync"
                color="black.100"
                size="7"
              />
              <Text fontSize="md">Posts (1000)</Text>
            </View>
            <Text style={styles.match} color="black.50">
              Match to see
            </Text>
          </View>
          <View style={styles.postContent}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {imagePost()}
              {imagePost()}
              {imagePost()}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F8F9FA',
    position: 'relative',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
  },
  header: {
    position: 'relative',
  },
  cancel: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  view: {
    position: 'absolute',
    width: 100,
    alignItems: 'center',
    bottom: 10,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    left: 30,
    borderWidth: 4,
    borderColor: '#07B8D0',
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: 240,
    marginRight: 15,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 30,
  },
  matches: {
    flexDirection: 'row',
    marginLeft: 30,
    alignItems: 'center',
  },
  matAvatar: {
    marginRight: 5,
    borderWidth: 3,
    borderColor: '#07B8D0',
    borderRadius: 100,
    width: 22,
    height: 22,
  },
  open: {
    height: 40,
    marginHorizontal: 20,
    backgroundColor: '#E9F0F1',
    borderRadius: 10,
    marginTop: 8,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  content: {
    height: 250,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F5F5F5',
    marginTop: 5,
    paddingHorizontal: 5,
  },
  post: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  childrenPost: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  match: {
    textDecorationLine: 'underline',
  },
  postContent: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  imgPost: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    width: 200,
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default Detail_First;
