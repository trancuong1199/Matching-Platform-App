import React, {useState} from 'react';
import {Text} from 'native-base';

// Component history detail of users
export function HistoryDetail(props) {
  const [seeMore, setSeeMore] = useState(false);
  const desiredLength = 80 //desired length of the substring
  
  // SeeMore/SeeLess of History Detail
  const HandleSeeMore = () => {
    // &nbsp; is space in HTML
    return seeMore ? (
      <>
        <Text fontSize="sm" color="black">
          {props.historyDetailContent.substring(desiredLength)}
        </Text>
        <Text color="coolGray.400" onPress={() => setSeeMore(false)}>
          &nbsp;see less
        </Text>
      </>
    ) : (
      <Text color="coolGray.400">...see more</Text>
    );
  };

  return (
    <Text>
      {props.historyDetailContent.substring(0, desiredLength)}
      {props.historyDetailContent.length > 80 ? (
        <Text onPress={() => setSeeMore(true)}>
          <HandleSeeMore />
        </Text>
      ) : (
        <></>
      )}
    </Text>
  );
}
