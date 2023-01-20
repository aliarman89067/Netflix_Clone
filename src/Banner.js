import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const movieNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(movies);
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        {/*Title */}
        <h1 className="banner__title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">List</button>
        </div>
        <h1 className="banner__description">{movies?.overview}</h1>
        {/*div with 2 button */}
        {/*description */}
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
