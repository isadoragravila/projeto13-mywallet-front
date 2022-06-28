import "../Assets/reset.css";
import "../Assets/style.css";
import TelaEntrar from "./TelaEntrar";
import TelaCadastro from "./TelaCadastro";
import TelaInicial from "./TelaInicial";
import Entrada from "./Entrada";
import Saida from "./Saida";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaEntrar />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/inicio" element={<TelaInicial />} />
                    <Route path="/entrada" element={<Entrada />} />
                    <Route path="/saida" element={<Saida />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}