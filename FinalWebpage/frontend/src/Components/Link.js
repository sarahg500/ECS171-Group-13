import React, { Component } from "react";

class Link extends Component{

    // set up data we need
    // name was added as a property of the component, when it was called
    render(){
        var nextstage = this.props.nextstage;
        var name = this.props.name;

        // returns a DOM subtree
        if(this.props.stage == 1){
            // notice curly braces evaluates the variable to get a string.
            return (
                <button className="link" onClick= {()=>{
                    nextstage(2);
                
                }}>
                    <p id = "LinkCSS">{name}</p>
                </button>
            );
        }
        else{
            return null;
        }
    }
  }
  export default Link;