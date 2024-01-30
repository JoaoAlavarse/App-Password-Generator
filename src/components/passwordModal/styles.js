import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: rgba(24, 24, 24, 0.6);
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const ViewContent = styled.View`
    background-color: white;
    width: 85%;
    padding: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-bottom: 24px;
`;

export const InnerPressable = styled.Pressable`
    background-color: black;
    width: 90%;
    padding: 14px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const WhiteText = styled.Text`
    color: white;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
`;

export const HorizontalView = styled.View`
    flex-direction: row;
    width: 90%;
    margin-top: 8px;
    align-items: center;
    justify-content: space-evenly;
`;

export const TouchableButton = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 14px;
    margin-bottom: 14px;
    height: 45px;
    border-radius: 8px;
`;