
import React from "react";

export class Content extends React.Component{
    // Content component
    render(){
        return (
          // JSX code
          <div className="App">
            <h2>Hello</h2>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
          </div>
        );
        }
    }