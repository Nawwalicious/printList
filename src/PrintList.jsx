import { useState } from "react"

function PrintList(){

const[List,setList]=useState([]);

setList(List.push(1));

// function handlePrintList(array)
// {
//     return array.map(
//         function item(value)
//         {
//             <li>{value}</li>
//         }
//     );
// }

/*
    import { useState } from "react";

function PrintList2() {
  const [list, setList] = useState([]);

  setList([...list, 1]);
  setList([...list, 2]);
  setList([...list, 3]);
  setList([...list, 4]);
  setList([...list, 5]);
  setList([...list, 6]);
  setList([...list, 7]);
  setList([...list, 8]);
  setList([...list, 9]);

  function handlePrintList(array) {
    return array.map(function item(value, index) {
      return <li key={index}>{value}</li>;
    });
  }

  return (
    <div>
      <ul>{handlePrintList(list)}</ul>
    </div>
  );
}

export default PrintList2;

*/

return(
    <div>
        <h2>List Values:</h2>
        {/* <ul>
            {handlePrintList(list)}
        </ul> */}
    </div>
);

}

export default PrintList