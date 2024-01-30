import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1
`;

export const Header = styled.View`
    background-color: #392de9;
    padding-top: 58px;
    padding-bottom: 14px;
    padding-left: 14px;
    padding-right: 14px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: white;
    font-weight: bold;
`;

export const Content = styled.View`
    flex:1;
`;

export const PasswordList = styled.FlatList`
    flex: 1;
    padding-top: 14px;
`;