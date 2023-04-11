import React, { useEffect, useState } from 'react';
import './App.css';

const ArraywithObject = () => {

    const employees = [
        {
            id: 1,
            name: "Tobe",
            experience: 4,
            department: "Accounting",
        },
        {
            id: 2,
            name: "Jolee",
            experience: 13,
            department: "Services",
        },
        {
            id: 3,
            name: "Muhammad",
            experience: 14,
            department: "Training",
        },
        {
            id: 4,
            name: "Hubie",
            experience: 5,
            department: "Sales",
        },
        {
            id: 5,
            name: "Yoshiko",
            experience: 16,
            department: "Services",
        },
        {
            id: 6,
            name: "Beatrix",
            experience: 17,
            department: "Human Resources",
        },
        {
            id: 7,
            name: "Jacob",
            experience: 4,
            department: "Engineering",
        },
        {
            id: 8,
            name: "Koren",
            experience: 4,
            department: "Accounting",
        },
        {
            id: 9,
            name: "Marissa",
            experience: 20,
            department: "Support",
        },
        {
            id: 10,
            name: "Rufe",
            experience: 18,
            department: "Training",
        },
    ]

    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [department, setDepartment] = useState()
    const [experience, setExperience] = useState()

    const emploiyeelist = filteredEmployees.map(
        ({name, experience, department, id}) => (
        <tr key={id}><td>{name}</td><td>{experience}</td><td>{department}</td></tr>
    ))

        // Using Set to filter unique values
  const departments = Array.from(
    new Set(employees.map(employee => employee.department))
  )

    useEffect(() => {
   
        setFilteredEmployees(
            employees.filter(employee => {
                return ((!department || department === employee.department)&&
                (!experience ||
                  (experience === "LESS_THAN_10"
                    ? employee.experience < 10
                    : employee.experience >= 10)));
            })
        )
    
}, [department, experience])



  const clearFilters = () => {
    setDepartment()
    setExperience()
  }

    return (
        <div className="App">
            <h2>Search filtering</h2>
            <input
                type="text"
                name="search"
                value={department}
                onChange={e => setDepartment(e.target.value)}
            />

        <select onChange={e=>setDepartment(e.target.value)}>
        <option value="" disabled default selected>
                Select department
                </option>
                {departments.map(department=>(
                    <option key={department}>{department}</option>
                ))}
        </select>

        <button
          className={`${experience === "LESS_THAN_10" ? "selected" : ""}`}
          onClick={() => setExperience("LESS_THAN_10")}
        >
          Less than 10 years
        </button>
        <button
          className={`${experience === "10_PLUS" ? "selected" : ""}`}
          onClick={() => setExperience("10_PLUS")}
        >
          10+ years
        </button>

            <table>
                <tr><td>Name</td><td>Experience</td><td>Departement</td></tr>
                {emploiyeelist}
            </table>


            <button onClick={clearFilters}>Clear All filters</button>

        </div>
    )
}

export default ArraywithObject;
