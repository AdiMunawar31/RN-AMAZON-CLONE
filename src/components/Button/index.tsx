import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  color?: string;
}
const Button = ({text, onPress, color}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.btn, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
