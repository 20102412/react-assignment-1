import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchList(movie);
  };

  return (
    <IconButton aria-label="add to watch list" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon fontSize="large" sx={{color: "#3D0301"}}/>
    </IconButton>
  );
};

export default AddToWatchListIcon;
