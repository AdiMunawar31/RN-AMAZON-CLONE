import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface NotifProps {
  name: string;
  title: string;
  color: string;
}
const Notif = ({name, title, color}: NotifProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.img}>
        <Icon name={name} size={26} color={color} />
      </View>
      <View style={styles.right}>
        <Text style={styles.text}>{title}</Text>
        <Text numberOfLines={1}>Belum ada notifikasi</Text>
      </View>
    </View>
  );
};

export default Notif;
