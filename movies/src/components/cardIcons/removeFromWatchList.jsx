import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchList = (e) => {
    e.preventDefault();
    context.removeFromWatchList(movie);
  };
  return (
    <IconButton
      aria-label="remove from watchlist"
      onClick={handleRemoveFromWatchList}
    >
      <DeleteIcon fontSize="large" sx={{color: "#3D0301"}}/>
    </IconButton>
  );
};

export default RemoveFromWatchListIcon;
