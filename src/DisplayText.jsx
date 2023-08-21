import './DisplayText.css'
import React, { useState } from "react";

function DisplayText() {
  const [listItem, setListItem] = useState([]);
  const [userInput, setUserInput] = useState("");

  function handleUpdateListItem() {
    if (userInput !== "") {
      setListItem([...listItem, userInput]);
      setUserInput("");
    }
  }

  function handleUserInput(event) {
      setUserInput(event.target.value);
  }

  function handleDeleteListItem(val) {
    const newList = listItem.filter(item => item !== val);
    setListItem(newList);
  }

  return (
    <div>
      <div className='InputField'>

        <label>To do list</label><br></br>
          <input type="text" value={userInput} onChange={handleUserInput} placeholder='Enter Tasks'/>
          <button type="button" onClick={handleUpdateListItem}> Submit </button>

      </div>

      <div className='DisplayField'>
        <p>Items:</p>

          <ul >
          {listItem.map((item, index) => (
            
              <li key={index}>
                <div className='listData'>{item}</div>
                <div className='listDeleteButton'><button type="button" onClick={() => handleDeleteListItem(item)}>X</button></div>
              </li>
          ))}
          </ul>
        

      </div>
    </div>
  );
}

export default DisplayText;
