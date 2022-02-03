import React, {useState} from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';

const InputField = () => {

  

  const initialForm = {
    firstName: '',
    lastName: '',
    sex: '', 
    stateDate: '',
    salary: '',
    city: '', 
    state: '',
  }
  const [message, setMessage] = useState(initialForm);

  const handleMessage = (e) => {
    e.preventDefault();
    const tempMessage = {...message};
    tempMessage[e.target.name] = e.target.value
    setMessage(tempMessage);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage(initialForm);

    axios.post("http://localhost:8080/employees", {
      message: message})
      .then(() => { 
        console.log("success")
      }).catch(error => {
        console.log(error)
      })
    
  }


  return ( 
  <div>
      <Form>
          <Row className="mb-3">
            <Col>
              <Form.Control name="firstName" placeholder="First Name" onChange ={handleMessage}   />
            </Col>
      
            <Col>
              <Form.Control name="lastName" placeholder="Last Name" onChange ={handleMessage}   />
            </Col>
            <Col>
              <Form.Control name="sex" placeholder="Sex" onChange ={handleMessage}   />
            </Col>
            <Col>
              <Form.Control name="startDate" placeholder="Start Date" onChange ={handleMessage}   />
            </Col>
            <Col >
              <Form.Control name="salary" placeholder="Salary" onChange ={handleMessage}   />
            </Col>
            <Col xs={2}>
              <Form.Control name="city" placeholder="City" onChange ={handleMessage}   />
            </Col>
            <Col>
              <Form.Control name="state" placeholder="State" onChange ={handleMessage}   />
            </Col>
            <Col>
              <Button type="submit" className="mb-2" onClick = {handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
      </Form>

  </div>);
};

export default InputField
;
