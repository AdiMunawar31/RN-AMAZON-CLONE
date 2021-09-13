import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ProductItem from '../../components/ProductItem';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

export default HomeScreen;
