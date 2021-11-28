import React, { Component,useRef, useEffect, useState  } from 'react';


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class LinkOne extends Component {
    handleformData = () => {
      var newData = this.props.newData;
      newData({sepalLength: 6.4,
        sepalWidth: 2.9,
        petalLength: 4.3,
        petalWidth: 1.3});
        this.componentDidMount();
    }

    componentDidMount = () => {
        var newresult = this.props.newresult;


        fetch('http://127.0.0.1:5000/prediction/', 
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.props.formData)
          })
          .then(response => response.json())
          .then(response => {
            newresult(response.result);
            console.log("This is the result:" + response.result);
          });
    }
    render(){
        if(this.props.stage == 2){

            // notice curly braces evaluates the variable to get a string.
            return (
                <div>
                  <button onClick={this.handleformData}> Click me </button>
                    {this.props.result}
                </div>
            );
        }
        else{
            return null;
        }
    }
  }
  export default LinkOne;