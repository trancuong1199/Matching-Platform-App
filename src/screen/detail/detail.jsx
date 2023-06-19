import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Organization} from './userData';

const {
  Box,
  HStack,
  IconButton,
  CloseIcon,
  ThreeDotsIcon,
  Image,
  AspectRatio,
  Text,
  Button,
  Icon,
  Avatar,
  VStack,
  Heading,
  ScrollView,
  Link,
  Row,
  Column,
} = require('native-base');

export default function DetailScreen() {
  return (
    <Box flex={1} safeAreaBottom>
      <ScrollView flex={1}>
        <User />
        <Detail />
      </ScrollView>
    </Box>
  );
}

function User() {
  return (
    <Box w="100%">
      <UserCover />
      <UserAvatar />
      <UserInfo />
    </Box>
  );
}

function UserCover() {
  return (
    <Box>
      <AspectRatio ratio={6 / 3} width="100%" overflow={'hidden'}>
        <Image source={require('../../assets/images/premium.png')} alt="Nothing" />
      </AspectRatio>
      <Button
        position="absolute"
        variant="link"
        bottom={0}
        right={0}
        leftIcon={
          <IconButton
            icon={<Icon size="md" as={MaterialIcons} name="remove-red-eye" />}
          />
        }>
        15,1k views
      </Button>
    </Box>
  );
}

function UserAvatar() {
  const InfoGroup = ({numof, type}) => (
    <VStack alignItems="center" mt="5%">
      <Text fontSize="sm" fontWeight="500">
        {numof}
      </Text>
      <Text fontSize="xs" color="gray.600">
        {type}
      </Text>
    </VStack>
  );

  return (
    <HStack mt={-25} alignItems="center" justifyContent="space-evenly" w="100%">
      <Avatar
        size="xl"
        source={require('../../assets/images/premium.png')}
        borderWidth={4}
        borderColor="primary.300">
        <Avatar.Badge
          p={4}
          alignItems="center"
          justifyContent="center"
          bg="primary.600">
          <Icon
            size="md"
            as={MaterialCommunityIcons}
            name="hand-wave"
            color="white"
          />
        </Avatar.Badge>
      </Avatar>
      <InfoGroup numof="100K" type="Interest" />
      <InfoGroup numof="100" type="Matches" />
      <InfoGroup numof="100K" type="Endorsements" />
    </HStack>
  );
}

function UserInfo() {
  return (
    <VStack px={4} pt={4} space={1}>
      <Heading size="md">Mark Dao</Heading>
      <Text fontSize="md">BAP Group - Kyber Network</Text>
      <HStack space={1} alignItems="center">
        <Icon size="md" as={MaterialIcons} name="location-pin" />
        <Text color="gray.600">Ho Chi Minh, VN</Text>
      </HStack>
      <UserMatches />
      <Button
        alignItems="center"
        variant="subtle"
        mt={2}
        py={2}
        justifyContent="flex-start"
        _text={{
          fontSize: 'md',
        }}
        leftIcon={
          <Icon size="md" as={MaterialCommunityIcons} name="record-circle" />
        }>
        Open for collaboration
      </Button>
      <UserDescription />
    </VStack>
  );
}

function UserDescription() {
  return (
    <Box
      w="100%"
      borderWidth={1}
      borderColor="gray.200"
      mt={2}
      rounded={4}
      p={4}>
      <Text>
        - In my career so far, I have often been involved in market development
        during the start-up period of - Japanese subsidiaries of venture
        companies and foreign-affiliated companies, and I am good at the 01 and
        110 phases. - In March 2021, established a company for inbound x ITx
        regional revitalization and cross-border EC support. In July 2022, he
        established an empathetic video distribution platform company to support
        amateur sports.
      </Text>
    </Box>
  );
}

function UserMatches() {
  return (
    <HStack space={1} alignItems="center" justifyContent="flex-start" mt={2}>
      <Avatar
        size="sm"
        source={require('../../assets/images/premium.png')}
        borderWidth={2}
        borderColor="primary.300"
      />
      <Avatar
        size="sm"
        source={require('../../assets/images/premium.png')}
        borderWidth={2}
        borderColor="primary.300"
      />
      <Text fontSize="xs" color="gray.600">
        Victor, Nathan and 6 others mutual matches
      </Text>
    </HStack>
  );
}

function AppBar() {
  return (
    <HStack
      px={2}
      // py={3}
      safeArea
      position="absolute"
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      <IconButton variant={'unstyled'} icon={<CloseIcon />} />
      <IconButton variant={'unstyled'} icon={<ThreeDotsIcon />} />
    </HStack>
  );
}

function Detail() {
  return (
    <VStack mx={4} mt={4} space={4}>
      <Post />
      <Achivements />
    </VStack>
  );
}

function Achivements() {
  return (
    <Column space={2}>
      <HStack space={2} alignItems="center">
        <Icon size="md" as={MaterialCommunityIcons} name="medal" />
        <Text fontSize="md">Highlight Achievements</Text>
      </HStack>
      <Origanization />
    </Column>
  );
}

function Origanization() {
  return (
    <Column space={2}>
      {Organization.map((item, index) => (
        <UserInfoCard key={index} title={item.title} infos={item.infos} />
      ))}
    </Column>
  );
}
function Personal() {
  return (
    <Center>
      <Text>Personal</Text>
    </Center>
  );
}

function UserInfoCard({icon = 'office-building-outline', title, infos}) {
  return (
    <Row p={4} bg='gray.50' rounded={6} borderWidth={1} borderColor='gray.200'>
      <Icon size="5xl" as={MaterialCommunityIcons} name={icon} mt={2}/>
      <Column ml={4}>
        <Heading size='md'>{title}</Heading>
        {infos.map((info, index) => (
          <Text key={index}>{info}</Text>
        ))}
      </Column>
    </Row>
  );
}

function Post() {
  const PostImage = ({post}) => {
    return <Image size="2xl" source={post} alt="" rounded={4} mr={4} />;
  };

  return (
    <VStack>
      <HStack justifyContent="space-between">
        <HStack space={2} alignItems="center">
          <Icon size="md" as={MaterialIcons} name="calendar-today" />
          <Text fontSize='md'>{'Post(1000)'}</Text>
        </HStack>
        <Link>Match to see</Link>
      </HStack>
      <ScrollView horizontal mt={4} showsHorizontalScrollIndicator={false}>
        <PostImage post={require('../../assets/images/premium.png')} />
        <PostImage post={require('../../assets/images/premium.png')} />
        <PostImage post={require('../../assets/images/premium.png')} />
      </ScrollView>
    </VStack>
  );
}
