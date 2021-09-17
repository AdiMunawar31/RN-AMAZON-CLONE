import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {SafeAreaView, View, TextInput} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

interface HeaderProps {
  searchValue: string;
  setSearchValue: () => void;
}
const Header = ({searchValue, setSearchValue}: HeaderProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          padding: 2,
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginLeft: 10}}>
          <Icon name="search" size={24} color="#000" />
        </View>
        <TextInput
          placeholder="Seach..."
          style={{height: 40, marginLeft: 5, fontSize: 16, marginTop: 5}}
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};
function HomeStack() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        ),
      }}>
      <Stack.Screen name="Home">
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{title: 'Product Details'}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
