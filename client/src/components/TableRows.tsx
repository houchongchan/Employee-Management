import axios from 'axios';
import React from 'react';
import {CloseButton} from 'react-bootstrap';

export interface LayoutProps  { 
  ID: number, 
  firstName: string | null, 
  lastName: string | null, 
  startDate: string | null, 
  sex: string | null, 
  salary: number | null, 
  state: string | null, 
  city: string | null
}

const TableRows = (props:LayoutProps) => {
  const handleDelete = (e:any) => {
    e.preventDefault(); 
    axios.post("http://localhost:8080/employees/delemployees", {
    message: props.ID})
    .then(() => { 
      console.log("success")

    }).catch(error => {
      console.log(error)
    })
  }
  
  return (
    <tr>
          <td>{props.ID}</td>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.sex}</td>
          <td>{props.startDate}</td>
          <td>{props.salary}</td>
          <td>{props.state}</td>
          <td>{props.city}</td>
          <td><CloseButton variant="white" onClick = {handleDelete}/></td>
    </tr>
    );
};

export default TableRows;
