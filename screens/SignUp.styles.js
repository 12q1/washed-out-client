// screens/SignUp.styles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerContainer: {
        flex: 1
    },
    container: {
        backgroundColor: "#004466",
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30,
        color: 'white',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: "#0086cb",
        borderWidth: 0,
        margin: 15,
        width: "80%",
        borderColor: '#0086cb',
        borderRadius: 100,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

});