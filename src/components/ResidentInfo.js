import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from './Loader'
import '../App.css'

const ResidentItem = ({ url }) => {
  const [resident, setResident] = useState({});
  const [color, setColor] = useState("color");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if(url){
      const promise = axios(url);
      promise.then((res) => {
        setLoading(false)
        setResident({
          image: res.data.image,
          name: res.data.name,
          status: res.data.status,
          species: res.data.species,
          origin: res.data.origin.name,
          episodes: res.data.episode.length
        });
        const color = (resident.status)
        if (color === "Alive") {
          setColor("green");
        } else if (color === "Dead") {
          setColor("red");
        } else {
          setColor("gray");
        }
      });
    }
  }, [url, resident.status]);

  return (
    <div>
      <div className="each-resident">
        {(isLoading) ? <Loader/> : <img src={resident.image} alt="" />}
        <div>
          <div className="status">
            <span className={"circle " + color}></span>
            <b>{resident.status}</b>
          </div>
          <p>
            <b>{resident.name}</b>
          </p>
          <p>
            {resident.species}
          </p>
          <p>
            <b>Origin:</b> {resident.origin}
          </p>
          <p>
            <b>Episodes where appear:</b> {resident.episodes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidentItem;