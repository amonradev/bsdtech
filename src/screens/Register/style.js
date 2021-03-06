import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Box: {
        alignItems: "center",
        marginTop: "18%",
        flex: 1,
        justifyContent: "center",
    },
    Button: {
        backgroundColor: "#273d96",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginTop: 20
    },
    TextButton: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        padding: 10
    },
    input: {
        width: "80%",
        borderRadius: 10,
        borderColor: "#ffffff",
        backgroundColor: "#f6f6f6",
        height: 45,
        margin: 6,
        marginTop: 15,
        borderWidth: 1,
        paddingLeft: 10,
    },
    TextInput: {
        color: "#fff",
        fontSize: 15,
        placeholderTextColor: "#b7babd "
    },
    TextError: {
        color: "#9B2C2C",
        display: "flex",
        marginTop: -8,
        marginLeft: -85
    },
    Titulo: {
        color: "#fff",
        fontSize: 40,
        margin: 28
    },
    CheckBox: {
        alignSelf: "center"
    },
    TextCheck: {
        margin: 8

    },
    FlexCheck: {
        flexDirection: "row",
        marginBottom: 20
    }
})