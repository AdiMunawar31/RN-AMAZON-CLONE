import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

function ShoppingCartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={ShoppingCartScreen}
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen name="Address" component={AddressScreen} />
    </Stack.Navigator>
  );
}

export default ShoppingCartStack;
