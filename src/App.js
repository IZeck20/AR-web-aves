import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
const modelos = [
    {
        src: "https://cdn.glitch.global/ba14295b-4cfc-4132-aa30-9f73c1da8256/Dayo.glb?v=1729178257700",
        marker: "https://cdn.glitch.global/ba14295b-4cfc-4132-aa30-9f73c1da8256/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco.jpg?v=1729182079387" // Reemplaza con la URL de tu primer marcador
    }
];
function App() {
    const [currentModelIndex, setCurrentModelIndex] = useState(0);
    const cambiarModelo = (incremento) => {
        setCurrentModelIndex((prevIndex) => (prevIndex + incremento + modelos.length) % modelos.length);
    };
    return (_jsxs("div", { className: "App", children: [_jsx("h1", { children: "Visor de Modelos 3D por Marcadores" }), _jsx("button", { onClick: () => cambiarModelo(-1), children: "Anterior" }), _jsx("button", { onClick: () => cambiarModelo(1), children: "Siguiente" }), _jsxs("a-scene", { embedded: true, arjs: "sourceType: webcam;", children: [_jsx("a-marker", { url: modelos[currentModelIndex].marker, children: _jsx("a-entity", { "gltf-model": modelos[currentModelIndex].src, scale: "0.1 0.1 0.1" // Ajusta el tamaño según sea necesario
                            , position: "0 0 0" }) }), _jsx("a-entity", { camera: true })] })] }));
}
export default App;
