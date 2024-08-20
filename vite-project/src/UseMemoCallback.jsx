import { useState, useMemo, useCallback } from "react";

function SortedList({ list, sortFunc }){ // prop validatin missing

    // react memo uses cash to save data 
    // really good use of useMemo - single level memorization
    const sortedList = useMemo(() => {
        console.log("Sort using useMemo Test!")
        return [...list].sort(sortFunc); // running twice when in dev mode
    }, [list, sortFunc]); // copy the names before sorting
    return <div>Sorted List: {sortedList.join(" ")}</div>
}

// TO SAVE
// for a lot of data 1000 lines of readable and displayable data
// for complex calculations and data should be saved only when needed

// REACT compares objects by referance

function App(){ // this is a component and runs every time when updated

    const [numbers] = useState([10, 20, 30]);

    // It will run the function based on the change of the first state of numbers
    // useMemo will update state when a previos state of a large array / object changes
    const total = useMemo(() => numbers.reduce((acc, number) => acc + number, 0), [numbers]);
    // () => numbers.reduce((acc, number) => acc + number -> this returns a new array

    // to use the function when needed -> the list changes or component
    const sortFunc1 = useCallback((str1, str2) => str1.localCompare(str2) * -1, []); 
    // empty array because of unused data in the function

    const [names] = useState(["John", "Paul", "George", "Ringo"]);

    return (
        <>
            <div>Total: {total}</div>
            <div>Names: {names.join(", ")}</div>
            <SortedList list={names} sortFunc={sortFunc1} />
        </>
    )
}
  
export default App;
