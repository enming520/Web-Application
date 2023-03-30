import React from "react";
import { Movies } from "./movies";
import axios from "axios";

export class Select extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData() {
        // axios makes http request to the server instead of using hard code.
        axios.get('http://localhost:4000/api/movies')
            // drag http response back and then assign the local variables to it.
            .then((response) => {
                this.setState({ movies: response.data })
            })
            // catch errors.
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // store variables from the server in the array.
    state = {
        movies:
            [

            ]
    };

    render() {
        return (
            <div className="App">
                <h2 style={{ margin: "15px" }}>Select Your Movie!</h2>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );

    }
}
