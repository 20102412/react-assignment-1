import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import img from "../../images/film-poster-placeholder.png"
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Spinner from "../spinner";
import { getMovieRecommendations } from "../../api/tmdb-api";
import {CardHeader, CardMedia, Card, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

const root = {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieRecommendations = (props) => {
    const { id } = useParams();
    const { data: recommendations, error, isPending, isError } = useQuery({
        queryKey: ['recommendations', { id: id }],
        queryFn: getMovieRecommendations,
    })


    if (isPending) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const recommended = recommendations?.results || [];
    const topRecommendations = recommended.slice(0, 6);

    return (
        <Paper sx={{marginTop: 2}}>
            <Typography variant="h5" component="h3">
                Recommended
            </Typography>
            <Divider />
            {topRecommendations.map((otherMovie) => (
            
                <Box
                    component="ul"
                    sx={{ ...root }}
                >
                    <Card sx={{background: "#D76C82", backgroundSize: "cover", width: 300, length: 500}}>
                    <CardHeader title={<Typography variant="h5" component="p" sx={{color: "#EBE8DB"}}>
                                            {otherMovie.title}{" "}
                                        </Typography>
                                    }>
                    </CardHeader>

                    <CardMedia
                sx={{ height: 500 }}
                image={
                    otherMovie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${otherMovie.poster_path}`
                        : img
                }
            />
                    </Card>
                    
                </Box>
            ))}
    </Paper>
    );
};
export default MovieRecommendations;

