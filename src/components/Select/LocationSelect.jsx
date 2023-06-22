import React, {useState} from 'react';
import {Icon, Box, Select, CheckIcon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {locationData} from '../../Services/Data/homeData';

export function LocationSelect() {
  const [location, setLocation] = useState('');

  return (
      <Select
        selectedValue={location}
        fontSize="sm"
        width="90"
        p="0"
        textAlign='center'
        borderWidth="0"
        placeholder="Location"
        placeholderTextColor="text.600"
        dropdownIcon={
          <Icon
            as={<Ionicons name="chevron-down-outline" />}
            size="md"
            color="black"
          />
        }
        _selectedItem={{
          bg: 'coolGray.300',
          endIcon: <CheckIcon size="5" color="green.500" />,
        }}
        onValueChange={itemValue => setLocation(itemValue)}>
        {locationData.map((location, index) => (
          <Select.Item
            key={index}
            label={location.label}
            value={location.value}
          />
        ))}
      </Select>
  );
}

