import React, {useContext, useEffect} from "react";
import { Alert, Text } from "react-native";
import { Container, HorizontalView, InnerPressable, Title, TouchableButton, ViewContent } from "./styles";
import { WhiteText } from "./styles";
import { PasswordContext } from "../../context/passwordcontext";
import Clipboard from "@react-native-clipboard/clipboard";
import useStorage from "../../hooks/useStorage"

export default function PasswordModal({ handleClose}){
    const { senhaGerada } = useContext(PasswordContext);
    const {saveItem} = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setString(senhaGerada)
        await saveItem("@pass", senhaGerada)
        Alert.alert("Sucesso" ,"Senha salva")
        handleClose();
    }

    return(
        <Container>
            <ViewContent>
                <Title>Senha Gerada</Title>
                <InnerPressable onLongPress={handleCopyPassword}>
                    <WhiteText>{senhaGerada}</WhiteText>
                </InnerPressable>
                <HorizontalView>
                    <TouchableButton onPress={handleClose}>
                        <WhiteText style = {{color: "black"}}>Voltar</WhiteText>
                    </TouchableButton>
                    <TouchableButton style= {{backgroundColor: "#621F87"}} onPress={ async () => {
                        await saveItem("@pass", senhaGerada);
                        Alert.alert("Sucesso" ,"Senha salva")
                        handleClose();
                    }}>
                        <WhiteText>Salvar</WhiteText>
                    </TouchableButton>
                </HorizontalView>
            </ViewContent>
        </Container>
    )
}