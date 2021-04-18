import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [count,setCount]=React.useState(0);


  return (
    <div data-test="component-app"> 

    <button data-test='increment-button'>Increment button</button>
    <h1 data-test="counter-display">
      The counter is&nbsp
      <span data-test="count">{count}</span>
    </h1>
    
    </div>
  );
}

export default App;

