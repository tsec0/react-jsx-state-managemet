import { useState, useEffect } from "react";

function App(){

  const [names, setNames] = useState([]);

  const [selectedName, setSelectedName] = useState(null);

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

  useEffect(() => {
    if(selectedName){
      fetch(`/${selectedName}.json`)
        .then((response) => response.json())
        .then((data) => setSelectedNamedetails(data))
      }
    }, [selectedName]); // this is the dependancy array

    return (
      <div>
        {/* Missing a key */}
        {names.map((name, index) => (<button key={index} onClick={() => setSelectedName(name)}>{name}</button>))} 
        <div>{JSON.stringify(selectedNameDetails)}</div>
      </div>
    )
  }
  
  export default App;