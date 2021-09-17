import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 120,
        alignItems: 'center',
        padding: 1,
        marginVertical: 1
    },
    img: {
        flex: 2,
        alignItems: 'center'
    },
    right: {
        flex: 5,
        paddingRight: 20,
        padding: 5
    },
    text: {
        fontWeight: '600',
        marginBottom: 3
    },
    time: {
        fontWeight: '300',
        marginTop: 7,
        fontSize: 13
    }
})
export default styles;