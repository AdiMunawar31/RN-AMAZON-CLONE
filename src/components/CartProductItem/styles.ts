import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d1d1',
  },

  root: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  img: {
    flex: 3,
    marginVertical: 5,
    height: 120,
    resizeMode: 'contain',
  },

  rightContainer: {
    flex: 4,
    padding: 10,
  },

  title: {
    fontSize: 16,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#e47911'
  },

  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    fontStyle: 'normal',
    color: '#919191',
  },
  qty: {
    marginLeft: 10
  }
});

export default styles;