import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function TelaInicial() {
    return (
        <Conteiner>
            <Top>
                <h2>Olá, Fulano</h2>
                <Link to="/">
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
            </Top>
            <Registers>
                <h3>Não há registros de entrada ou saída</h3>
            </Registers>
            <Buttons>
                <Link to="/entrada">
                    <Button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Nova<br />entrada
                    </Button>
                </Link>
                <Space></Space>
                <Link to="/saida">
                    <Button>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        Nova<br />saída
                    </Button>
                </Link>
            </Buttons>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    max-width: 500px;
    min-width: 375px;
    min-height: 100vh;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;  
    background-color: #8C11BE;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 22px;
    h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon {
        font-size: 30px;
        color: #FFFFFF;
    }
    a {
        text-decoration: none;
    }
`;

const Registers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    min-height: 400px;
    width: 100%;
    margin-bottom: 13px;
    h3 {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        width: 200px;
    }
    ion-icon {
        font-size: 30px;
        color: #FFFFFF;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    a {
        text-decoration: none;
        width: 50%;
    }
`;

const Button = styled.div`
    height: 114px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    ion-icon {
        font-size: 30px;
        color: #FFFFFF;
    }
`;

const Space = styled.div`
    width: 15px;
`;