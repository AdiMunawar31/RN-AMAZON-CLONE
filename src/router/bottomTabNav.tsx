import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ExploreScreen from '../screens/ExploreScreen';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const bottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: '#303030',
        activeTintColor: '#e85f10',
        tabStyle: {
          margin: 5,
        },
      }}>
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="home" size={23} color={color} />
            ) : (
              <Icon name="home-outline" size={23} color={color} />
            ),
        }}
      />

      <Tab.Screen
        component={ExploreScreen}
        name="Explore"
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="ios-compass" size={23} color={color} />
            ) : (
              <Icon name="ios-compass-outline" size={23} color={color} />
            ),
        }}
      />

      <Tab.Screen
        component={ShoppingCartStack}
        name="Shopping Cart"
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="cart" size={23} color={color} />
            ) : (
              <Icon name="cart-outline" size={23} color={color} />
            ),
        }}
      />

      <Tab.Screen
        component={NotificationScreen}
        name="Notification"
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="notifications" size={23} color={color} />
            ) : (
              <Icon name="notifications-outline" size={23} color={color} />
            ),
          tabBarBadge: '9+',
        }}
      />

      <Tab.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="person" size={23} color={color} />
            ) : (
              <Icon name="person-outline" size={23} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default bottomTabNav;
