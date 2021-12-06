import React, { Component,useRef, useEffect, useState  } from 'react';
import CenterRow from './Components/CenterRow.js'
import Link from './Components/Link.js'
import LinkOne from './Components/LinkOne.js'
import LinkTwo from './Components/LinkTwo.js'

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
    this.state = {
      stage: 1
    };
  }
  nextstage(next) {
    console.log('We changee the stage to:' + next);
    this.setState({
      stage: next
    })
    console.log('successfully changed stage to:' + this.state.stage);
  }

  render() {
    var nextstage = this.nextstage;

    return (
      <React.Fragment>
        <main>
          <CenterRow stage = {this.state.stage}>   
            <Link name={"Exponential Income Model"} stage = {this.state.stage} nextstage = {nextstage.bind(this)} />
          </CenterRow>
          <LinkOne stage = {this.state.stage} nextstage = {nextstage.bind(this)}  />
        </main>
    </React.Fragment>

  );
  }
}