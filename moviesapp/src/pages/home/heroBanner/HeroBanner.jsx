import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";
import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  const [backgroundImg, setBackgroundImg] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackgroundImg(bg)
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or a TV show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
