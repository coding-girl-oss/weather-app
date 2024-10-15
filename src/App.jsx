import React from "react";
import Weather from "./components/weather";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pakistan = "Pakistan";
  const northAmerica = "North America";
  const southAmerica = "South America";
  const europe = "Europe";
  const africa = "Africa";
  const australia = "Australia";

  return (
    <>
      <BrowserRouter>
        <div className="bg-[url(https://tse3.mm.bing.net/th?id=OIP.K2Gxnkz9-JxMcdB-hH8NMwHaFi&pid=Api&P=0&h=220)] bg-center bg-cover bg-no-repeat h-screen">
          <Navbar />
          <div className="flex gap-1 justify-center items-center py-10">
            <p className="text-white font-bold text-4xl">WeatherSite</p>
            <img
              className="h-10"
              src="https://img.icons8.com/?size=160&id=67538&format=png"
              alt="Weather Icon"
            />
          </div>
          <div className="flex justify-center h-60 md:w-[500px] w-[300px] m-auto ">
            <div className="container bg-gradient-to-b from-sky-500 to-yellow-300 h-72">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Weather key="pakistan" q={pakistan} />}
                />
                <Route
                  exact
                  path="/northamerica"
                  element={<Weather key="northamerica" q={northAmerica} />}
                />
                <Route
                  exact
                  path="/southamerica"
                  element={<Weather key="southamerica" q={southAmerica} />}
                />
                <Route
                  exact
                  path="/europe"
                  element={<Weather key="europe" q={europe} />}
                />
                <Route
                  exact
                  path="/africa"
                  element={<Weather key="africa" q={africa} />}
                />
                <Route
                  exact
                  path="/australia"
                  element={<Weather key="australia" q={australia} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
