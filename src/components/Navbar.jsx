import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-sky-800">
        <div className="flex-1 gap-1">
          <p className="text-white font-mono text-3xl">WeatherSite</p>
          <img
            className="h-10"
            src="https://img.icons8.com/?size=160&id=67538&format=png"
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="text-white text-[20px]">Countries</summary>
                <ul className="bg-sky-600 text-white rounded-t-none p-2 ">
                  <li className="hover:bg-sky-800 rounded-lg">
                    <Link to="/northAmerica">North America</Link>
                  </li>
                  <li className="hover:bg-sky-800 rounded-lg">
                    <Link to="/southAmerica">South America </Link>{" "}
                  </li>
                  <li className="hover:bg-sky-800 rounded-lg">
                    <Link to="/europe"> Europe</Link>{" "}
                  </li>
                  <li className="hover:bg-sky-800 rounded-lg">
                    <Link to="/africa"> Africa </Link>{" "}
                  </li>
                  <li className="hover:bg-sky-800 rounded-lg">
                    <Link to="australia"> Australia</Link>{" "}
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
