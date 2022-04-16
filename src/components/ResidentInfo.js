import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidentItem = ({ url }) => {
  const [resident, setResident] = useState({});
  const [color, setColor] = useState("green");

  useEffect(() => {
    if(url){
      const promise = axios(url);
      promise.then((res) => {
        setResident({
          image: res.data.image,
          name: res.data.name,
          status: res.data.status,
          species: res.data.species,
          origin: res.data.origin.name,
          episodes: res.data.episode.length
        });
        if (resident.status === "Alive") {
          setColor("green");
        } else if (resident.status === "Dead") {
          setColor("red");
        } else {
          setColor("gray");
        }
      });
    }
  }, [url, resident.status]);

  return (
    <div>
      <div>
        <img src={resident.image} alt="" />
        <div>
          <p>
            <b>{resident.name}</b>
          </p>
          <p>
            <span className={"circle " + color}></span>
           {resident.status}
          </p>
          <p>
            {resident.species}
          </p>
          
          <p> <b>Origin:</b> {resident.origin}</p>
          
          <p> <b>Episodes where appear:</b> {resident.episodes}</p>
        </div>
      </div>
    </div>
  );
};

export default ResidentItem;