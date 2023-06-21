import React, {useState} from 'react';
import {Text} from 'native-base';

// Component history detail of users
export function HistoryDetail(props) {
  const [seeMore, setSeeMore] = useState(false);

  // SeeMore/SeeLess of History Detail
  const HandleSeeMore = () => {
    return seeMore ? (
      <Text fontSize="sm" color="black">
        {' '}
        to BAP Group{' '}
        <Text color="coolGray.400" onPress={() => setSeeMore(false)}>
          see less
        </Text>
      </Text>
    ) : (
      '...see more'
    );
  };

  return (
    <Text>
      {props.historyDetailContent}
      <Text color={props.colorSeeMore}>
        {props.seeMore.length > 80 ? (
          <Text onPress={() => setSeeMore(true)}>
            <HandleSeeMore />
          </Text>
        ) : (
          ''
        )}
      </Text>
    </Text>
  );
}
