import './DisplayText.css'
import React, { useState } from "react";

function DisplayText() {
  const [listItem, setListItem] = useState([]);
  const [userInput, setUserInput] = useState("");

  function handleUpdateListItem() {
    setListItem([...listItem, userInput]);
    setUserInput("");
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
        <label>
          Enter Content Here:
          <input type="text" value={userInput} onChange={handleUserInput}/>
          <button type="button" onClick={handleUpdateListItem}>
            Submit
          </button>
        </label>
      </div>

      <div className='DisplayField'>
        <p>
          Items:
          {listItem.map((item, index) => (
            <ul key={index}>
              <li>
                {item}
                <button type="button" onClick={() => handleDeleteListItem(item)}>X</button>
              </li>
            </ul>
          ))}
        </p>
      </div>
    </div>
  );
}

export default DisplayText;
