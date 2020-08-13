import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;
export const TopBarContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
`;
export const LocalText = styled.Text`
    margin: 0 55px;
    align-self: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #00005c;
`;

export const ReloadButton = styled.TouchableOpacity``;

export const ReloadIcon = styled(MaterialCommunityIcons)``;

export const InfoContainer = styled(LinearGradient)`
    align-items: center;
    height: 500px;
    width: 300px;
    margin: 24px;
    border-radius: 16px;
`;

export const TextInfo = styled.Text`
    font-size: 16px;
    color: #f0f5f7;
`;

export const TempInfo = styled.Text`
    font-size: 60px;
    line-height: 70px;
    color: #f0f5f7;
`;
export const TopInfoContainer = styled.View`
    margin-top: 16px;
    align-items: center;
`;

export const IconStatus = styled.Image`
    margin: 32px;
    width: 225px;
    height: 225px;
`;

export const TextBottom = styled.Text`
    font-size: 24px;
    line-height: 28px;
    color: #f0f5f7;
    margin-bottom: 8px;
`;

export const BottomButtonsContainer = styled.View``;
