import React, { useState } from 'react';
import { data } from './Data';

const FilterArray = () => {

    const [dataMembers, setDataMembers] = useState(data);
    const [search, setSearche] = useState('');

    const DataItem = dataMembers.filter(item => {
        return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)
    })
    .map(({ id, first_name, last_name, email, Phone }) => {
        return (<tr key={id}><td>{first_name}</td><td>{last_name}</td><td>{email}</td><td>{Phone}</td></tr>)
    })
    

    return (
        <div>
            <input
                type='text'
                name='search'
                onChange={e => setSearche(e.target.value)} />

            <table>
                <thead>
                    <tr><td>Nom</td><td>Prenom</td><td>Email</td><td>Phone</td></tr>
                </thead>
                <tbody>
                    {DataItem}
                </tbody>
            </table>
        </div>
    );
}

export default FilterArray;
