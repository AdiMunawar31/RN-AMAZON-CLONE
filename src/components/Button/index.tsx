import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}
const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
