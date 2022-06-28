import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Saida() {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    function salvarSaida(event) {
        event.preventDefault();
        console.log("salvou saida");
    }

    return (
        <Conteiner>
            <h2>Nova Saída</h2>
            <Form onSubmit={salvarSaida}>
                <Input type="number" required placeholder="Valor" value={value} onChange={(e) => setValue(e.target.value)} />
                <Input type="text" required placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button type="submit">Salvar Saída</Button>
            </Form>
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
    background-color: #8C11BE;
    h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

const Input = styled.input`
    width: 100%;
    height: 58px;
    border-radius: 5px;
    margin-bottom: 13px;
    outline: none;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-indent: 10px;
    color: #000000;
    background-color: #FFFFFF;

    ::placeholder {
        color: #000000;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`;