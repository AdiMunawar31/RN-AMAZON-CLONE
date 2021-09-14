import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 140,
        borderWidth: 1,
        borderColor: '#e3e3e3'
    },

    button: {
        width: 38,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cbccd1'
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007eb9'
    }
})

export default styles;