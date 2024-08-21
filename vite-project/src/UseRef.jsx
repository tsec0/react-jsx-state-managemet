import { useRef } from 'react';

// one more way to associate state with a component
// change the value of a reference 
// does not cause a component rerender (convinient)

// comonly useRef is for getting an html element
// which references to that element

function App(){
    
  const inputRef = useRef(null);

  return (
      <div>
        <input type="text" ref={inputRef} />
      </div>
    )
  }
  
  export default App;