import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import axios from 'axios';
import TokenContext from "../Contexts/TokenContext";
import { ThreeDots } from  'react-loader-spinner';

export default function TelaEntrar() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setToken } = useContext(TokenContext);

    function fazerLogin(event) {
        event.preventDefault();
        setLoading(true);
        const body = { email, password };
        const promise = axios.post("https://back-my-wallet-projeto.herokuapp.com/signin", body);
        promise.then(response => {
            setToken(response.data.token);
            navigate("/inicio");
        });
        promise.catch(err => {
            alert(err.response.data);
            setLoading(false);
        });
    }
    //recolocar required nos inputs depois
    return (
        <Conteiner>
            <h1>My Wallet</h1>
            <Form onSubmit={fazerLogin}>
                <Input type="email" disabled={loading} color={loading ? "#AFAFAF" : "#000000"} placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" disabled={loading} color={loading ? "#AFAFAF" : "#000000"} placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" disabled={loading} opacity={loading ? 0.7 : 1}>
                    {loading ? <ThreeDots color={"#ffffff"} width={60} /> : "Entrar"}
                </Button>
            </Form>
            <Link to="/cadastro">
                <Cadastro>
                    Primeira vez? Cadastre-se!
                </Cadastro>
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

const Cadastro = styled.div`
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
    color: ${props => props.color};
    background-color: #FFFFFF;

    ::placeholder {
        color: ${props => props.color};
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
    opacity: ${props => props.opacity};
`;