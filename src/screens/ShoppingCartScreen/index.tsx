import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import styles from './styles';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (sum, product) => sum + product.item.price * product.quantity,
    0,
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.top}>
            <View style={styles.wrap}>
              <Text style={styles.subtotal}>Subtotal </Text>
              <Text style={styles.text}>${totalPrice.toFixed(2)}</Text>
            </View>
            <Button
              text={`Proced to Checkout (${products.length} item)`}
              onPress={() => console.warn('Add to cart')}
              color={'#f2c624'}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;
