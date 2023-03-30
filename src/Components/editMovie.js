import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";


export function EditMovie(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const [director, setDirector] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/movie/' + id)

            .then((response) => {
                // Assign Response data to the arrays using useState.
                setTitle(response.data.title);
                setYear(response.data.year);
                setPoster(response.data.poster);
                setDirector(response.data.director);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    // Handle the event to edit the movie info, and navigate back to select movie page.
    const handleSubmit = (event) => {
        event.preventDefault();
        const newMovie = {
            id: id,
            title: title,
            year: year,
            poster: poster,
            director: director
        };
        axios.put('http://localhost:4000/api/movie/' + id, newMovie)
            .then((res) => {
                console.log(res.data);
                navigate('/select');
            });
    }

    return (
        // Form allows user to edit the movie details and submit to the server, an server update the new details.
        <Container>
            <div>
                <h2 className="App">Edit The Movie</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Edit Movie Title: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Edit Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Edit Movie Poster </label>
                        <input type="text"
                            className="form-control"
                            value={poster}
                            onChange={(e) => setPoster(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Edit Movie Director: </label>
                        <input type="text"
                            className="form-control"
                            value={director}
                            onChange={(e) => setDirector(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div className="form-group App">
                        <input type="submit" value="Update Movie" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        </Container>
    );
}