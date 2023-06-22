import React, {useContext} from 'react';
import {Dimensions, StyleSheet, ScrollView} from 'react-native';
import {View, Avatar, HStack, Divider, Box, Pressable} from 'native-base';
import {NavigationContext} from '@react-navigation/native';

import Chip from '../../components/Chip/Chip';
import {chipData, historyDetailData} from '../../Services/Data/homeData';
import {HistoryDetail} from '../../components/Detail';
import {LocationSelect} from '../../components/Select';
import {ImageCarousel} from '../../components/Carousel';
import {BoxTitle} from '../../components/Title';
import {InputSearch} from '../../components/Input';

// HomeHeader: avatar, search input, filter location
function HomeHeader() {
  const navigation = useContext(NavigationContext);

  return (
    <HStack justifyContent="space-between" alignItems="center" space={2} py="2">
      <Pressable onPress={() => navigation.navigate('Detail')}>
        <Avatar
          size={8}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}></Avatar>
      </Pressable>
      <InputSearch
        placeholder="Search skill, people, title..."
        iconSearch="search-outline"
        iconFilter="filter-outline"
      />
      <LocationSelect />
    </HStack>
  );
}

// Home main
function Home() {
  return (
    <Box style={styles.container} bg="white">
      {/* Header */}
      <HomeHeader />

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageCarousel />
        <Divider h={1} bg="gray.200" />
        <Box py="4">
          <BoxTitle titleName="My Biography" />
          {historyDetailData.map((value, index) => (
            <HistoryDetail
              historyDetailContent={value}
              key={index}
              colorSeeMore="coolGray.400"
            />
          ))}
        </Box>
        <Divider h={1} bg="gray.200" />

        {/* Footer */}
        <Box py="4" mb="20">
          <BoxTitle titleName="Insterests" />
          <HStack flexWrap="wrap" space={2}>
            {chipData.map((value, index) => (
              <Chip my="1" key={index} title={value} fontSize="md" />
            ))}
          </HStack>
        </Box>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default Home;
