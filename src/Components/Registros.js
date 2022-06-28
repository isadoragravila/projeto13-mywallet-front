import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function RegistroUnico({ data, descricao, valor }) {
    return (
        <Registro>
            <div>
                <Data>{data}</Data>
                <Descricao>{descricao}</Descricao>
            </div>
            <Valor>{valor.toFixed(2)}</Valor>
        </Registro>
    );
}
export default function Registros() {
    const res = [
        {
            date: '29/07',
            descrption: 'Almoço',
            value: 30.00
        },
        {
            date: '30/07',
            descrption: 'Lanche',
            value: 20.00
        },
        {
            date: '31/07',
            descrption: 'Pizza',
            value: 50.00
        },
    ];
    let soma = 0;
    for (let i = 0; i < res.length; i++) {
        soma += res[i].value;
    }

    return (
        <Conteiner>
            <Registers>
                {res.map((item, index)=> <RegistroUnico key={index} data={item.date} descricao={item.descrption} valor={item.value} />)}
            </Registers>
            <Saldo><p>SALDO:</p><span>{soma.toFixed(2)}</span></Saldo>
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
`;
const Valor = styled.div`
    color: #03AC00;
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
        color: #03AC00;
    }
`;

