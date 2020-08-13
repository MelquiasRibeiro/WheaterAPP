import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled(LinearGradient)`
    flex: 1;
    align-items: center;
`;

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const TopBarContainer = styled.View`
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 64px;
    flex-direction: row;
    width: 300px;
`;
export const MainContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;
export const LocalText = styled.Text`
    align-self: center;
    font-family: Roboto_700Bold;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 40px;
`;

export const ReloadButton = styled.TouchableOpacity``;

export const ReloadIcon = styled(MaterialCommunityIcons)``;

export const InfoContainer = styled.View`
    align-items: center;
    margin: 32px;
`;

export const TextInfo = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-family: Roboto_400Regular;
`;

export const TempInfo = styled.Text`
    font-size: 60px;
    line-height: 70px;
    color: #ffffff;
    font-family: Roboto_400Regular;
`;
export const TopInfoContainer = styled.View`
    margin-top: 16px;
    align-items: center;
`;

export const IconStatus = styled.Image`
    margin: 16px;
    width: 200px;
    height: 200px;
`;
export const TextBottomContainer = styled.View`
    margin-top: 32px;
    align-items: center;
    justify-content: center;
`;
export const TextBottom = styled.Text`
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 8px;
    align-self: center;
    font-family: Roboto_400Regular;
`;
export const TextBottomnumber = styled.Text`
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 8px;
    align-self: center;
    font-family: Roboto_500Medium;
`;
