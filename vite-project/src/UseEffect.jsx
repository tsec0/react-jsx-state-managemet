import { useState, useEffect } from "react";

function App(){

  const [names, setNames] = useState([]);

  const [selectedNameDetails, setSelectedNamedetails] = useState(null);

  // teching data causes infinite loop
  // thats why we use useEffect
  // do this onece => takes a function once the Dom is rendered 
  // or when the dependancy array changes 
  useEffect(() => {
    fetch(`/names.json`)
    .then((response) => response.json())
    .then((data) => setNames(data))
  }, []); // this is the dependancy array

  // callback function
    const onSelectedNameChange = (name) => {
      fetch(`/${name}.json`)
        .then((response) => response.json())
        .then((data) => setSelectedNamedetails(data))
    }

    return (
      <div>
        {/* Missing a key */}
        {names.map((name, index) => (<button key={index} onClick={() => onSelectedNameChange(name)}>{name}</button>))} 
        <div>{JSON.stringify(selectedNameDetails)}</div>
      </div>
    )
  }
  
  export default App;