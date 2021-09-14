import React, {useState} from 'react';
import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import styles from './styles';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {
  const [active, setActive] = useState(1);
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        // viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
      />

      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === active ? '#e8ba41' : '#eaeaea',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
