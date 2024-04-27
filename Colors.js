import { Appearance, StyleSheet } from "react-native"

export const theme = Appearance.getColorScheme() === 'dark' ? 'black' : 'white'
export const textColor = theme
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
    InputBox: {
        backgroundColor: theme === 'black' ? '#fff' : '#000',
        width: '100%',
        alignContent: 'stretch',
        justifyContent: 'center',
        color: theme === 'black' ? '#000' : '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
    },
})
