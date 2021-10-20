import React, {useState} from 'react';

function Room() {
    let [islit, setlit] = useState(true)
    let [age, setage] = useState(0)
    function updateLit(){
        console.log("button clicked");
        setlit(!islit)
    }
    //function updateage(){
     // console.log("button clicked");
      //  setage(++age)
    //}
    return (
    <div>
        This room is : Lit = {islit? "lit": "dark"}
        <br/>
        Age: {age}
        <br/>
        <button onClick={updateLit} > Toggle light</button>
        <br/>
        <button onClick={ () => setage(++age)} > Increase age</button>
    </div>
  );
}

export default Room;
