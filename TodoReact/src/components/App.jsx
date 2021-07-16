import React, { useState } from "react";



function App() {

  const[eventText, setInputText] = useState("");
  const[items, setItems] = useState([])

  function changeHandle(event){
    const newValue = event.target.value;
    setInputText(newValue);
    }
function addText(){
  setItems( prevValues =>{
    return [...prevValues,eventText]
  });

  setInputText("");

}
   
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandle} type="text" value={eventText} />
        <button onClick={addText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoitem =><li> {todoitem}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
