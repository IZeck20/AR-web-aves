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

  const cambiarModelo = (incremento: number) => {
    setCurrentModelIndex((prevIndex) => 
      (prevIndex + incremento + modelos.length) % modelos.length
    );
  };

  return (
    <div className="App">
      <h1>Visor de Modelos 3D por Marcadores</h1>
      <button onClick={() => cambiarModelo(-1)}>Anterior</button>
      <button onClick={() => cambiarModelo(1)}>Siguiente</button>

      <a-scene embedded arjs="sourceType: webcam;">
        <a-marker url={modelos[currentModelIndex].marker}>
          <a-entity
            gltf-model={modelos[currentModelIndex].src}
            scale="0.1 0.1 0.1" // Ajusta el tamaño según sea necesario
            position="0 0 0"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
