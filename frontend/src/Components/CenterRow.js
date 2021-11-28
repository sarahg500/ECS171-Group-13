import React from "react";

function CenterRow(props){
    if(props.stage == 1){
        return (
            <div id="outer">
                <h1>{"Group 13 Project"}</h1>
                <p className = "Team_Members">
                Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez,Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez, Joshua Sanchez,Joshua Sanchez
                </p>
                <p className = "Bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua.Pretium aenean pharetra magna ac. Congue quisque egestas diam in arcu cursus 
                euismod. Elementum eu facilisis sed odio. Egestas erat imperdiet sed euismod nisi. Aenean sed 
                adipiscing diam donec adipiscing tristique. Scelerisque mauris pellentesque pulvinar pellentesque 
                habitant morbi tristique senectus et. At tellus at urna condimentum mattis pellentesque 
                id nibh. Ipsum consequat nisl vel pretium lectus. Rutrum tellus pellentesque eu tincidunt tortor. 
                Massa tincidunt dui ut ornare lectus sit. Morbi tincidunt ornare massa eget egestas purus. Curabitur
                vitae nunc sed velit. Accumsan in nisl nisi scelerisque eu ultrices. Sagittis orci a scelerisque purus.
                Pretium viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt augue interdum velit.
                Proin libero nunc consequat interdum varius sit amet mattis. Eu consequat ac felis donec et. 
                Proin fermentum leo vel orci porta non pulvinar neque. Sapien pellentesque habitant morbi tristique 
                senectus et netus et malesuada. Malesuada fames ac turpis egestas sed tempus urna. Ut sem viverra aliquet 
                eget sit. Neque egestas congue quisque egestas diam in. Tincidunt praesent semper feugiat nibh sed pulvinar proin. 
                Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Aliquam ultrices sagittis orci a 
                scelerisque purus semper eget duis.
                </p>
                <div className="CenterRow">
                    {props.children}
                </div>
            </div>
        )
    }
    else{
        return null;
    }
}
export default CenterRow;