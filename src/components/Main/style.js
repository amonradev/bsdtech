import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Imagem: {
        height: 800,
        width: "120%",
        marginLeft: 75,
    },
    TextoUsuario: {
        fontWeight: "bold",
        fontSize: 28,
        color: "#fff",
        textAlign: "center",
        marginTop: -120,
        marginLeft: -90
    },
    Nome: {
        fontWeight: "bold",
        fontSize: 28,
        color: "#fff",
        textAlign: "center",
        marginTop: 0,
        marginLeft: -108
    },
    Button: {
        backgroundColor: "#273d96",
        borderRadius: 12,
        width: "33%",
        marginLeft: 16,
        height: 80,
    },
    TextButton: {
        color: "#fff",
        textAlign: "center",
        fontSize: 22,
        padding: 20
    },
    ContainerCima: {
        flexDirection: "row",
        padding: 10,
    },
    ContainerBaixo: {
        flexDirection: "row",
        padding: 10
    },
    Maps: {
        width: "65%",
        backgroundColor: "#fff",
        marginLeft: 30,
        borderRadius: 6,
        height: 65,
        marginTop: 6
    }
})