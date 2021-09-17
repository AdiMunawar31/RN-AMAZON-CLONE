import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import bottomTabNav from './bottomTabNav';

const Root = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name="AmazonClone" component={bottomTabNav} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default Router;
