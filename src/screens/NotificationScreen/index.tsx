import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import notification from '../../data/notification';

const NotificationScreen = () => {
  return (
    <FlatList
      style={styles.root}
      data={notification.data}
      extraData={notification}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />;
      }}
      keyExtractor={item => {
        return item.id;
      }}
      renderItem={item => {
        const Notification = item.item;
        let attachment = <View />;

        let mainContentStyle;
        if (Notification.attachment) {
          mainContentStyle = styles.mainContent;
          attachment = (
            <Image
              style={styles.attachment}
              source={{uri: Notification.attachment}}
            />
          );
        }
        return (
          <View style={styles.container}>
            <Image source={{uri: Notification.image}} style={styles.avatar} />
            <View style={styles.content}>
              <View style={mainContentStyle}>
                <View style={styles.text}>
                  <Text style={styles.name}>{Notification.name}</Text>
                  <Text>{Notification.text}</Text>
                </View>
                <Text style={styles.timeAgo}>2 hours ago</Text>
              </View>
              {attachment}
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 60,
  },
  img: {
    height: 50,
    width: 50,
    margin: 0,
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  timeAgo: {
    fontSize: 12,
    color: '#696969',
  },
  name: {
    fontSize: 16,
    color: '#1E90FF',
  },
});

export default NotificationScreen;
