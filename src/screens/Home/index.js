import React, { useEffect, useState } from 'react';
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

export default function Home() {
    return (
        <Container>
            <TopBarContainer>
                <LocalText>Maranhão-BR</LocalText>
                <ReloadButton>
                    <ReloadIcon name="reload" size={24} color="#00005c" />
                </ReloadButton>
            </TopBarContainer>
            <InfoContainer colors={['#404EE8', '#56BFFD']}>
                <TopInfoContainer>
                    <TextInfo>Bom dia</TextInfo>
                    <TempInfo> 25º</TempInfo>
                    <TextInfo> Domingo, Ensolarado</TextInfo>
                </TopInfoContainer>
                <IconStatus source={Icon} />
                <TextBottom>Máx/Mín</TextBottom>
                <TextBottom>18º|18º</TextBottom>
            </InfoContainer>
            <BottomButtonsContainer />
        </Container>
    );
}
