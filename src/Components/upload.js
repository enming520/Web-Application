import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";



export class Upload extends React.Component {

    // important bind events from each onChange attributes
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.onChangeMovieDirector = this.onChangeMovieDirector.bind(this);


        this.state = {
            title: '',
            year: '',
            poster: '',
            director: ''
        }
    }

    // taking event when click the submit button in the form
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked
        Title: ${this.state.title}
        Year: ${this.state.year}
        Poster: ${this.state.poster}
        Director: ${this.state.director}`);

        const movie = {
            title: this.state.title,
            year: this.state.year,
            poster: this.state.poster,
            director: this.state.director
        }

        // make http request and construct some data and pass the data to the server
        axios.post('http://localhost:4000/api/movies', movie)
            .then()
            .catch();


        this.setState({
            title: '',
            year: '',
            poster: '',
            director: ''
        })
    }

    // when the value in the field changes, this event will triger.
    // Each event is linked with the onchange method.
    onChangeMovieTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeMovieYear(e) {
        this.setState({
            year: e.target.value
        })
    }

    onChangeMoviePoster(e) {
        this.setState({
            poster: e.target.value
        })
    }

    onChangeMovieDirector(e) {
        this.setState({
            director: e.target.value
        })
    }

    render() {
        return (
            // HTML Form the hold the info entered by the user.
            <Container>
                <div >
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Add Movie Title: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeMovieTitle}
                            />
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>Add Release Year: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.year}
                                onChange={this.onChangeMovieYear}
                            />
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>Add Movie Poster: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.poster}
                                onChange={this.onChangeMoviePoster}
                            />
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>Add Movie Director: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.director}
                                onChange={this.onChangeMovieDirector}
                            />
                        </div>
                        <br></br>
                        <div className="App">
                            <input type="submit" value="Upload Movie" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </Container>
        )
    }
}