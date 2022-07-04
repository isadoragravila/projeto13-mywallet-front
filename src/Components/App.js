import "../Assets/reset.css";
import "../Assets/style.css";
import TelaEntrar from "./TelaEntrar";
import TelaCadastro from "./TelaCadastro";
import TelaInicial from "./TelaInicial";
import Entrada from "./Entrada";
import Saida from "./Saida";
import EditarEntrada from "./EditarEntrada";
import EditarSaida from "./EditarSaida";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenContext from "../Contexts/TokenContext";

export default function App() {
    const [token, setToken] = useState('');

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaEntrar />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/inicio" element={<TelaInicial />} />
                    <Route path="/entrada" element={<Entrada />} />
                    <Route path="/saida" element={<Saida />} />
                    <Route path="/entrada/:idRegistro" element={<EditarEntrada />} />
                    <Route path="/saida/:idRegistro" element={<EditarSaida />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    );
}