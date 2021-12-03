import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      income: "",
      outputs: {
        wine: "N/A",
        sweets: "N/A",
        fish: "N/A",
        meat: "N/A"
      },
      refresh: 0
    };

    this.results = "";
    this.handleIncomeChangeRef = this.handleIncomeChange.bind(this)
  }

  async predict(cur_income) {
    const formData = {
      income: cur_income
    };

    if(formData.income != "" && formData.income != 0) {
      fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.results = response.result
        var new_refresh = this.state.refresh + 1
        this.setState({
          refresh: new_refresh
        })
      });    
    }
  }

  handleIncomeChange = (event) => {
    // console.log("Event Value: " + event.target.value);
    var cur_income = event.target.value
    this.predict(cur_income);

    this.setState({
      income: event.target.value
    });
    
  }

  render() {
    var amtWine = "N/A";
    var amtSweets = "N/A";
    var amtFish = "N/A";
    var amtMeat = "N/A";

    if(this.results != "") {
      var parsed = JSON.parse(this.results);
      amtWine = parsed.wine;
      amtSweets = parsed.sweetprod;
      amtFish = parsed.fish
      amtMeat = parsed.meat
    }

    return (
      <div className="homeCont">
        <div className="homeContPrim">
          <div className="title">
            ECS 171 Group 13 Project Demo
          </div>
          <div className="incomeInput">
            <div>
              Enter Income:
            </div>
            <input type="number" value={this.state.income} onChange={this.handleIncomeChangeRef}/>
          </div>

        </div>
        <div className="homeContSec">
          <div className="outputRow">
            <div className="row" style={{paddingTop: '40px'}}>
              <div className="col-6">
                <div>
                  Wine:
                </div>
                <div>
                  {amtWine}
                </div>
              </div>
              <div className="col-6">
              <div>
                  Sweets:
                </div>
                <div>
                  {amtSweets}
                </div>
              </div>
            </div>

          </div>
          <div className="outputRow">
            <div className="row" style={{paddingTop: '40px'}}>
              <div className="col-6">
                <div>
                  Fish:
                </div>
                <div>
                  {amtFish}
                </div>
              </div>
              <div className="col-6">
                <div>
                  Meat:
                </div>
                <div>
                  {amtMeat}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}
