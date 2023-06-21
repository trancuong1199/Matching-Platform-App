import React, {useContext} from 'react';
import {
  Button,
  Box,
  HStack,
  IconButton,
  Icon,
  Text,
  ScrollView,
  Divider,
  CloseIcon,
  Badge,
  VStack,
  Heading,
  Link,
  Spacer,
  Pressable,
  Image,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TrendySearch, SortBy, Filters} from './filterData';
import {NavigationContext} from '@react-navigation/native';

export default function FilterScreen() {
  return (
    <SafeAreaView flex={1}>
      <Box flex={1} bg="white">
        <AppBar />
        <Divider />
        <ScrollView flex={1} px={4} showsHorizontalScrollIndicator={false}>
          <FilterCard
            key="-2"
            heading={TrendySearch.name}
            data={TrendySearch.values}
          />
          <PremiumCard />
          <Spacer size={4} />
          <Divider />
          <FilterCard
            key="-1"
            heading={SortBy.name}
            data={SortBy.values}
            onMorePress={() => console.log(SortBy.id)}
            onItemClear={id => console.log(id)}
          />
          <Divider />
          {Filters.map((item, index) => (
            <FilterCard
              key={index}
              heading={item.name}
              data={item.values}
              onMorePress={() => console.log(item.id)}
              onItemClear={id => console.log(id)}
            />
          ))}
          <Traits />
        </ScrollView>
        <Divider />
        <BottomButton />
      </Box>
    </SafeAreaView>
  );
}

function AppBar() {
  const navigation = useContext(NavigationContext);

  return (
    <HStack
      px="1"
      py="3"
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      <HStack alignItems="center">
        <HStack flex={1}>
          <IconButton variant={'unstyled'} icon={<CloseIcon />} onPress={navigation.goBack}/>
        </HStack>
        <Text fontSize="20" fontWeight="medium">
          Filter
        </Text>
        <HStack flex={1} />
      </HStack>
    </HStack>
  );
}

function PremiumCard() {
  return (
    <Box alignItems="center">
      <Pressable
        onPress={() => console.log("I'm Pressed")}
        rounded="8"
        bg="primary.50"
        p="4">
        <HStack w="100%" alignItems="center">
          <Image
            source={require('../../assets/images/premium.png')}
            alt="Nothing"
            size="md"
            rounded={8}
          />
          <VStack flex={1} ml={4} space={1} alignItems="flex-start">
            <Heading fontSize="sm">Premium Member</Heading>
            <Text fontSize="xs">
              Try Premium to filter more axactly and experience a spectrum of
              matches
            </Text>
            <Button size="xs" variant="link" alignItem="center" p={0}>
              14 days free trial
            </Button>
          </VStack>
        </HStack>
      </Pressable>
    </Box>
  );
}

function BottomButton() {
  return (
    <HStack px={8} py={4} justifyContent="space-between" alignItems="center">
      <Link _text={{fontWeight: '500'}}>Reset all filters</Link>
      <Button _text={{fontWeight: '500'}} px={12}>
        Find
      </Button>
    </HStack>
  );
}

function Traits() {
  return (
    <VStack py={4} px={2} alignItem="flex-start">
      <HStack justifyContent="flex-start" alignItems="center">
        <Heading size="md">Traits</Heading>
        <IconButton icon={<Icon size="md" as={MaterialIcons} name="star" />} />
      </HStack>
      <Button p={0} mt={2} alignSelf="flex-start" variant="link">
        Upgrade to Premium Package
      </Button>
    </VStack>
  );
}

function FilterCard({heading, onMorePress, data, onItemClear}) {
  return (
    <VStack py={4} px={2}>
      <HStack justifyContent="space-between" alignItems="center">
        <Heading size="md">{heading}</Heading>
        {onMorePress ? (
          <Link variant="link" colorScheme="coolGray" onPress={onMorePress}>
            See more
          </Link>
        ) : null}
      </HStack>
      <HStack flexWrap="wrap" space={3} py={2}>
        {data.map((item, index) => (
          <Chip
            key={index}
            onClear={onItemClear ? () => onItemClear(item.id) : null}
            colorScheme={item.highlight ? 'info' : 'coolGray'}>
            {item.title}
          </Chip>
        ))}
      </HStack>
    </VStack>
  );
}

function Chip({children, onClear, colorScheme = 'coolGray'}) {
  return (
    <Badge
      colorScheme={colorScheme}
      rightIcon={
        onClear ? (
          <IconButton
            colorScheme={colorScheme}
            p={0}
            pl={1}
            icon={<CloseIcon size="3" name="clear" onPress={onClear} />}
          />
        ) : null
      }>
      {children}
    </Badge>
  );
}
