import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    marginVertical: 5,
  },

  img: {
    flex: 3,
    resizeMode: 'contain',
  },

  rightContainer: {
    flex: 4,
    padding: 10,
  },

  title: {
    fontSize: 19,
  },

  ratingsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },

  star: {
    marginHorizontal: 2,
  },

  totalRate: {
    marginHorizontal: 6,
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
});

export default styles