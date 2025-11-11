import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import "./App.css";

function App() {
  const [watchlist, setWatchList] = useState([]);

  const handleAddtoWatchList = (movieObj) => {
  if (!watchlist.some(movie => movie.id === movieObj.id)) {
    const newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesapp' , JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log("Added to watchlist:", newWatchList);
  } else {
    console.log("Movie already in watchlist:", movieObj.id);
  }
};


  const handleRemoveFromWatchList = (movieObj) => {
  const filteredWatchlist = watchlist.filter(movie => movie.id !== movieObj.id);
  setWatchList(filteredWatchlist);
  console.log("Removed movie, new list: ", filteredWatchlist);
};

useEffect(()=>{
let moviesfromlocalstorage=localStorage.getItem('moviesapp')
if(!moviesfromlocalstorage){
  return 
}
setWatchList(JSON.parse(moviesfromlocalstorage))
},[])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <Movies 
                watchlist={watchlist}
                handleAddtoWatchList={handleAddtoWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          } 
        />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
