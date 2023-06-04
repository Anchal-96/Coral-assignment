import React from 'react'
import ShortedTable from './ShortedTable'
const Data = [    
{"name":"John Doe","age":32,"occupation":"Developer"},
{"name":"Jane Doe","age":27,"occupation":"Designer"},
{"name":"Bob Smith","age":45,"occupation":"Manager"}
]

const Table = () => {
  return (
    <>
      <table className='table-content'>

      <thead className='table-head'>
        <tr>
        <th className='table-name'>Name</th>
        <th className='table-age'>Age</th>
        <th>Occupation</th>
        </tr>
      </thead>
      <tbody className='table-body'>
      {Data.map((item, index) =>
        <tr key={index}>         
         <td className='table-data'>{item.name}</td>
         <td className='table-data-1'>{item.age}</td>
         <td className='table-data-2'>{item.occupation}</td>

        </tr>
         )}
      </tbody>
      </table>
      <ShortedTable/>
    </>

  )
}

export default Table
