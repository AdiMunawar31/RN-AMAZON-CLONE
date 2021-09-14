import React, {useState} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(0);

  console.log(selectedOption);

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>{product.title}</Text>

        {/* Image Carousel */}
        <ImageCarousel images={product.images} />

        {/* Option Selector */}
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={itemValue => setSelectedOption(itemValue)}>
            {product.options.map(option => (
              <Picker.Item label={option} value={option} />
            ))}
          </Picker>
        </View>

        {/* Price */}
        <Text style={styles.price}>
          from ${product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
          )}
        </Text>

        {/* Documentation */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Quantity Selector */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        {/* Button */}
        <Button
          text="Add to cart"
          onPress={() => console.warn('Add to cart')}
        />
        <Button text="Buy now" onPress={() => console.warn('Buy Now')} />
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
