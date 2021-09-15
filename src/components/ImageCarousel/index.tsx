import React, {useCallback, useState} from 'react';
import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import styles from './styles';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {
  const [active, setActive] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const onFlatlistChange = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActive(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 50}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 25}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistChange}
      />

      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === active ? '#ffa41c' : '#eaeaea',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
