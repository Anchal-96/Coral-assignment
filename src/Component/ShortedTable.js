import React from 'react'
import { useState } from 'react'

const data = [
    {
      name: "John Doe",
      age: 32,
      occupation: "Developer"
    },
    {
      name: "Jane Doe",
      age: 27,
      occupation: "Designer"
    },
    {
      name: "Bob Smith",
      age: 45,
      occupation: "Manager"
    }
  ]

const ShortedTable = () => {
    const[searchTerm, setSearchTerm] = useState('');
    const[sortProperty, setSortProperty] = useState('name');
    const[sortDirection, setSortDirection] = useState('asc');
    
    const handleSearch = (event) =>{
        setSearchTerm(event.target.value);
    }

    const handleSort = (property) =>{
        if (property === sortProperty ) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        }
        else{
          setSortProperty(property);
          setSortDirection('asc');
        }
    }
     
    const filteredData = data.filter(item =>
        item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())

        )

    const sortedData = [...filteredData].sort((a,b) => {
    if (a[sortProperty] < b[sortProperty]) {
        
        return sortDirection === 'asc' ? -1 : 1 ;
    }
    else if (a[sortProperty] > b[sortProperty]) {
        return sortDirection === 'asc' ? 1 : -1;
    }
    else{
        return 0;
    }
   })

   const isFileterd = searchTerm !== '' && filteredData.length < data.length;
  return (
    <>
    <div className='sorted-data'>
    <input className='search-box'
    type='text'
    placeholder='Search by name'
    value={searchTerm}
    onChange={handleSearch}
    />
    {isFileterd && <div className='result'>You are viewing Filtered results!</div>}
    <table>
   <thead>
    <tr>
      <th onClick={()=> handleSort('name')}>Name</th>
      <th onClick={()=> handleSort('age')}>Age</th>

    </tr>
   </thead>
    <tbody>
       {sortedData.map((item, index) =>
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.occupation}</td>
        </tr>
        )}
    </tbody>
    </table>
    </div>
    </>
  )
}

export default ShortedTable
