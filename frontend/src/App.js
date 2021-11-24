import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

// Adds an extra CSS file to the cascade
// This disappears outside this file
import './App.css';


function Grad(props) {

  // set up data we need
  // name was added as a property of the component, when it was called
  let name = props.name;

  // returns a DOM subtree
  // notice curly braces evaluates the variable to get a string.
  return (
    <p className="diva">{name}</p>
  );
}

function GradRow(props) {

  // for our education
  console.log(props.children);
  console.log(props.title);

  return (
    // adjacent elements have to be inside a container (here, a div)
    // props.children is the children of this element in the JSX when called
    // the curly braces around props.children evaluates the array
    <div id="outer" >
      <h1>{props.title}</h1>
      <p className = "Team_Members">
      Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez,Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez,Joshua Sanchez
      </p>
      <p className = "Bio">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac. Congue quisque egestas diam in arcu cursus euismod. Elementum eu facilisis sed odio. Egestas erat imperdiet sed euismod nisi. Aenean sed adipiscing diam donec adipiscing tristique. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. At tellus at urna condimentum mattis pellentesque id nibh. Ipsum consequat nisl vel pretium lectus. Rutrum tellus pellentesque eu tincidunt tortor. Massa tincidunt dui ut ornare lectus sit. Morbi tincidunt ornare massa eget egestas purus. Curabitur vitae nunc sed velit. Accumsan in nisl nisi scelerisque eu ultrices. Sagittis orci a scelerisque purus.

      Pretium viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt augue interdum velit. Proin libero nunc consequat interdum varius sit amet mattis. Eu consequat ac felis donec et. Proin fermentum leo vel orci porta non pulvinar neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Malesuada fames ac turpis egestas sed tempus urna. Ut sem viverra aliquet eget sit. Neque egestas congue quisque egestas diam in. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis.


      </p>
      <div className="gradRow">
        {props.children}
      </div>
    </div>
  )
}


function App() {
  return (
    // adjacent elements have to be inside a container (here, main)
    // the two children of the GradRow components show up as its props.children
    <main>
    
      <GradRow title="Group 13 Project">
        <Grad name="Link One" />
        <Grad name="Link Two" />
        <Grad name="Link Three" />

      </GradRow>

   


    </main>
  )
}

export default App;

