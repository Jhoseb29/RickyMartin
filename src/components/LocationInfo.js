const LocationInfo = ({ name, type, dimension, population }) => {
    return (
      <div>
        <h2 >{name}</h2>
        <div>
          <div>
            <b>type: </b>
            {type}
          </div>
          <div>
            <b>dimension: </b>
            {dimension}
          </div>
          <div>
            <b>population: </b>
            {population}
          </div>
        </div>
      </div>
    );
  };
  
  export default LocationInfo;