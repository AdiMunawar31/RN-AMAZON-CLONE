import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

// interface NotifProps {
//   name: string;
//   title: string;
//   color: string;
// }
const NotifDetail = () => {
  return (
    <View style={styles.root}>
      <View style={styles.img}>
        <Icon name={'ios-stats-chart'} size={26} color={'#fd9a15'} />
      </View>
      <View style={styles.right}>
        <Text style={styles.text}>D2YZON Notification</Text>
        <Text numberOfLines={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nemo
          aperiam, provident expedita voluptatem minima quaerat explicabo animi,
          rem et error magni sapiente deserunt repellat eligendi veritatis
          ratione, optio vitae quos similique. Repellat nobis quia inventore
          reiciendis facilis necessitatibus aliquid.
        </Text>
        <Text style={styles.time}>31 Minutes Ago...</Text>
      </View>
    </View>
  );
};

export default NotifDetail;
