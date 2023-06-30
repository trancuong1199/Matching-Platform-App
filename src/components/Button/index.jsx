import React from 'react';
import {
    Text,
    Button,
} from 'native-base';

export const ButtonLogin = ({title, onPress = () => {}}) => {
    return (
        <Button onPress={onPress} h={12} rounded={25} mt={8}>
            <Text color="white" fontSize="lg">
                {title}
            </Text>
        </Button>
    )
}