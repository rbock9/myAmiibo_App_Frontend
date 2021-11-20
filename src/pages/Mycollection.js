import { useState, useEffect } from "react";

function Amiibos(props) {
  // create state to hold amiibos
  const [amiibos, setAmiibos] = useState(null);

  //create function to make api call
  const getAmiibosData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "amiibos");
    // turn response into javascript object
    const data = await response.json();
    // set the amiibos state to the data
    setAmiibos(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAmiibosData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return amiibos.map((amiibo) => (
      <div>
        <h1>{amiibo.name}</h1>
        <img src={amiibo.image} />
        <h2>{amiibo.gameSeries}</h2>
      </div>
    ));
  };

  return amiibos ? loaded() : <h1>Loading...</h1>;
}

export default Amiibos;