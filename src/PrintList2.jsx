import { useState } from "react";

function PrintList2()
{
  const [list, setList] = useState(['k','j','l']); //list[] defined here
  const [inputValue, setInputValue] = useState("");


  function updateList(item) {
    setList([...list, item]);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    updateList(inputValue);
    setInputValue("");
  }

  function handleDeleteItem(item) {
    for(var i=0;i<list.length;i++)
    {
      if(list[i]==item)
      {setList([...list[i], null]);}
    }
  }

  function handlePrintList(array)
  {
    return array.map(
      function renderItem(value, index)
      {
        return <li key={index}>{value}</li>;
      }      
    );
  }

  return (
    <div>

      <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Add to list</button>
      </form>

      <ul>{handlePrintList(list)}</ul>

      <button onClick={() => handleDeleteItem(list)}>Delete</button>

    </div>
  );
}

export default PrintList2;
