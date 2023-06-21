import {Text, Badge} from 'native-base';

// Render info in footer of HomeScreen
function Chip(props) {
  return (
    <Badge my={props.my} colorScheme="coolGray">
      <Text>{props.title}</Text>
      {props.icon}
    </Badge>
  );
}

export default Chip;
