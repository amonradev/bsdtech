import React from "react"
import {  ScrollView } from "react-native"

export const Scroll = ({ children }) => {

    return (
            <ScrollView style={{ backgroundColor: "#1a202c", flex: 1,}}>
                {children}
            </ScrollView>
    )
}