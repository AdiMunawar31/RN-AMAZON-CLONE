import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 15,
        backgroundColor: '#fff',
        minHeight: '100%'
    },

    row: {
        marginVertical: 5
    },

    picker: {
        borderWidth: 1,
        borderColor: '#b5b5b5',
        borderRadius: 5
    },

    label: {
        fontSize: 16,
        marginVertical: 5,
        marginLeft: 3
    },

    input: {
        borderWidth: 1,
        borderColor: '#b5b5b5',
        borderRadius: 5,
        padding: 10
    },
    err: {
        color: 'red',
        margin: 3,
    }
})

export default styles;