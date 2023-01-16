import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textInput: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 10,
        width: 118,
        height: 65,
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

    whitecircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'white',
    },

    border: {
        borderWidth: 1,
        borderRadius: 6,
    },

    dark: {
        backgroundColor: "#404040",
        color: 'white',
        borderColor : 'white',
      },

    light: {
        backgroundColor: "white",
      },

    heading: {
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 40,
        marginBottom: 20,
    },

    button: {
        padding: 20,
        color: 'red',
        borderWidth: 1,
        borderRadius: 6,
        width: 118,
        alignItems: 'center',
    },

    low: {
        color: "#0FFF50",
    },
    medium: {
        color: "yellow",
    },
    high: {
        color: "red",
      },

});