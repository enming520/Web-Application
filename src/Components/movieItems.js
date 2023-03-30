import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

export class MovieItems extends React.Component {

    // Delete event
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/movie/' + this.props.movie._id)
            .then(() => { this.props.ReloadData(); })
            .catch();
    }


    // use bootstrap css to create card list
    render() {
        return (
            <div>
                <center>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>{this.props.movie.title}</Card.Header>
                        <Card.Body>
                            <blockquote>
                                {this.props.movie.year}
                                <img src={this.props.movie.poster} width="250" height="250"></img>
                                <footer>
                                    {this.props.movie.director}
                                </footer>
                            </blockquote>
                            <Button variant="primary">Learn more..</Button>
                        </Card.Body>
                        <Link to={"/editMovie/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                        <br></br>
                        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    </Card>
                    <br />
                </center>
            </div>
        );
    }
}