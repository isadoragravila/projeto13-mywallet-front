import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import TokenContext from "../Contexts/TokenContext";

function RegistroUnico({ id, data, descricao, valor, tipo, setName, setRegisters }) {
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);

    function deletarRegistro() {
        const confirm = window.confirm("Você tem certeza que deseja excluir esse registro?");
        if (confirm === true) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const promise = axios.delete(`https://back-my-wallet-projeto.herokuapp.com/registers/${id}`, config);
            promise.then(() => {
                getRegistros();
            });
            promise.catch(err => {
                alert(err.response.data);
            });
        }
    }

    function editarRegistro() {
        if (tipo === "inflow") {
            navigate(`/entrada/${id}`);
        } else {
            navigate(`/saida/${id}`);
        }
    }

    function getRegistros() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const promise = axios.get("https://back-my-wallet-projeto.herokuapp.com/registers", config);
        promise.then(response => {
            setName(response.data.name);
            setRegisters(response.data.registers);
        });
        promise.catch(err => {
            alert(err.response.data);
        });
    }

    return (
        <Registro>
            <div>
                <Data>{data}</Data>
                <Descricao onClick={editarRegistro}>{descricao}</Descricao>
            </div>
            <div>
                <Valor color={tipo === "inflow" ? "#03AC00" : "#C70000"}>{valor.toFixed(2)}</Valor>
                <Deleta onClick={deletarRegistro}>x</Deleta>
            </div>
        </Registro>
    );
}

export default function Registros({ registers, setName, setRegisters }) {
    let soma = 0;
    for (let i = 0; i < registers.length; i++) {
        if (registers[i].type === "inflow") {
            soma += registers[i].value;
        } else {
            soma -= registers[i].value;
        }
    }
    return (
        <Conteiner>
            <Registers>
                {registers.map((item, index) => <RegistroUnico key={index} id={item._id} data={item.date} descricao={item.description} valor={item.value} tipo={item.type} setName={setName} setRegisters={setRegisters} />)}
            </Registers>
            <Saldo color={soma >= 0 ? "#03AC00" : "#C70000"}>
                <p>SALDO:</p><span>{Math.abs(soma).toFixed(2)}</span>
            </Saldo>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    padding: 11px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

const Registers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Registro = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;

const Data = styled.span`
    color: #C6C6C6;
    margin-right: 7px;
`;
const Descricao = styled.span`
    color: #000000;
    word-break: break-word;
    cursor: pointer;
`;
const Valor = styled.span`
    color: ${props => props.color};
    margin-right: 10px;
    margin-left: 7px;
`;

const Saldo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    span {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${props => props.color};
    }
`;

const Deleta = styled.span`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #c6c6c6;
    cursor: pointer;
`;

