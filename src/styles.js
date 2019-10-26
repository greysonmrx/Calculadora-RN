import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

import Colors from './colors.json';

export const Container = styled.View`
    flex: 1;
    background: ${props => props.darkTheme ? Colors['dark'] : Colors['white']};
`;

export const Display = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 25px;
    margin-bottom: 40px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: ${Colors['gray']};
`;

export const Result = styled.Text`
    font-family: "Product Sans Regular";
    font-size: 70px;
    margin-bottom: 10px;
    color: ${props => props.darkTheme ? Colors['white'] : Colors['dark']};
`;

export const Calculation = styled.Text`
    font-family: "Product Sans Regular";
    font-size: 17px;
    color: ${props => props.darkTheme ? Colors['purpleDark'] : Colors['purple']};
    justify-content: center;
`;

export const Keyboard = styled.View`
    flex: 2;
    padding: 0 25px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`;

export const OptionText = styled.Text`
    font-family: "Product Sans Regular";
    font-size: 20px;
    color: ${props => props.color ? Colors[props.color] : props.darkTheme ? Colors['white'] : Colors['dark']};
`;

export const Option = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background: ${props => props.background ? Colors[props.background] : 'transparent'};
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const ButtonTheme = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 10px;
    left: 10px;  
    align-items: center;
    justify-content: center; 
    z-index: 10;
`;