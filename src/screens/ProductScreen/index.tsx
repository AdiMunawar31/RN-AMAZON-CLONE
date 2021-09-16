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
  const [quantity, setQuantity] = useState(1);

  console.log(selectedOption);

  return (
    <ScrollView>
      <View style={styles.root}>
        {/* Image Carousel */}
        <ImageCarousel images={product.images} />

        <Text style={styles.title}>{product.title}</Text>

        {/* Price */}
        <Text style={styles.price}>
          ${product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
          )}
        </Text>

        {/* Option Selector */}
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={itemValue => setSelectedOption(itemValue)}>
            {product.options.map((option, i) => (
              <Picker.Item label={option} value={option} key={i} />
            ))}
          </Picker>
        </View>

        {/* Documentation */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Quantity Selector */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        {/* Button */}

        <Button
          text="Add to Cart"
          onPress={() => console.warn('Add to cart')}
          color={'#f2c624'}
        />
        <Button
          text="Buy Now"
          onPress={() => console.warn('Buy Now')}
          color={'#ffa41c'}
        />
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
