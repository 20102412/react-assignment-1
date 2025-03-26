import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [watchlist, setWatchList] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addToWatchList = (movie) => {
    let newWatchList = [];
    if (!watchlist.includes(movie.id)){
      newWatchList = [...watchlist, movie.id];
    }
    else{
      newWatchList = [...watchlist];
    }
    setWatchList(newWatchList)
    //console.log(newWatchList);
  };
  console.log(watchlist);
  
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);


  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromWatchList = (movie) => {
    setWatchList( watchlist.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchlist,
        addToFavorites,
        addToWatchList,
        removeFromFavorites,
        removeFromWatchList,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;
