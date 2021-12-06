import React, { Component,useRef, useEffect, useState  } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class LinkOne extends Component {
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
          
    if(cur_income > 100000) {
      cur_income = 100000;
    }

    this.predict(cur_income);

    this.setState({
      income: cur_income
    });
    
  }
  
  
  render(){
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

    if(this.props.stage == 2){
        // notice curly braces evaluates the variable to get a string.
        return (
          <div classname = "background_image">
            <div className="homeCont">
              <div className="homeContPrim">
                <div className="title">
                  Group 13 Exponential Model
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
                <button className="goHome" onClick= {()=>{this.props.nextstage(1)}}>
                Homepage
              </button>
              </div>
            </div> 
             
          </div>
        );
    }
    else{
        return null;
    }
  }
}
export default LinkOne;