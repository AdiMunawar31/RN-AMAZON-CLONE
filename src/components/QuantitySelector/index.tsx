import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

interface QuantityProps {
  quantity: number;
  setQuantity: any;
}
const QuantitySelector = ({quantity, setQuantity}: QuantityProps) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
