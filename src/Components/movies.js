import React from "react";
import { MovieItems } from "./movieItems";

export class Movies extends React.Component {
    render() {
        // acquire the data pass from the parent.
        // map function to collect data.
        return this.props.movies.map((movie) => {
            // pass each movie to each one of the movieItems
            return <MovieItems movie={movie} key={movie.id} ReloadData={this.props.ReloadData}></MovieItems>
        }
        );
    }
}