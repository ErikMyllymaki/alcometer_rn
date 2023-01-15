import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        padding: 5,
        borderWidth: 1,
        marginBottom: 10
    },

    result: {
        color: '#b00000',
        fontSize: 18,
        fontWeight: "bold"
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    radio: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    circle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'black',
    },

    border: {
        borderWidth: 1,
    },

});