import styled from 'styled-components';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from 'react';
import axios from 'axios';
import TokenContext from "../Contexts/TokenContext";
import { ThreeDots } from 'react-loader-spinner';

export default function EditarRegistro() {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);
    const { idRegistro } = useParams();

    function atualizarRegistro(event) {
        event.preventDefault();
        setLoading(true);
        if (!token) {
            navigate("/");
        } else {
            const body = { description, value };
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const promise = axios.put(`https://back-my-wallet-projeto.herokuapp.com/registers/${idRegistro}`, body, config);
            promise.then(() => {
                navigate("/inicio");
            });
            promise.catch(err => {
                alert(err.response.data);
                setLoading(false);
            });
        }
    }

    return (
        <Conteiner>
            <h2>Atualizar Registro</h2>
            <Form onSubmit={atualizarRegistro}>
                <Input type="number" disabled={loading} color={loading ? "#AFAFAF" : "#000000"} placeholder="Valor" value={value} onChange={(e) => setValue(e.target.value)} />
                <Input type="text" disabled={loading} color={loading ? "#AFAFAF" : "#000000"} placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button type="submit" disabled={loading} opacity={loading ? 0.7 : 1}>
                    {loading ? <ThreeDots color={"#ffffff"} width={60} /> : "Atualizar"}
                </Button>
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