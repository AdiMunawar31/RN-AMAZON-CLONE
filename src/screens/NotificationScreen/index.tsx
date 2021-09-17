import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Notif from '../../components/Notif';
import NotifDetail from '../../components/NotifDetail';
import notification from '../../data/notification';

const NotificationScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrap}>
        <Notif name="pricetags" title="Promo D2YZON" color="#e69e3e" />
        <Notif name="newspaper" title="Feed and Live" color="#74eaf2" />
        <Notif name="wallet" title="D2YZON Payment" color="#de4949" />
        <Notif
          name="notifications-outline"
          title="Contact and Friend"
          color="#48cf7c"
        />
        <Notif name="ios-shield-sharp" title="Info D2YZON" color="#ed7051" />
      </View>
      <Text style={styles.text}>Notification Information</Text>
      <NotifDetail />
      <NotifDetail />
      <NotifDetail />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 5,
  },
  text: {
    padding: 10,
    fontSize: 16,
    marginBottom: 5,
  },
});

export default NotificationScreen;
