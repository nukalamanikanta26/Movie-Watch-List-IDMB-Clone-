import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies({ watchlist, handleAddtoWatchList, handleRemoveFromWatchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=02affdead21d07f6e65afd1e25da7423&language=en-US&page=${pageNo}`)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies 2025</div>
      <div className="flex flex-row flex-wrap justify-around gap-6 m-5">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movieObj={movie}
            poster_path={movie.poster_path}
            name={movie.original_title}
            watchlist={watchlist}
            handleAddtoWatchList={handleAddtoWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
          />
        ))}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}

export default Movies;
