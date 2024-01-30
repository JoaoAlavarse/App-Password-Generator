import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const PasswordContext = createContext({})

export const PasswordProvider = ({ children }) => {
    const [senhaGerada, setSenhaGerada] = useState('');
    const [modal, setModal] = useState(false);

  
    const gerarSenha = (quantidadeCaracteresSenha) => {
      console.log("teste", quantidadeCaracteresSenha)
      if (quantidadeCaracteresSenha !== 0){
        const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        
        let password = "";
        for(let i = 0, n = charSet.length; i <= quantidadeCaracteresSenha - 1; i++){
            password += charSet.charAt(Math.floor(Math.random() * n))
        }
        setSenhaGerada(password);
        setModal(true);

      } else {
        console.log("Erro", "Quantidade de caracteres invalida")
        Alert.alert("Erro", "Quantidade de caracteres invalida")
      }
    };
  
    const contextValue = {
      senhaGerada,
      modal,
      gerarSenha,

    };
  
    return (
      <PasswordContext.Provider value={contextValue}>
        {children}
      </PasswordContext.Provider>
    );
  };


