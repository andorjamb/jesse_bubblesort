
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const userInput = useRef();
  const [unsorted, setUnsorted] = useState([]);
  const [array, setArray] = useState([]);


  const getArrayToSort = () => {



    let arrayToSort = [];
    arrayToSort = userInput.current.value.split(',');
    formatArray(arrayToSort);
  };

  const clearArray = (e) =>{
    setUnsorted([]);
    e.target.value='';
  }

  const formatArray = (arr) => {
    if (unsorted.map(Number).includes(NaN)) {
      setUnsorted(arr);
    }
    else {
      setUnsorted(arr.map(Number));
    }
 
  }


  useEffect(() => {

    const sortArray = () => {

      let sorted = false;
      while (!sorted) {
        sorted = true;
        for (let i = 0; i < unsorted.length - 1; i++) {
          if (unsorted[i] > unsorted[i + 1]) {
            sorted = false;
            let temp = unsorted[i];
            unsorted[i] = unsorted[i + 1];
            unsorted[i + 1] = temp;
          }
        }
      }

      setArray(unsorted);
    }
    sortArray();
  }, [unsorted])
  return (
    <div className="App">
      <h1>React Bubble sort</h1>
      <label htmlFor="list">Enter value Separated by comma to sort</label>
      <input id='list' type="search" ref={userInput} size="50"  onFocus={clearArray}/>

      {array.length > 0 ? (
        <>
          <h2>Sorted Array</h2>
          {array.map((number) => (
            <div key={number}
              style={{
                border: "solid 3px black", marginTop: "1rem", textAlign: "center",
                padding: "1rem", width: "30px", borderColor: "green"
              }}>
              {number}</div>
          ))}
        </>
      ) : (<h2>Waiting For input array</h2>)}
      <button onClick={getArrayToSort}>Bubble Sort</button>
    </div>
  );
}

export default App;
