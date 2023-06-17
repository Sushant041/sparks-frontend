import React, {useContext, useState} from 'react'
import DataContext from './context/notes/dataContect'
import { Link } from "react-router-dom";



function AddBalance(props) {

  const context = useContext(DataContext)
  const {addBalance, transferMoney, Id, IdBalance} = context;
  const {data} = props;

  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState("0");

   const onClick = ()=>{
    setShowForm(!showForm);
    setId(data._id);  
   }
   
   const handleClick = (e) =>{
    const balance = document.getElementById("balance").value;
    if(balance<0){
      alert("Enter Valid Balance");
      return 0;
    }
    if(balance === null){
      alert("Enter Valid Balance");
      return 0;
    }

    if(IdBalance - balance < 0){
      alert("Insufficient Balance");
      e.preventDefault();
      return 0;
    }
     transferMoney(id, Id, balance);
      addBalance(id, Id, balance); 
  
      setTimeout(() => {
        alert("Money Transfered Successfully");
      }, 500);
     
   }

 return (
   <>
    {showForm && (
      <form>
      <div className="mb-3">
        <label htmlFor="balance" className="form-label">
          <h5>
            Enter ammount to transfer to {data.name} having Id no. {data._id}
            </h5>
        </label>
        <input type="number" className="form-control" id="balance"/>
        </div>
        <Link to="/"  type="submit" className="btn btn-info" onClick={handleClick}>Transfer</Link>
    </form>
    )}
    
     { Id !== data._id ? (<div className="card my-3 " id="select">
         <img src="https://freepngimg.com/save/12800-customer-transparent/256x256" className="card-img-top" alt=""/>
          <div className="card-body">
               <h5 className="card-title">Customer ID : {data._id}</h5> 
               <h5 className="card-title">Customer Name : {data.name}</h5> 
               <h5 className="card-text">Balance : {data.currentBalance}</h5> 
              <button className="btn btn-danger" onClick={onClick}>Select</button> 
           </div>
        </div> ) : "" }       
      </>
  )
}

export default AddBalance