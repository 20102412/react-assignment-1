import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";

import img from "../../images/actor-placeholder.png"
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Grid from "@mui/material/Grid2"
import Spinner from "../spinner";
import { getMovieCredits } from "../../api/tmdb-api";
import { Avatar } from "@mui/material";

const root = {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieCredits = (props) => {
    const { id } = useParams();
    const { data: credits, error, isPending, isError } = useQuery({
        queryKey: ['credits', { id: id }],
        queryFn: getMovieCredits,
    })


    if (isPending) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const castCredit = credits?.cast || [];
    const topCredits = castCredit.slice(0, 5);

    return (
        <>
            {topCredits.map((actor) => (
                // <Paper key={actor.id} sx={{listStyle: "none"}}>
                //     <Typography actor={actor} key={actor.id}>
                //         {actor.name} as {actor.character}
                //     </Typography>
                //     <Chip label={`${actor.name} as ${actor.character}`} />
                // </Paper>
                <Paper
                    component="ul"
                    sx={{ ...root }}
                >
                    <Avatar src = {actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : img} />

            
                    <Chip label={`${actor.name} as ${actor.character}`} sx={{ ...chip }} />
                </Paper>
            ))}
        </>
    );
};
export default MovieCredits;

