// screens/MyAccount.styles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "#004466",
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: "#0086cb",
        borderColor: "#0086cb",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        width: "80%",
        alignSelf: 'center',
        justifyContent: 'center'
    },
});