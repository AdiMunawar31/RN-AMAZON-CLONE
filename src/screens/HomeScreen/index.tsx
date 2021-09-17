import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

export default HomeScreen;
