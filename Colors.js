import { Appearance, StyleSheet } from "react-native"

export const theme = 'black'
export const backgroundColor = theme === 'black' ? 'white' : 'black'

export const Styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: theme === 'black' ? '#000' : '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        gap: 10,
    },
    MainText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: theme === 'black' ? '#fff' : '#000',
    },
    MainSubText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: theme === 'black' ? '#fff' : '#000',
    },
    InputBox: {
        width: '95%',
        borderWidth: 1,
        borderTopColor: theme === 'black' ? '#000' : '#fff',
        borderLeftColor: theme === 'black' ? '#000' : '#fff',
        borderRightColor: theme === 'black' ? '#000' : '#fff',
        borderBottomColor: theme === 'black' ? '#fff' : '#000',
    },
    Input: {
        width: '100%',
        color: theme === 'black' ? '#fff' : '#000',
        alignSelf: 'center',
    }
})
