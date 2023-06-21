import React, {useRef} from 'react';
import {
  View,
  Icon,
  Row,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-deck-swiper';

import {
  contentData,
} from '../../Services/Data/homeData';
import {ImageSlider} from '../Slider';

// Carousel
export function ImageCarousel() {
    const swiperRef = useRef();
  
    return (
      <View justifyContent="center" alignItems="center">
        <Swiper
          ref={swiperRef}
          cards={contentData}
          infinite
          renderCard={item => (
            <ImageSlider
              images={item.images}
              name={item.name}
              position={item.position}
              followers={item.followers}
              stars={item.stars}
            />
          )}
          disableTopSwipe
          verticalSwipe={false}
          disableBottomSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity
          stackSize={2}
          stackScale={8}
          stackSeparation={3}
          backgroundColor="transparent"
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  borderWidth: 4,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: -15,
                },
              },
            },
            right: {
              title: 'MATCH',
              style: {
                label: {
                  borderWidth: 4,
                  borderColor: 'green',
                  color: 'green',
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 15,
                },
              },
            },
          }}
        />
  
        <Row
          flexDirection="row"
          justifyContent="space-around"
          width="100%"
          top="108%"
          px="60">
          <Icon
            as={<MaterialCommunityIcons name="close-circle-outline" />}
            size="4xl"
            color="red.600"
            onPress={() => swiperRef.current.swipeLeft()}
          />
          <Icon
            size="4xl"
            color="green.500"
            as={<MaterialCommunityIcons name="hand-wave-outline" />}
            style={{
              transform: [{rotate: '290deg'}],
            }}
            onPress={() => swiperRef.current.swipeRight()}
          />
        </Row>
      </View>
    );
  }

