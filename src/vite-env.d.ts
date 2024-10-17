/// <reference types="vite/client" />
declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any; // Declara el componente model-viewer para evitar errores
    }
  }
  /// <reference types="vite/client" />
declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any; // Para el componente model-viewer
      'a-scene': any; // Para el componente a-scene de A-Frame
      'a-marker': any; // Para el componente a-marker de AR.js
      'a-entity': any; // Para el componente a-entity de A-Frame
      'a-camera': any; // Para el componente a-camera de A-Frame
      // Agrega otros elementos de A-Frame que necesites
    }
  }
  
  