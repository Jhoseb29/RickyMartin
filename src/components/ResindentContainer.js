import React, { useEffect, useState } from "react";
import axios from "axios";
import ResidentInfo from "../components/ResidentInfo";

const ResidentContainer = ({ url }) => {
  const [residents, setResidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 12;

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => {
      setResidents(res.data.residents);
      setCurrentPage(1);
    });
  }, [url]);

  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidentsShowed = residents.slice(
    indexOfFirstResident,
    indexOfLastResident
  );


  return (
    <div className="resident-container">
      <h3>Residents</h3>
      <div className="each-card">
        {currentResidentsShowed.map((url) => (
          <div>
            <ResidentInfo key={url.substring(42)} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentContainer;