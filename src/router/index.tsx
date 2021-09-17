import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import bottomTabNav from './bottomTabNav';

const Root = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name="AmazonClone" component={bottomTabNav} />
      </Root.Navigator>
      <StatusBar backgroundColor="#131921" barStyle="light-content" />
    </NavigationContainer>
  );
}

export default Router;
