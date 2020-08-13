import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import {
    Container,
    LocalText,
    ReloadButton,
    ReloadIcon,
    InfoContainer,
    TextInfo,
    TempInfo,
    TopInfoContainer,
    TextBottom,
    BottomButtonsContainer,
    IconStatus,
    TopBarContainer,
} from './styles';
import Icon from '../../IconStatus.png';
import api from '../../services/api';
import { apiKey } from '../../utils/apiKey';

export default function Home() {
    const [initialPosition, setInitialPosition] = useState([0, 0]);
    const [wheaterInfo, setWheaterInfo] = useState([]);

    useEffect(() => {
        api.get('/weather', {
            params: {
                lat: initialPosition[0],
                lon: initialPosition[1],
                appid: apiKey,
                lang: 'pt_br',
                units: 'metric',
            },
        }).then((response) => {
            setWheaterInfo(response.data);
        });
        console.log(wheaterInfo.weather[0].icon);
    }, []);

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Ooops...', 'Precisamos da sua localização');
            }

            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;
            setInitialPosition([latitude, longitude]);
        }
        loadPosition();
    }, []);

    return (
        <Container>
            <TopBarContainer>
                <LocalText>
                    {wheaterInfo.name}-{wheaterInfo.sys.country}
                </LocalText>
                <ReloadButton>
                    <ReloadIcon name="reload" size={24} color="#00005c" />
                </ReloadButton>
            </TopBarContainer>
            <InfoContainer colors={['#404EE8', '#56BFFD']}>
                <TopInfoContainer>
                    <TextInfo>Boa Noite</TextInfo>
                    <TempInfo> {wheaterInfo.main.temp}º</TempInfo>
                    <TextInfo>
                        {' '}
                        Domingo, {wheaterInfo.weather[0].description}{' '}
                    </TextInfo>
                </TopInfoContainer>
                <IconStatus
                    source={{
                        uri: `http://openweathermap.org/img/wn/${wheaterInfo.weather[0].icon}@4x.png`,
                    }}
                />
                <TextBottom>Máx/Mín</TextBottom>
                <TextBottom>
                    {wheaterInfo.main.temp_max}º|{wheaterInfo.main.temp_min}º
                </TextBottom>
            </InfoContainer>
            <BottomButtonsContainer />
        </Container>
    );
}
