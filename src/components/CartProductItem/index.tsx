import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProps, item} = cartItem;

  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.wrapper}>
      <View style={styles.root}>
        {/* Render Product Component */}
        <Image style={styles.img} source={{uri: item.image}} />

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>

          <Text style={styles.price}>
            ${item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </Text>
          <Text style={{color: '#05b505'}}>In Stock</Text>
        </View>
      </View>
      <View style={styles.qty}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
