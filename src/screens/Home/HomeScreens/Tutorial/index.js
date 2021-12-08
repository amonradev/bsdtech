import React from "react"
import { View, Text } from 'react-native'
import { BackTop } from "../../../../components/HomeScreensComponents/BackTop"
import { BackgroundImage } from "../../../../components/Main/BackgroundImg"
import { ContainerTutos } from "../../../../components/Main/ContainerTutos"
import { Scroll } from "../../../../components/Scroll"

export const Tutorial = ({navigation}) => {

    const primeiraDesc = "Apple lança versão do MacOS denominada monterey, depois de muitos meses de testes finalmente saiu da versão beta e é oficiamente lançada !!"
    const segundaDesc = "Nesse tutorial nós ensinamos como adquirir o appleCare+ pela internet utilizando um cartão brasileiro ou um cartão americano de uma fintech brasileira com muita facilidade."
    return(
        <Scroll>
            <BackTop page="Tutoriais" navigation={navigation} />
            <View>
                <ContainerTutos titulo="MacOS Monterey, o que há de novo?" desc={primeiraDesc} link="https://youtube.com/watch?v=K9UC8hH0LvE" />
                <ContainerTutos titulo="Como comprar appleCare+ no Brasil" desc={segundaDesc} link="https://www.youtube.com/watch?v=9XtqlakYjkI" />
            </View>
        </Scroll>
    )
}