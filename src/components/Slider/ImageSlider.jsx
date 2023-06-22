import React, {useCallback, useState, useRef} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {
  Icon,
  Text,
  HStack,
  Box,
  Image,
  Center,
  Row,
  Pressable,
  VStack,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ImageDetail } from '../Detail';

// Render information of users (images, name, position, stars, followers)
export function ImageSlider(props) {
  const heightScreen = Dimensions.get('window').height;
  const heightScreenContent = (heightScreen / 100) * 60;
  const widthScreen = Dimensions.get('window').width;
  const [indexImage, setIndexImage] = useState(0);
  const sliderRef = useRef();

  // Get index of a image
  const onScrollToGetIndex = useCallback(event => {
    // const slideSize = event.nativeEvent.layoutMeasurement.width (get widthScreen)
    const index = event.nativeEvent.contentOffset.x / (widthScreen - 20);
    setIndexImage(Math.floor(index));
  }, []);

  // Previous a image when on click left side of image
  const onPrevious = () => {
    if (indexImage <= 0) return;
    sliderRef.current.scrollTo({
      x: widthScreen * (indexImage - 1),
      animated: true,
    });
  };

  // Next a image when on click right side
  const onNext = () => {
    if (indexImage >= props.images.length - 1) return;
    sliderRef.current.scrollTo({
      x: widthScreen * (indexImage + 1),
      animated: true,
    });
  };

  // Handle Progress: change color progress when move a image
  const HandleProgress = props => {
    const lenghtOfImages = props.arrImages.length;
    const widthOfPadding = 36; // padding of layout and padding of progress (20px + 16px)
    const widthOfSpaceProgress = 8; // convert from dp to pixel (2dp = 8px)

    return (
      <HStack position="absolute" p="2" space={2}>
        {props.arrImages.map((_, index) =>
          lenghtOfImages > 1 ? (
            <Center
              key={index}
              bgColor={index === indexImage ? 'light.100' : 'light.400'}
              w={
                (widthScreen -
                  widthOfPadding -
                  (lenghtOfImages - 1) * widthOfSpaceProgress) /
                lenghtOfImages
              }
              h="1"
              rounded="md"
            />
          ) : null,
        )}
      </HStack>
    );
  };

  return (
    <VStack
      rounded="xl"
      overflow="hidden"
      w={widthScreen - 20}
      h={heightScreenContent}
      top="-60" left="-20"
      space={5}>
      <Box rounded="xl" overflow="hidden">
        <ScrollView
          horizontal
          pagingEnabled
          ref={sliderRef}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          onScroll={onScrollToGetIndex}>
          {props.images.map((image, index) => {
            return (
              <Box key={index}>
                <Image source={image} h="100%" w={widthScreen} alt="image" />
                <HandleProgress arrImages={props.images} />
                <ImageDetail stars={props.stars} followers={props.followers}/>
              </Box>
            );
          })}
        </ScrollView>
        <Row position="absolute" top="0" left="0" right="0" bottom="0">
          <Pressable flex="1" onPress={onPrevious} />
          <Pressable flex="1" onPress={onNext} />
        </Row>
        <Center
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          py="2"
          px="3"
          alignItems="flex-start"
          w="100%">
          <HStack alignItems="center">
            <Text fontSize="xl" color="white" fontWeight="700">
              {props.name}
            </Text>
            <Icon
              as={<Ionicons name="checkmark-outline" />}
              size="md"
              color="white"
              rounded="full"
              bg="info.500"
              ml="3"
            />
          </HStack>
          <Text color="white">{props.position}</Text>
        </Center>
      </Box>
    </VStack>
  );
}
