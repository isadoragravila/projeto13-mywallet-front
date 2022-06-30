import styled from 'styled-components';

function RegistroUnico({ data, descricao, valor, tipo }) {
    return (
        <Registro>
            <div>
                <Data>{data}</Data>
                <Descricao>{descricao}</Descricao>
            </div>
            <Valor color={tipo === "inflow" ? "#03AC00" : "#C70000"}>{valor.toFixed(2)}</Valor>
        </Registro>
    );
}

export default function Registros({ registers }) {
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
                {registers.map((item, index) => <RegistroUnico key={index} data={item.date} descricao={item.description} valor={item.value} tipo={item.type} />)}
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
`;
const Valor = styled.div`
    color: ${props => props.color};
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

