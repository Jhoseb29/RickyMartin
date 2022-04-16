import React, { useState } from "react";
import Results from '../components/Results'
import ResidentContainer from "../components/ResindentContainer";
import LocationContainer from "../components/LocationContainer";

const query = Math.floor(Math.random() * 126) + 1;

const SearchBox = () => {

  // Estado para mostrar ubicacion al azar
  // y enviar la url por axios a los demas componentes

  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/location/${query}`
  );
  const [search, setSearch] = useState("");
  const handleSearch = (url) => {
    setSearch("");
    setUrl(url);
  };
  return (

    // Input y en Results voy a hacer el Boton 
    // para que se pinte la informacion de la ubicacion 
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Location"
      />
      {search !== "" && (
        <Results
          url={`https://rickandmortyapi.com/api/location/?name=${search}`}
          handle={handleSearch}
        />
      )}

      {/* LLAMADA DE COMPONENTES */}

      <LocationContainer url={url} />
      <ResidentContainer url={url} />
    </>
  );
};

export default SearchBox;