import React, {useState, useEffect} from 'react';
import TableRows from './TableRows';
import TableHeader from './TableHeader';
import { Table } from 'react-bootstrap';
import axios from 'axios';


export interface dataType {
  ID: number,
  firstName: string | null,
  lastName: string | null,
  sex: string | null,
  startDate: string | null,
  salary: number | null,
  city: string | null,
  state: string | null,
}

const TableContainer = () => {
  const [tableRow, tableRowSet] = useState<dataType[]>();
  const [loading, loadingSet] = useState<boolean>(true); 

  useEffect(() => {
    var handle = setInterval(updateTable, 5000)
    setInterval(updateTable, 5000)
    console.log('updating')
    return (
      clearInterval(handle)
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
          {tableRow && tableRow.map((data: dataType, index: number): JSX.Element => {
            const ID = data.ID;
            const firstName = data.firstName;
            const lastName = data.lastName;
            const startDate = data.startDate;
            const sex = data.sex; 
            const salary = data.salary; 
            const state = data.state;
            const city = data.city; 
            
            return(
              <TableRows 
              key = {index}
              ID = {ID} 
              firstName = {firstName}
              lastName = {lastName}
              startDate = {startDate}
              sex = {sex}    
              salary = {salary} 
              state = {state} 
              city = {city}          
              />
            )
          })}

      </tbody>
    </Table>
  )
};

export default TableContainer;
