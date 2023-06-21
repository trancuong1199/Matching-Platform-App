import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {View, Avatar, HStack, Divider, Box} from 'native-base';

import Chip from '../../components/Chip/Chip';
import {chipData, historyDetailData} from '../../Services/Data/homeData';
import {HistoryDetail} from '../../components/Detail';
import {LocationSelect} from '../../components/Select';
import {ImageCarousel} from '../../components/Carousel';
import {BoxTitle} from '../../components/Title';
import {InputSearch} from '../../components/Input';

// HomeHeader: avatar, search input, filter location
function HomeHeader() {
  const heightScreen = Dimensions.get('window').height;
  const heightScreenHeader = (heightScreen / 100) * 8;
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      h={heightScreenHeader}>
      <Avatar
        size={8}
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}></Avatar>
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
  const heightScreen = Dimensions.get('window').height;
  const heightScreenContent = (heightScreen / 100) * 60;
  const heightScreenHistory = (heightScreen / 100) * 17;
  const heightScreenFooter = (heightScreen / 100) * 15;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HomeHeader />

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box h={heightScreenContent}>
          <ImageCarousel />
        </Box>
        <View h={heightScreenHistory}>
          <Divider h={1} mb="2" bg="gray.200" />
          <BoxTitle titleName="My Biography" />
          {historyDetailData.map((value, index) => (
            <HistoryDetail
              historyDetailContent={value}
              seeMore={value}
              key={index}
              colorSeeMore="coolGray.400"
            />
          ))}
          <Divider h={1} my="2" bg="gray.200" />
        </View>

        {/* Footer */}
        <View h={heightScreenFooter} mt="2">
          <BoxTitle titleName="Insterests" />
          <HStack flexWrap="wrap" space={2}>
            {chipData.map((value, index) => (
              <Chip my="1" key={index} title={value} fontSize="md" />
            ))}
          </HStack>
        </View>
      </ScrollView>
    </SafeAreaView>
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
