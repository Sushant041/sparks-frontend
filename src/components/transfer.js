import React, {useContext} from 'react'
import DataContext from './context/notes/dataContect'
import AddBalance from './addBalance';
import { Link} from "react-router-dom";


export default function Transfer(props) {
  const context = useContext(DataContext);
  const {data, Id} = context;
   
console.log(Id);
  return (
    <>
       { Id === 0 ? 
            (<form>
              <h5>First Select Transfer Money Button on View All Customer Page</h5>
               <Link to="/" className="btn btn-info">Go To View</Link>
              </form>)

             :
            <div className="my-3">    
                    
               <h2>Transfer Money To</h2>
                {data.map((data)=>{
                   return <AddBalance key={data._id} data={data}/>;
                })}
            </div>
       }
    </> 
  )
}
