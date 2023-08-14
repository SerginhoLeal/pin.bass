import React from 'react';

import { useRoute } from '@react-navigation/native';

import * as Styles from './styles';
import { FlatList, useWindowDimensions, Image } from 'react-native';

export default function Target(){
  const { params } = useRoute();

  const { width, height } = useWindowDimensions();

  return (
    <Styles.Container>
      <Image
        style={{ position: 'absolute', width: '100%', height: height }}
        source={{ uri: params.sample_url }}
        resizeMode='cover'
        blurRadius={5}
      />
      <FlatList
        data={[0, 1, 2]}
        keyExtractor={(_, index) => index.toString()}
        scrollEventThrottle={16}
        pagingEnabled
        decelerationRate={'normal'} // fast
        renderItem={({ item }) => {
          return (
            <Styles.Image
              source={{ uri: params.sample_url }}
              height={height}
              resizeMode='contain'
            />
          )
        }}
      />
    </Styles.Container>
  )
}