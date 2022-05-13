import { StyleSheet, StatusBar } from "react-native"

export const styles =  StyleSheet.create({
    footer: {
        backgroundColor: 'grey',
        padding: '1%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    containerTeam: {
        flex: 1,
    },
    header: {
        backgroundColor: 'grey',
        padding: '1%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
    },
    content: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    removeBtn:{
        position: 'absolute',
        right: 10,
        fontSize: 40,
        textAlign:'center',
        paddingLeft: 10,
        paddingRight:10,
        borderWidth:2,
        borderColor: "black",
        borderRadius: 10
    },
})