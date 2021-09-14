import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
    },
    image: {
        height: 250,
        margin: 10,
        resizeMode: 'contain',
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        margin: 5,
        width: 10,
        height: 10,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        borderRadius: 10,
        backgroundColor: '#eaeaea'
    }
})

export default styles;