import { useRef, useEffect, useState } from 'react';

// one more way to associate state with a component
// change the value of a reference 
// does not cause a component rerender (convinient)

// comonly useRef is for getting an html element
// which references to that element

// to maintain state whidout doing any updates

function App(){

  const inputRef = useRef(null);

  // auto increment id
  const idRef = useRef(0); // but its not working fine

  const [names, setNames] = useState([
    {id: idRef.current += 1, name: "John"},
    {id: idRef.current += 1, name: "Jane"},
    {id: idRef.current += 1, name: "Jill"},
  ]);

  // runs only once with empty dependancy array
  useEffect(() => {
    inputRef.current.focus(); // the current value (set or read from)
  }, []);

  const onAddName = () => {
    setNames([
      ...names, 
      {
        id: idRef.current += 1,
        name: inputRef.current.value,
      },
    ]);
    inputRef.current.value = "";
  };

  return (
      <div>
        {names.map((item) => (
          <div key={item.id}>{`${item.id} - ${item.name}`}</div>
        ))}
        {/* Uncontrolled input in React */}
        <input type="text" ref={inputRef} />
        <button onClick={onAddName}>Add Name</button>
      </div>
    )
  }
  
  export default App;