import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ProductItem = () => {
  return (
    <View style={styles.root}>
      {/* Render Product Component */}
      <Image
        style={styles.img}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
        }}
      />

      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          Clean Architecture: A Craftsman's Guide to Software Structure and
          Design
        </Text>

        <View style={styles.ratingsContainer}>
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star-half-o"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star-o"
            size={18}
            color={'#e47911'}
          />

          <Text style={styles.totalRate}>31,026</Text>
        </View>

        <Text style={styles.price}>
          from $13.57
          <Text style={styles.oldPrice}> $16.45</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
