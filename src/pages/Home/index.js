import React, {useContext, useState, useEffect} from "react";
import { Modal } from "react-native";
import { Container, LogoImage, Input, Title, TouchableButton, WhiteText } from "./styles";
import PasswordModal from "../../components/passwordModal";
import { PasswordContext } from "../../context/passwordcontext";
import { useNavigation } from "@react-navigation/native";


export default function Home(){
    const [quantidadeCaracteresSenha, setQuantidadeCaracteresSenha] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const {modal, senhaGerada, gerarSenha} = useContext(PasswordContext)
    const navigation = useNavigation();

   function generatePassword(){
        console.log('Gerando senha...');
        const quantidade = Number(quantidadeCaracteresSenha);
        gerarSenha(quantidade);
        console.log('Senha gerada:', senhaGerada);
    
    }

    useEffect(() => {
        setModalVisible(modal);
    }, [senhaGerada])   

    return(
        <Container>
            <LogoImage source={require("../../images/cadeado.png")}/>
            <Input
                placeholder="Insira a quantidade de caracteres da senha"
                placeholderTextColor={'black'}
                color='black'
                value={quantidadeCaracteresSenha}
                onChangeText={(text) => {
                    setQuantidadeCaracteresSenha(text)
                }}
                keyboardType="numeric"
            />
            <TouchableButton onPress={() => {
                generatePassword();

            }}>
                <WhiteText>Gerar Senha</WhiteText>
            </TouchableButton>
            <TouchableButton onPress={() => {
                navigation.navigate("PasswordStorage")
            }}>
                <WhiteText>Senhas salvas</WhiteText>
            </TouchableButton>
            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <PasswordModal password={senhaGerada} handleClose={() => setModalVisible(false)}/>
            </Modal>
        </Container>
    )
}