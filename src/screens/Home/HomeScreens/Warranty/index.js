import React from "react"
import { View, Text, ScrollView } from 'react-native'
import { BackTop } from "../../../../components/HomeScreensComponents/BackTop"
import { style } from "./style"


export const Warranty = ({navigation}) => {

    return (
        <ScrollView>
            <BackTop page="Sobre nós" navigation={navigation} />
            <View style={style.ContainerMain}>
                <Text style={style.TitleMain}>
                    Conheça a BSD Tech
                </Text>
                <Text style={style.Paragraph1}>
                    A BSD Tecnologia nasceu em 2013, e é especializada em prestação de serviços em informática em geral, PC’s Windows, Computadores Apple, Servidores FreeBSD, Redes.
                    Também atuamos com vendas de equipamentos Apple (Mac, iPhone, iPad, Apple Watch, Apple TV etc), e ministramos treinamentos In Company ou particulares.
                </Text>
                <Text style={style.Title}>
                    Missão:
                </Text>
                <Text style={style.Paragraph2}>
                    Nossa missão é oferecer o melhor atendimento, propondo sempre as melhores soluções para cada cliente ou seu negócio, com preços justos, e prezando pela máxima qualidade e sua satisfação.
                </Text>
                <Text style={style.Title}>
                    Visão:
                </Text>
                <Text style={style.Paragraph2}>
                    Nossa visão da BSD Tecnologia é que em alguns anos,
                    possamos ser referencia em suporte e manutenção principalmente em produtos e equipamentos Apple
                    na Grande Florianópolis,
                    e se possível, atendermos ainda mais pessoas de outras cidades ou Estados.
                </Text>

                <Text style={style.Title}>
                    Valores:
                </Text>
                <Text style={style.Paragraph2}>
                    Nos baseamos na ética, honestidade, profissionalismo, qualidade e transparência com o cliente. Procuro sempre fazer os serviços pensando que estou fazendo algo para mim mesmo, então pretendo sempre transmitir para meus clientes a imagem de confiança de que estou fazendo o melhor trabalho possível, e com o máximo de honestidade.
                </Text>
            </View>
        </ScrollView>
    )
}