import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #621F87;
`;

export const LogoImage = styled.Image`
    width: 200px;
    height: 200px;
    object-fit: fill;
    margin: 15px;
`;

export const Input = styled.TextInput`
    width: 300px;
    height: 50px;
    text-align: center;
    border-color: black;
    border-radius: 8px;
    border-width: 1.4px;
    background-color: white;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin: 15px;
`;

export const TouchableButton = styled.TouchableOpacity`
    width: 300px;
    height: 50px;
    background-color: black;
    margin-top: 15px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const WhiteText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`;
