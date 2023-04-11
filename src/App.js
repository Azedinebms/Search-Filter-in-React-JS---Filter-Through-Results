import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [fruits_list, setFruits] = useState(["Apple", "Orange", "Banana"])

  const fruit = fruits_list.map((fruit, index) => (
    <p ket={index}><b>{fruit}</b></p>
  )
  )


  return (
    <div className='App'>
      <h1>Array with React Js</h1>
      {fruit}
    </div>
  );
}

export default App;
