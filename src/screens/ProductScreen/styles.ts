import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 18
  },

  picker: {
    backgroundColor: '#eaeaea',
    marginVertical: 25,
    borderRadius: 5
  },
    
  price: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    fontStyle: 'normal',
    color: '#990',
  },

  description: {
      marginVertical: 20,
      lineHeight: 20
  },
})

export default styles;