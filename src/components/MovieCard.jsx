import React from "react";

function MovieCard({ movieObj, poster_path, name, watchlist, handleAddtoWatchList, handleRemoveFromWatchList }) {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  // Check if movie is already in watchlist
  const isInWatchlist = watchlist.some(movie => movie.id === movieObj.id);

  return (
    <div
      className="h-[40vh] w-[200px] rounded-2xl bg-cover bg-center hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{ backgroundImage: `url(${posterUrl})` }}
    >
      {isInWatchlist ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 h-8 w-8 flex justify-center items-center rounded-lg bg-red-600 cursor-pointer"
          title="Remove from Watchlist"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 h-8 w-8 flex justify-center items-center rounded-lg bg-gray-900 cursor-pointer"
          title="Add to Watchlist"
        >
          &#128151;
        </div>
      )}

      <div className="text-white text-l w-full p-1 m-20-auto text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
