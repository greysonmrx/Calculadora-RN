import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    Container,
    Display,
    Result,
    Calculation,
    Keyboard,
    Row,
    Option,
    OptionText,
    ButtonTheme,
} from './styles';

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);
    const [result, setResult] = useState('');
    const [calculation, setCalculation] = useState('');

    function changeTheme() {
        setDarkTheme(!darkTheme);
    }

    function isOperator(value) {
        if (value === '+') {
            return true;
        } else if (value === '-') {
            return true;
        } else if (value === '/') {
            return true;
        } else if (value === '*') {
            return true;
        } else {
            return false;
        }
    }

    function buttonPressed(value) {
        switch(value) {
            case '/': {
                if (calculation.length !== 0) {
                    if (isOperator(calculation.split('').pop())) {
                        let val = calculation.split('');
                        val.pop();
                        setCalculation(val.join('') + value);
                    } else {
                        const finalCalculation = calculation + String(value);
    
                        setCalculation(finalCalculation);
                    }
                }
                
                break;
            };  
            case '*': {
                if (calculation.length !== 0) {
                    if (isOperator(calculation.split('').pop())) {
                        let val = calculation.split('');
                        val.pop();
                        setCalculation(val.join('') + value);
                    } else {
                        const finalCalculation = calculation + String(value);

                        setCalculation(finalCalculation);
                    }
                }
                
                break;
            }; 
            case '+': {
                if (calculation.length !== 0) {
                    if (isOperator(calculation.split('').pop())) {
                        let val = calculation.split('');
                        val.pop();
                        setCalculation(val.join('') + value);
                    } else {
                        const finalCalculation = calculation + String(value);

                        setCalculation(finalCalculation);
                    }
                }

                break;
            }; 
            case '-': {
                if (isOperator(calculation.split('').pop())) {
                    let val = calculation.split('');
                    val.pop();
                    setCalculation(val.join('') + value);
                } else {
                    const finalCalculation = calculation + String(value);

                    setCalculation(finalCalculation);
                }
                
                break;
            };
            case '.': {
                const finalCalculation = calculation + String(value);

                if (!hasDot(finalCalculation)) {
                    setCalculation(finalCalculation);
                }

                break;
            };
            default: {
                const finalCalculation = calculation + String(value);

                setCalculation(finalCalculation);
            };          
        }        
    }

    function calculateResult() {
        const finalResult = eval(calculation);
        
        setResult(finalResult);
    }

    function allClear() {
        setCalculation('')
        setResult('');
    }

    function renderCalculation(value) {
        if (String(value)) {
            let finalText = '';

            String(value).split('').forEach(element => {
                if (!isOperator(element)) {
                    finalText += element;
                } else {
                    if (element === '/') {
                        finalText += ' ÷ ';
                    } else if (element === '*') {
                        finalText += ' x ';
                    } else {
                        finalText += ` ${element} `;
                    }                    
                }
            });
    
            return finalText;
        }
        
        return '';
    }

    function hasDot(value) {
        try {
            eval(value);

            return false;
        } catch(err) {
            return true;
        }
    }

    return (
        <Container
            darkTheme={darkTheme}
        >
            <ButtonTheme
                onPress={changeTheme}
            >
                <Ionicons 
                    name={darkTheme ? 'md-moon' : 'md-sunny'}
                    size={30}
                    color={ darkTheme ? '#7B67DB' : '#341CFC'}
                />
            </ButtonTheme>
            <Display>
                <Result
                    darkTheme={darkTheme}
                >{renderCalculation(result)}</Result>
                <Calculation
                    darkTheme={darkTheme}
                >{renderCalculation(calculation)}</Calculation>
            </Display>
            <Keyboard>
                <Row>
                    <Option
                        onPress={() => allClear()}
                    >
                        <OptionText 
                            color={ darkTheme ? 'purpleDark' : 'purple'}>
                            AC
                        </OptionText>
                    </Option>
                    <Option>
                        <Icon 
                            name='plus-minus'
                            size={25}
                            color={darkTheme ? '#FDFDFD' : '#14111F'}
                        />
                    </Option>
                    <Option>
                        <Icon 
                            name='percent'
                            size={20}
                            color={darkTheme ? '#FDFDFD' : '#14111F'}
                        />
                    </Option>
                    <Option 
                        background='gray'
                        onPress={() => buttonPressed('/')}
                    >
                        <Icon 
                            name='division'
                            size={20}
                            color='#14111F'
                        />
                    </Option>
                </Row>      
                <Row>
                    <Option
                        onPress={() => buttonPressed(7)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            7
                        </OptionText>
                    </Option>
                    <Option
                        onPress={() => buttonPressed(8)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            8
                        </OptionText>
                    </Option>
                    <Option
                        onPress={() => buttonPressed(9)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            9
                        </OptionText>
                    </Option>
                    <Option 
                        background='gray'
                        onPress={() => buttonPressed('*')}
                    >
                        <Icon 
                            name='close'
                            size={20}
                            color='#14111F'
                        />
                    </Option>
                </Row>   
                <Row>
                    <Option
                        onPress={() => buttonPressed(4)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            4
                        </OptionText>
                    </Option>
                    <Option
                        onPress={() => buttonPressed(5)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            5
                        </OptionText>
                    </Option>
                    <Option
                        onPress={() => buttonPressed(6)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            6
                        </OptionText>
                    </Option>
                    <Option 
                        background='gray'
                        onPress={() => buttonPressed('-')}
                    >
                        <Icon 
                            name='minus'
                            size={20}
                            color='#14111F'
                        />
                    </Option>
                </Row>   
                <Row>
                    <Option
                        onPress={() => buttonPressed(1)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            1
                        </OptionText>
                    </Option>
                    <Option
                        onPress={() => buttonPressed(2)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            2
                        </OptionText>
                    </Option>
                    <Option
                        onPress={() => buttonPressed(3)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            3
                        </OptionText>
                    </Option>
                    <Option 
                        background='gray'
                        onPress={() => buttonPressed('+')}
                    >
                        <Icon 
                            name='plus'
                            size={20}
                            color='#14111F'
                        />
                    </Option>
                </Row>   
                <Row>
                    <Option
                        onPress={() => buttonPressed(0)}
                    >
                        <OptionText darkTheme={darkTheme}>
                            0
                        </OptionText>
                    </Option>
                    <Option
                        onPress={() => buttonPressed('.')}
                    >
                        <OptionText darkTheme={darkTheme}>
                            .
                        </OptionText>
                    </Option>
                    <Option>
                        <OptionText>

                        </OptionText>
                    </Option>
                    <Option 
                        background={ darkTheme ? 'purpleDark' : 'purple'}
                        onPress={() => calculateResult()}
                    >
                        <Icon 
                            name='equal'
                            size={20}
                            color='#FDFDFD'
                        />
                    </Option>
                </Row>             
            </Keyboard>
        </Container>
    );
}