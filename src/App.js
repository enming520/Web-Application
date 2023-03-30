import './App.css';
import React from 'react';
import { Home } from './Components/home';
import { Select } from './Components/select';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Upload } from './Components/upload';
import { EditMovie } from './Components/editMovie';



class App extends React.Component {
  render() {
    return (
      //JSX code, import contents from Components
      <Router>
        <div>
          {/* Navbar using bootstrap */}
          <Navbar bg="primary " variant="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/select">Select</Nav.Link>
                <Nav.Link href="/upload">Upload</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          {/* Imporing Route to call each page */}
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/select' element={<Select></Select>}></Route>
            <Route path='/upload' element={<Upload></Upload>}></Route>
            <Route path='/editMovie/:id' element={<EditMovie></EditMovie>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;