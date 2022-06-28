import "../Assets/reset.css";
import "../Assets/style.css";
import TelaEntrar from "./TelaEntrar";
import TelaCadastro from "./TelaCadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaEntrar />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}