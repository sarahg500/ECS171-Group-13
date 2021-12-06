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
        meat: "N/A",
        fruit: "N/A",
        gold: "N/A"
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
    
    console.log(formData.income != "" && formData.income != 0);
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
        console.log(response.result)
        this.results = response.result
        var new_refresh = this.state.refresh + 1
        this.setState({
          refresh: new_refresh
        })
    
      });    
    } else {
      this.results = "";
      var new_refresh = this.state.refresh + 1
      this.setState({
        refresh: new_refresh
      })
  
    }
  }

  handleIncomeChange = (event) => {
    // console.log("Event Value: " + event.target.value);
    var cur_income = event.target.value;
    var incomeToGive = cur_income;
    if(incomeToGive > 100000) {
      incomeToGive = 100000;
    }

    this.predict(incomeToGive);

    this.setState({
      income: cur_income
    });
    
  }

  render() {
    var amtWine = "N/A";
    var amtSweets = "N/A";
    var amtFish = "N/A";
    var amtMeat = "N/A";
    var amtFruit = "N/A";
    var amtGold = "N/A";

    if(this.results != "") {
      var parsed = JSON.parse(this.results);
      amtWine = parsed.wine.toFixed(2);
      amtSweets = parsed.sweetprod.toFixed(2);
      amtFish = parsed.fish.toFixed(2);
      amtMeat = parsed.meat.toFixed(2);
      amtFruit = parsed.fruit.toFixed(2);
      amtGold = parsed.gold.toFixed(2);
    }

    var introText = "With the rise of social media and online shopping, "
    + "companies have sought ways to utilize big data, machine learning, and AI to increase profit."
    + " The vast amounts of generated customer data give us insights into what attracts customers to specific products and services."
    + " One of the main ways of using this data is creating better-performing marketing tools aimed at target audiences. "
    + "Companies need to know which audiences are attracted to their advertisements and not waste resources. "
    + "Our research seeks to create machine learning models which can utilize customer data and inform marketing decisions. "
    + "We aim to discover which customer data attributes correlate most with what type of products they will purchase and how these attributes relate to each other to predict customer habits. "
    + "Knowing what attributes of customer data make marketing campaigns successful, companies can use machine learning models like the ones we researched to better "
    + "understand which customers they should be targeting for specific ad campaigns. "

    return (
      <div className="homeCont">
        <div className="homeContPrim">
          <div className="title">
            ECS 171 Group 13 Project Demo
          </div>
          <div className="homeContText">
            {introText}
          </div>
          <div className="incomeInput">
            <div>
              Enter Income ($):
            </div>
            <input type="number" value={this.state.income} onChange={this.handleIncomeChangeRef}/>
          </div>

        </div>
        <div className="homeContSec">
          <div className="outputRow">
            <div className="row" style={{paddingTop: '40px'}}>
              <div className="col-4">
                <div>
                  Wine ($):
                </div>
                <div>
                  {amtWine}
                </div>
              </div>
              <div className="col-4">
                <div>
                  Sweets ($):
                </div>
                <div>
                  {amtSweets}
                </div>
              </div>
              <div className="col-4">
                <div>
                  Fruit ($):
                </div>
                <div>
                  {amtFruit}
                </div>
              </div>

            </div>

          </div>
          <div className="outputRow">
            <div className="row" style={{paddingTop: '40px'}}>
              <div className="col-4">
                <div>
                  Fish ($):
                </div>
                <div>
                  {amtFish}
                </div>
              </div>
              <div className="col-4">
                <div>
                  Meat ($):
                </div>
                <div>
                  {amtMeat}
                </div>
              </div>
              <div className="col-4">
                <div>
                  Gold ($):
                </div>
                <div>
                  {amtGold}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}
