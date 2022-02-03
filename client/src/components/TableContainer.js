import React, {useState, useEffect} from 'react';
import TableRows from './TableRows';
import TableHeader from './TableHeader';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const TableContainer = () => {
  const [tableRow, tableRowSet] = useState();
  const [loading, loadingSet] = useState(true); 

  useEffect(() => {
    setInterval(updateTable, 10000)
    return (
      clearInterval(updateTable)
    )
  }, [])

  useEffect(() =>{
    if(tableRow) {
      setTimeout(() => {loadingSet(false);}, 4000)
    }
  }, [tableRow])

  const updateTable = () => {
    loadingSet(true)
    axios.get("http://localhost:8080/employees")
    .then((response) => { 
      tableRowSet(response.data);
    }).catch(error => {
      console.log(error)
    })
    loadingSet(false)
  }

  if(loading){
    return(
      <div>
        <br/>
        Loading
      </div>
    )
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
          {tableRow && tableRow.map((data)=>{
            const ID = data.ID;
            const firstName = data.firstName;
            const lastName = data.lastName;
            const startDate = data.startDate;
            const sex = data.sex; 
            const salary = data.salary; 
            const state = data.state;
            const city = data.city; 
            const zip = data.zip; 
            
            return(
              <TableRows 
              ID = {ID} 
              firstName = {firstName}
              lastName = {lastName}
              startDate = {startDate}
              sex = {sex}    
              salary = {salary} 
              state = {state} 
              city = {city} 
              zip = {zip}          
              />
            )
          })}

      </tbody>
    </Table>
  )
};

export default TableContainer;
