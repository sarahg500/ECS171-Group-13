import React from "react";

function LinkTwo(props) {

    // set up data we need
    // name was added as a property of the component, when it was called

  
    // returns a DOM subtree
    if(props.stage == 3){
        // notice curly braces evaluates the variable to get a string.
        return (
           <div>
               <p>proof of concept check link one</p>
            </div>
        );
    }
    else{
        return null;
    }
  }
  export default LinkTwo;