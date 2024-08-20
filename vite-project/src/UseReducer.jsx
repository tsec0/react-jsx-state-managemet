import { useReducer } from 'react'
// more data like form data

function UserForm(){

  const [state, dispatch] = useReducer((state, action) => ({
      ...state,
      ...action,
    }), {
    first: "",
    last: "",
  });

  return (
      <div>
        <input 
          type="text"
          value={state.first}
          onChange={(e) => dispatch({ first: e.target.value })}/>
        <input 
          type="text"
          value={state.last} 
          onChange={(e) => dispatch({ last: e.target.value })}
          />
          <div>
            <p>{"First:"}{state.first}</p>
            <p>{"Last:"}{state.last}</p>
          </div>
      </div>
    )
}

function NameList() {  
  // (existing state, action = {type, payload}
  const [ state, dispatch ] = useReducer((state, action) => {
    switch(action.type){
      case "SET_NAME":
        // spread the current state 
        // change only the name via the payload
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { 
          ...state, // spread the current state 
          // all existing names plus the new name
          names: [ ...state.names, state.name ],
          name: "",
        };
    }
  }, { // state -> the initial state
    names: [],
    name: "",
  })

  return (
    <>
      <label htmlFor='name'>{"Име: "}</label>
      <div>{state.names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}</div>
      <div>{state.name}</div>
      <input
        id="name"
        type="text"
        value={state.value}
        onChange={e => dispatch({ 
          type: "SET_NAME", payload: e.target.value
        })}/>
      <button
        onClick={() => dispatch({
          type: "ADD_NAME", payload: state.name
        })}>{"Добави име"}</button>
    </>
  )
}

function App(){
  return (
    <div>
      <UserForm />
      <NameList />
    </div>
  )
}

export default App;
