import { useState, useEffect } from "react";

function App(){

  const [names, setNames] = useState([]);

  // teching data causes infinite loop
  // thats why we use useEffect
  // do this onece => takes a function once the Dom is rendered 
  // or when the dependancy array changes 
  useEffect(() => {
    fetch("/names.json")
    .then((response) => response.json())
    .then((data) => setNames(data))
  }, []); // emty array because we are not depending on anything

    return (
      <div>
        Names: {names.join(", ")}
      </div>
    )
  }
  
  export default App;