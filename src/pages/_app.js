import React, { useEffect } from 'react';
import '../styles/globals.css'; // O la ruta de tus estilos actuales

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Este código se ejecuta siempre al cargar cualquier sección de la web
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'; // Desactivamos la memoria del navegador
    }
    window.scrollTo(0, 0);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
