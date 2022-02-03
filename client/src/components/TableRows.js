import axios from 'axios';
import React from 'react';
import {CloseButton} from 'react-bootstrap';

const TableRows = ({ID, firstName, lastName, startDate, sex, salary, state, city}) => {
  const handleDelete = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:8080/employees/delemployees", {
    message: ID})
    .then(() => { 
      console.log("success")

    }).catch(error => {
      console.log(error)
    })
  }
  
  return (
    <tr>
          <td>{ID}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{sex}</td>
          <td>{startDate}</td>
          <td>{salary}</td>
          <td>{state}</td>
          <td>{city}</td>
          <td><CloseButton variant="white" onClick = {handleDelete}/></td>
    </tr>
    );
};

export default TableRows;
