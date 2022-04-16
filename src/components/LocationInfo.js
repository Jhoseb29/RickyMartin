const LocationInfo = ({ name, type, dimension, population }) => {
    return (
      <div className="location">
        <h2 >{name}</h2>
        <div>
          <div>
            <b>Type: </b>
            {type}
          </div>
          <div>
            <b>Dimension: </b>
            {dimension}
          </div>
          <div>
            <b>Population: </b>
            {population}
          </div>
        </div>
      </div>
    );
  };
  
  export default LocationInfo;