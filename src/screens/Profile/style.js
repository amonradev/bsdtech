import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    ImagemPerfil: {
        height: 320,
        marginTop: 115,
        // marginLeft: 100,
        borderRadius: 8
    },
    TextoPerfil: {
        color: "#fff",
        fontSize: 36,
        marginTop: 15,
        textAlign: "center",
    },
    PerfilContainer: {
        alignItems: "center",
        right: 20,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        width: "60%",
    },
    ContainerPerfil: {
        flexDirection: "row",
    },
    ContainerCamera: {
        backgroundColor: "#273d96",
        borderRadius: 100,
        padding: 5,
        position: "absolute",
        top: 100,
        left: -20,
        zIndex: 9999
    },
    ButtonBack: {
        right: 80,
    }
})