/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { parseISO, getHours } from 'date-fns';
import { Alert, ActivityIndicator } from 'react-native';
import {
    Container,
    LoadingContainer,
    LocalText,
    ReloadButton,
    ReloadIcon,
    TextInfo,
    TempInfo,
    TopInfoContainer,
    TextBottom,
    IconStatus,
    TopBarContainer,
    MainContainer,
    TextBottomContainer,
} from './styles';
import api from '../../services/api';
import { apiKey } from '../../utils/apiKey';

export default function Home() {
    const [initialPosition, setInitialPosition] = useState([0, 0]);
    const [loading, setLoading] = useState(false);
    const [isNigth, setIsNigth] = useState(false);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [max, setMax] = useState('');
    const [min, setMin] = useState('');
    const [message, setMessage] = useState('Bom Dia');
    const [day, setDay] = useState('');

    function getDay() {
        switch (new Date().getDay()) {
            case 0:
                setDay('Domingo');
                break;
            case 1:
                setDay('Segunda');
                break;
            case 2:
                setDay('Terça');
                break;
            case 3:
                setDay('Quarta');
                break;
            case 4:
                setDay('Quinta');
                break;
            case 5:
                setDay('Sexta');
                break;
            case 6:
                setDay('Sabado');
        }
    }

    function getData() {
        setLoading(!loading);
        api.get('/weather', {
            params: {
                lat: initialPosition[0],
                lon: initialPosition[1],
                appid: apiKey,
                lang: 'pt_br',
                units: 'metric',
            },
        })
            .then((response) => {
                setCity(response.data.name);
                setCountry(response.data.sys.country);
                setTemp(response.data.main.temp);
                setDescription(response.data.weather[0].description);
                setIcon(response.data.weather[0].icon);
                setMax(response.data.main.temp_max);
                setMin(response.data.main.temp_min);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    function goToNigth() {
        if (
            getHours(new Date()) <
            getHours(parseISO('2020-08-13T14:01:07.798Z'))
        ) {
            setMessage('Bom Dia');
            setIsNigth(false);
        } else if (
            getHours(new Date()) <
            getHours(parseISO('2020-08-13T21:01:07.798Z'))
        ) {
            setIsNigth(false);
            setMessage('Boa Tarde');
        } else {
            setIsNigth(true);
            setMessage('Boa Noite');
        }
    }

    async function loadPosition() {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Ooops...',
                'Precisamos da sua localização para continuar'
            );
        }

        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;
        setInitialPosition([latitude, longitude]);
    }

    useEffect(() => {
        loadPosition();
        goToNigth();
        getDay();
    }, []);

    useEffect(() => {
        getData();
    }, [initialPosition]);

    return (
        <Container
            colors={isNigth ? ['#475059', '#000000'] : ['#EC6E4C', '#F53F0D']}
        >
            {loading ? (
                <LoadingContainer>
                    <ActivityIndicator color="#ffff" size={120} />
                </LoadingContainer>
            ) : (
                <>
                    <TopBarContainer>
                        <ReloadButton onPress={loadPosition}>
                            <ReloadIcon
                                name="reload"
                                size={24}
                                color="#FFFFFF"
                            />
                        </ReloadButton>
                    </TopBarContainer>
                    <MainContainer>
                        <TopInfoContainer>
                            <TextInfo>{message}</TextInfo>
                            <TempInfo> {temp}º</TempInfo>
                            <TextInfo>
                                {' '}
                                {day}, {description}
                            </TextInfo>
                        </TopInfoContainer>
                        <IconStatus
                            source={{
                                uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
                            }}
                        />
                        <LocalText>
                            {city}-{country}
                        </LocalText>
                        <TextBottomContainer>
                            <TextBottom>Máxima/Mínima</TextBottom>
                            {'\n'}
                            {'\n'}
                            <TextBottom>
                                {'      '}
                                {max}º | {min}º
                            </TextBottom>
                        </TextBottomContainer>
                    </MainContainer>
                </>
            )}
        </Container>
    );
}
