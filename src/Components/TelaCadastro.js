import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function TelaCadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const navigate = useNavigate();

    function fazerCadastro(event) {
        event.preventDefault();
        console.log("fez cadastro");
        navigate("/");
    }

    return (
        <Conteiner>
            <h1>My Wallet</h1>
            <Form onSubmit={fazerCadastro}>
                <Input type="text" required placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <Input type="email" required placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" required placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" required placeholder="Confirme a senha" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} />
                <Button type="submit">Cadastrar</Button>
            </Form>
            <Link to="/">
                <Entrar>
                    Já tem uma conta? Entre agora!
                </Entrar>
            </Link>
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
    justify-content: center;    
    background-color: #8C11BE;
    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }
    a {
        text-decoration: none;
    }
`;

const Entrar = styled.div`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 36px;
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