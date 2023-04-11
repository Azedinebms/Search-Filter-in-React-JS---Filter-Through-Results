import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [emps,setEmps]=useState([
    {name:"Raja",experience:"10+ Years"},
    {name:"Mano",experience:"2 Years"},
    {name:"Tom",experience:"5+ Years"},
])
  const fruit = emps.map((employe, index) => (
    <p ket={index}><b>{employe.name}  {employe.experience}</b></p>
  )
  )

  const addRow=()=>{
    let newEmp={name:"Random User1",experience:"6 Years"}
    setEmps([...emps,newEmp])
}

const updateRow=()=>{
  let index=0
  let newEmp=emps[index]
  newEmp["name"]="Modfied User";
  emps[index]=newEmp
  setEmps([...emps])
}

const deleteRow = () => {
  //let name="Mano"
  //setEmps(emps.filter(emp => emp.name !== name))
  let copy_emp=[...emps]
  copy_emp.splice(0,1)
  setEmps(copy_emp)
}
  


  return (
    <div className='App'>
      <h1>Array with React Js</h1>
      {fruit}

      <button onClick={addRow}>Add</button>
      <button onClick={updateRow}>Update</button>
      <button onClick={deleteRow}>Delete</button>
    </div>
  );
}

export default App;
