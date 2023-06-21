import {Heading} from 'native-base';

// Render titles of HomeScreen
export function BoxTitle(props) {
    return (
      <Heading fontSize="xl" bold>
        {props.titleName}
      </Heading>
    );
}