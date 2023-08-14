import React from 'react';
import { useWindowDimensions } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { Masonry } from '@common';
import { api } from '@services';
import { DataProps } from '@interfaces';

import * as Styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface Data {
  left: Array<DataProps>;
  right: Array<DataProps>;
};

export default function Home() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const [docs, setDocs] = React.useState<Data>({} as Data);

  const handleSelectItem = (log: any) => {
    navigation.navigate('Target', log)
  }

  React.useEffect(() => {
    (async() => {
      const { data }: { data: DataProps[] } = await api.get('/data');

      let object: Data = {
        left: [],
        right: []
      };

      let left = 0;
      let right = 0;

      if(data.length === 0) return null;

      data.forEach(element => {
        const height = element.sample_height / (element.sample_width / (width / 2.04));

        if(right >= left) {
          left += height;
          object.left.push(element);
        } else if(left > right) {
          right += height;
          object.right.push(element)
        };
      });

      setDocs(object)
    })();
  }, []);

  return (
    <Styles.Container>
      <Masonry data={docs} screen='home' handleSelectItem={handleSelectItem} />
    </Styles.Container>
  );
}