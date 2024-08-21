import { useState, useEffect } from "react";

function App(){

  const Stopwatch = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
      // closure
      const interval = setInterval(() => {
        // call the setter and use function (or give the new value)
        setTime((prev) => prev + 1);
      }, 1000);
      // clear the interval
      return () => clearInterval(interval);
    }, []); // should be emty

    return <div>Time: {time}</div>
  };

  const [names, setNames] = useState([]);

  const [selectedNameDetails, setSelectedNamedetails] = useState(null);

  // teching data causes infinite loop
  // thats why we use useEffect
  // do this onece => takes a function once the Dom is rendered 
  // or when the dependancy array changes 
  // should be implemented when really needed
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
        <Stopwatch />
        {/* Missing a key */}
        {names.map((name, index) => (<button key={index} onClick={() => onSelectedNameChange(name)}>{name}</button>))} 
        <div>{JSON.stringify(selectedNameDetails)}</div>
      </div>
    )
  }
  
  export default App;