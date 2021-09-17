import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 70,
        alignItems: 'center',
        padding: 1,
        marginVertical: 1
    },
    img: {
        flex: 1,
        alignItems: 'center'
    },
    right: {
        flex: 4,
        padding: 5
    },
    text: {
        fontWeight: '600'
    }
})
export default styles;