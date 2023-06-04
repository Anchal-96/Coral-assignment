import React from 'react'
import { useState } from 'react';

const Data = [
{
    id: 1,
    image: "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "john Doe",
    tittle: "Software Developer",
    age: "35"
},
{
    id: 2,
    image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "john Doe",
    tittle: "Backend Developer",
    age: "25"
},
{
    id: 3,
    image: "https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "john Doe",
    tittle: "Frontend Developer",
    age: "30"
},
{
    id: 4,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "john Doe",
    tittle: "Software Developer",
    age: "32"
},
{
    id: 5,
    image: "https://images.pexels.com/photos/769690/pexels-photo-769690.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "john Doe",
    tittle: "Spring Developer",
    age: "32"
},
{
    id: 6,
    image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "john Doe",
    tittle: "Frontend Developer",
    age: "32"
},
{
    id: 7,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "john Doe",
    tittle: "Software Developer",
    age: "32"
},
{
    id: 8,
    image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "john Doe",
    tittle: "Backend Developer",
    age: "32"
},
];


const CardListView = ({data})=> {
    return(
        <div className='card-section'>
      {data.map((item)=>
        <div className='card-details'>
            <div className='card' key={item.id}>
                <div className='image'>
                    <img className='image-circular'
                    src= {item.image}
                    alt=''
                    width={100}
                    height={100}
                    />
                </div>
                <h2 className='heading'>
                    {item.name}
                </h2>
                <h3 className='sub-heading'>
                    {item.tittle}
                </h3>
                <h4 className='description'>
                    {item.age} Years
                </h4>
            </div>
        </div>
        )}
      </div>
    )
}

 const TableView = ({data})=> {
    return(
        <table className='table-view'>
        <thead>
            <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Title</th>
            <th>Age</th>
            </tr>
        </thead>
        <tbody>
          {data.map((item) =>
        <tr key={item.id}>
          <th>
            <img
            src={item.image}
            alt=""
            width={100}
            height={100}
            />
            </th>
          <th>{item.name}</th>
          <th>{item.tittle}</th>
          <th>{item.age}</th>

        </tr>
          )}

        </tbody>
        </table>
    )
 }

const About = () => {
    const [viewType, setViewType] = useState('table');

    const handleToggle = () => {

        setViewType((preType) => (preType === 'card' ? 'table' : 'card'));
    }
  return (
    <>
    <div className=''>
        <button onClick={handleToggle} className='toggle View'>Toggle View</button>
    </div>
      {viewType === 'card' ? <TableView data={Data}/> : <CardListView data={Data} />}
    </>
  )
}

export default About
