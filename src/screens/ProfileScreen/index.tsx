import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: 'https://img.icons8.com/color/70/000000/cottage.png',
          title: 'Order',
        },
        {
          id: 2,
          image:
            'https://img.icons8.com/color/70/000000/administrator-male.png',
          title: 'Like',
        },
        {
          id: 3,
          image: 'https://img.icons8.com/color/70/000000/filled-like.png',
          title: 'Comment',
        },
        {
          id: 4,
          image: 'https://img.icons8.com/color/70/000000/facebook-like.png',
          title: 'Download',
        },
        {
          id: 5,
          image: 'https://img.icons8.com/color/70/000000/shutdown.png',
          title: 'Edit',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar3.png',
              }}
            />
            <Text style={styles.name}>Jane Doe</Text>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            style={styles.container}
            data={this.state.data}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View style={styles.box}>
                    <Image style={styles.icon} source={{uri: item.image}} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                      style={styles.btn}
                      source={{
                        uri: 'https://img.icons8.com/customer/office/40',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: '#232f3e',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#fd9a15',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 4,
  },
  btn: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: '#E6E6FA',
  },
  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    alignItems: 'center',
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: '#20B2AA',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    color: '#e8e8e8',
  },
});
