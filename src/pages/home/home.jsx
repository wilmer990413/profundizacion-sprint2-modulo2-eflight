import React from "react";
import { useApi } from "../../context/AppListaContext"; // Importa el contexto

function Home() {
  const { detallesPrecio, loading } = useApi();

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
