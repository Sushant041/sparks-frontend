import React, {useContext, useEffect} from 'react'
import DataContext from './context/notes/dataContect'
import Customer from './customer';

function Customers() {

 const context = useContext(DataContext);
  const {data, getData} = context;

    useEffect(() =>{
       getData();
    }, [])
  return (
    <div className="my-3">
        <h2>List of Customers</h2>
        {data.map((data)=>{
            return <Customer key={data._id} data={data}/>;
        })}
   </div>
  )
}

export default Customers