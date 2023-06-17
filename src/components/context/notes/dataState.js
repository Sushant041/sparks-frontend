import DataContext from "./dataContect";
import { useState } from "react";
const DataState = (props)=>{
    const dataInitial =[]
    const [data, setData] = useState(dataInitial)


    const getData = async () =>{

        //API CALL
        const response = await fetch("https://sparksbackend.onrender.com/api/viewCustomers", {
            method: 'GET',
            headers: {
                'Content_Type': 'application/json',
                
            },
           
        });
            const json = await response.json();
            setData(json)
            
            
    }
  

    //temp function
    const [Id, setId] = useState("");
    const [IdBalance, setIdBalance] = useState(0);
    const storeId = (id, balance)=>{
        setId(id);
        setIdBalance(balance);
        console.log(IdBalance);
    }

    //Add Balance
    let bal2 = 0;
    const addBalance = async (id, Id, number)=>{


        const balance = parseFloat(number);
     

        // updating balance of receiver
         let Id1_balance = 0 ;
         let Id2_balance = 0;
 
        for(let i=0; i<data.length; i++){
            const element = data[i];
            if(element._id === Id ){
                bal2 = parseFloat(element.currentBalance) ;
                bal2 -= balance;
               Id2_balance = bal2;
               
            }
 
         }
         
        for(let i=0; i<data.length; i++){
           const element = data[i];
          if(element._id === id){

              let bal1 = parseFloat(element.currentBalance) ;
                bal1 += balance;

               Id1_balance = bal1;
           }
        }
        
         // updating balance of receiver

       // API CALL
        const response =  await fetch(`https://sparksbackend.onrender.com/api/ubdateBalance`, {
            method: 'POST',
            headers: {
                'Content_Type': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                 "Id1" : id,
                 "Id1_balance" : Id1_balance,               
                 "Id2" : Id,
                 "Id2_balance" : Id2_balance,
                })
        })
        
    }
    //Transfer Money
    const transferMoney = async (id, Id, balance) =>{

        //API CALL
        const response = await fetch(`https://sparksbackend.onrender.com/api/transferMoney`, {
            method: 'POST',
            headers: {
                'Content_Type': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "transferTo" : id, 
                    "transferFrom" : Id,
                   "amount" : balance})
        });
            
    }
 

     return (
        <DataContext.Provider value={{data, Id, IdBalance, bal2, addBalance, getData, storeId, transferMoney}}>
            {props.children}
        </DataContext.Provider>
     )
}


export default DataState;
