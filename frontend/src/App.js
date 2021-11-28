import React, { Component,useRef, useEffect, useState  } from 'react';
import CenterRow from './Components/CenterRow.js'
import Link from './Components/Link.js'
import LinkOne from './Components/LinkOne.js'
import LinkTwo from './Components/LinkTwo.js'
import LinkThree from './Components/LinkThree.js'

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
    var nextstage = this.nextstage.bind(this)
    var newresult = this.newresult.bind(this)
    var newData = this.newData.bind(this)
    this.state = {
      stage: 1,
      isLoading: false,
      formData: {sepalLength: 9,
        sepalWidth: 9,
        petalLength: 9,
        petalWidth: 9},
      result: ""
    };
  }
  nextstage(next) {
    console.log('We changee the stage to:' + next);
    this.setState({
      stage: next
    })
    console.log('successfully changed stage to:' + this.state.stage);
  }
  newresult(newresult) {
    this.setState({
      result: newresult,
      isLoading: false
    })
  }
  newData(newData) {
    this.setState({
      formData: newData
    })
  }
  render() {
    var nextstage = this.nextstage;
    var newresult = this.newresult;
    var newData = this.newData;

    return (
      <React.Fragment>
        <main>
          <CenterRow stage = {this.state.stage}>   
            <Link name={"Link One"} stage = {this.state.stage} nextstage = {nextstage.bind(this)} />
            <Link name={"Link Two"} stage = {this.state.stage} nextstage = {nextstage.bind(this)}/>
            <Link name={"Link Three"} stage = {this.state.stage} nextstage = {nextstage.bind(this)}/>
          </CenterRow>
          <LinkOne stage = {this.state.stage} isLoading = {this.state.isLoading} formData = {this.state.formData} result = {this.state.result} newresult = {newresult.bind(this)} newData = {newData.bind(this)}  />
          <LinkTwo stage = {this.state.stage} isLoading = {this.state.isLoading} formData = {this.state.formData} result = {this.state.result} />
          <LinkThree stage = {this.state.stage} isLoading = {this.state.isLoading} formData = {this.state.formData} result = {this.state.result} />
        </main>
    </React.Fragment>

  );
  }
}