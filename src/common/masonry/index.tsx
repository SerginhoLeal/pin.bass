import * as React from 'react';
import { Image, useWindowDimensions, FlatList, Text, TouchableNativeFeedback } from 'react-native';
import * as Styles from './styles';

// import { Image } from '../image';
// import { Empty } from '../empty';
// import { Icon } from '../svg';

type Props = {
  data: {
    left: Array<any>;
    right: Array<any>;
  };
  screen: 'home' | 'local';
  handleSelectItem: ({}: any) => void;
};

export const Masonry: React.FC<Props> = ({ data, screen, handleSelectItem }: Props) => {
  const { width, height } = useWindowDimensions();
  
  // if(data.length === 0 && screen === 'home') {
  //   return <Icon name='loading' color='#888' />
  // };

  if(Object.keys(data).length === 0){
    return <Text>Loading</Text>;
    // return <Empty />
  };

  return (
    <FlatList
      data={[data]}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <Styles.Content>
            <Styles.Division>
              {item.left.map(items => (
                <TouchableNativeFeedback key={items.id} onPress={() => handleSelectItem(items)}>
                  <Image
                    height={items.sample_height / (items.sample_width / (width / 2.04))}
                    resizeMethod='resize'
                    style={{ borderRadius: 2, marginBottom: 2 }}
                    source={{ uri: items.sample_url }}
                  />
                </TouchableNativeFeedback>
              ))}
            </Styles.Division>
            <Styles.Division>
              {item.right.map(items => (
                <TouchableNativeFeedback key={items.id} onPress={() => handleSelectItem(items)}>
                  <Image
                    height={items.sample_height / (items.sample_width / (width / 2.04))}
                    resizeMethod='resize'
                    style={{ borderRadius: 2, marginBottom: 2 }}
                    source={{ uri: items.sample_url }}
                  />
                </TouchableNativeFeedback>
              ))}
            </Styles.Division>
          </Styles.Content>
        )
      }}
    />
  );
};