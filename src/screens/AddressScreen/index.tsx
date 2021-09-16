import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';

const AddressScreen = () => {
  const countries = countryList.getData();

  const [selectedOption, setSelectedOption] = useState(countries[10].code);

  /* State Input */
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  /* State Error */
  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorAddress, setErrorAddress] = useState('');
  const [errorCity, setErrorCity] = useState('');

  /* Conditional Validation */
  const onCheckOut = () => {
    if (errorName || errorPhone || errorAddress || errorCity) {
      Alert.alert('Fix all field errors before checkout');
      return;
    }

    if (!fullname || !phone || !address || !city) {
      Alert.alert('Please fill all field!');
      return;
    }

    console.warn('Successfully Checkout!');
  };

  /* Validate */
  const validateName = () => {
    if (fullname.length < 3) {
      setErrorName('Fullname is too short!');
    }
  };
  const validatePhone = () => {
    if (phone.length < 12) {
      setErrorPhone('Phone is too short!');
    }
  };
  const validateAddress = () => {
    if (address.length < 3) {
      setErrorAddress('Address is too short!');
    }
  };
  const validateCity = () => {
    if (city.length < 3) {
      setErrorCity('City is too short!');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={styles.label}>Select Country</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={selectedOption}
              onValueChange={itemValue => setSelectedOption(itemValue)}>
              {countries.map((country, i) => (
                <Picker.Item
                  label={country.name}
                  value={country.code}
                  key={i}
                />
              ))}
            </Picker>
          </View>
        </View>

        {/* Full Name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name ( First and Last Name )</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name :"
            value={fullname}
            onKeyPress={validateName}
            onChangeText={text => {
              setFullname(text);
              setErrorName('');
            }}
          />
          {!!errorName && <Text style={styles.err}>{errorName}</Text>}
        </View>

        {/* Phone Number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number :"
            value={phone}
            keyboardType={'phone-pad'}
            onEndEditing={validatePhone}
            onChangeText={text => {
              setPhone(text);
              setErrorPhone('');
            }}
          />
          {!!errorPhone && <Text style={styles.err}>{errorPhone}</Text>}
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address :"
            value={address}
            onKeyPress={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setErrorAddress('');
            }}
          />
          {!!errorAddress && <Text style={styles.err}>{errorAddress}</Text>}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City :"
            value={city}
            onKeyPress={validateCity}
            onChangeText={text => {
              setCity(text);
              setErrorCity('');
            }}
          />
          {!!errorCity && <Text style={styles.err}>{errorCity}</Text>}
        </View>

        <View style={styles.row}>
          <Button text={'Check Out'} onPress={onCheckOut} color={'#f2c624'} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
