import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 130,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        marginBottom: 10,
        borderRadius: 3
    },

    button: {
        width: 40,
        height: 31,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#f0f0f0',
        backgroundColor: '#f7f7f7'
    },

    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    
    quantity: {
        fontSize: 18,
        color: '#4f90f7'
    }
})

export default styles;