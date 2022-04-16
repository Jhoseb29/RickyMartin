import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchResult = ({ url, handle }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => setResults(res.data.results.slice(0, 7)));
   
  }, [url]);

  const resultsList = results.map((value) => (
    <ul className="search-list">
      <li
        onClick={() => handle(value.url)}
        key={value.url.substring(41)}
      >
        {value.name}
      </li>
    </ul>
  ));

  return <div className="results">{resultsList}</div>;
};

export default SearchResult;