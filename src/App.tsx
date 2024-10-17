import { useState } from 'react';
import './App.css';

const modelos = [
  "https://cdn.glitch.global/ba14295b-4cfc-4132-aa30-9f73c1da8256/Dayo.glb?v=1729178257700",
  "https://cdn.glitch.global/ba14295b-4cfc-4132-aa30-9f73c1da8256/Petirrojo.glb?v=1729185728694",
  "https://cdn.glitch.global/ba14295b-4cfc-4132-aa30-9f73c1da8256/Bichofue.glb?v=1729185739253"
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
      <h1>Visor de Modelos 3D</h1>
      
      <model-viewer
        src={modelos[currentModelIndex]}
        alt="Modelo 3D"
        auto-rotate
        camera-controls
        ar
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>

      <div className="botones">
        <button onClick={() => cambiarModelo(-1)}>Anterior</button>
        <button onClick={() => cambiarModelo(1)}>Siguiente</button>
      </div>
    </div>
  );
}

export default App;