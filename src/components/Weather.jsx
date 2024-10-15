import React, { useState, useEffect } from "react";
import axios from "axios";


const Weather = (props) => {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (retries = 5) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=aee39b2e860e465b8e492919240710&q=${props.q}&aqi=no`
      );
      setData(response.data);
      setError(null);
      setLoading(false);
    } catch {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && (
        <span className="loading loading-spinner loading-lg bg-center"></span>
      )}
      {error && <p>error</p>}

      {data && (
        <>
          <h1 className="text-2xl text-white font-mono bg-yellow-500 text-center">
            Current Weather in {data.location.country}
          </h1>
          <h2 className="text-1xl text-white font-serif text-center bg-sky-700">
            Time: {data.location.localtime}
          </h2>
          <div className="giid grid-col-2 grid-rows-5 py-8 flex gap-20 md:px-28 px-5 text-black">
            <div className="col-span-1  ">
              <span className="flex gap-2">
                <img
                  className="h-5"
                  src="https://img.icons8.com/?size=96&id=12997&format=png"
                />
                <p className="">Temperature:</p>
              </span>
              <hr></hr>
              <span className="flex gap-2">
                <img
                  className="h-5"
                  src="https://img.icons8.com/?size=96&id=15362&format=png"
                />
                <p>Humidity</p>
              </span>
              <hr></hr>
              <span className="flex gap-2">
                <img
                  className="h-5"
                  src="https://img.icons8.com/?size=160&id=pkDbTiJX4qNl&format=png"
                />
                <p>Visibility:</p>
              </span>
              <hr></hr>
              <span className="flex gap-2">
                <img
                  className="h-5"
                  src="https://img.icons8.com/?size=80&id=21754&format=png"
                />
                <p>CloudCover:</p>
              </span>
              <hr></hr>
              <span className="flex gap-2">
                <img
                  className="h-5 "
                  src="https://img.icons8.com/?size=96&id=15360&format=png"
                />
                <p>precipitation:</p>
              </span>
              <hr></hr>
            </div>
            <div className="col-span-1 ">
              <p>{data.current.temp_c} °C</p>
              <hr></hr>
              <p>{data.current.humidity} %</p>
              <hr></hr>
              <p>{data.current.vis_km} km</p>
              <hr></hr>
              <p>{data.current.cloud}</p>
              <hr></hr>
              <p>{data.current.precip_in} %</p>
              <hr></hr>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;



