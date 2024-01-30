import React, {useState, useEffect} from "react";
import { Container, Content, Header, PasswordList, Title } from "./styles";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { Alert, Text } from "react-native";
import { PasswordItem } from "./components/passwordItem";


export default function PasswordStorage(){
    const  [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass");
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item){
        Alert.alert("Excluir Senha", "Deseja excluir esta senha?",
            [
                {
                    text: "Sim",
                    onPress: async () => {
                        const passwords = await removeItem("@pass", item);
                        setListPasswords(passwords);
                    }
                },
                {
                    text: "Nao"
                }
            ]
        )

    }

    return(
        <Container>
            <Header>
                <Title>Minhas Senhas</Title>
            </Header>
            <Content>
                <PasswordList
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>}
                />
            </Content>
        </Container>
    )
}