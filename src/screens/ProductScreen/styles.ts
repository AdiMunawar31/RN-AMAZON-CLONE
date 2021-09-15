import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 15,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 5
  },

  picker: {
    backgroundColor: '#ffeedb',
    marginTop: 20,
    borderRadius: 5
  },
    
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffa41c'
  },

  oldPrice: {
    fontSize: 13,
    textDecorationLine: 'line-through',
    fontStyle: 'normal',
    color: '#a1a1a1',
    marginLeft: 5
  },

  description: {
      marginVertical: 30,
      marginHorizontal: 7,
      fontSize: 13,
      lineHeight: 20,
      width: '95%',
      textAlign: 'left'
  },
})

export default styles;