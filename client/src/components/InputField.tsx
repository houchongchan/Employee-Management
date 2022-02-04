import React, {useState, useEffect} from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';

export interface inputType {
  firstName: string | null,
  lastName: string | null,
  sex: string | null,
  startDate: string | null,
  salary: number | null,
  city: string | null,
  state: string | null,
}



const InputField = () => {
  const [disable, disableSet] = useState <boolean>(false);
  const [helper, helperSet] = useState <string>('');

  
  const initialForm = {
    firstName: '',
    lastName: '',
    sex: '', 
    startDate: '0000-00-00',
    salary: 0,
    city: '', 
    state: '',
  }
  const [input, setInput] = useState<inputType>(initialForm);
  
  useEffect(()=>{
    let number = 0; 
    for (const [key, value] of Object.entries(input)) {
      if((key == "firstName") && value.length > 3){
        number = value.length 
      }
      else if((key == "lastName") && value.length > 3 && number > 3){
        disableSet(false)
        break;
      }
      
      else {
        disableSet(true)
      }
    }
  }, [input])

  useEffect(()=>{
    if(disable == true){
      helperSet('Please fill First Name and Last Name')
      return;
    }
    helperSet('')
  }, [disable])


  const handleMessage = (e: any ) => {
    e.preventDefault();
    const {name, value} = e.target;

    setInput(prev => ({
      ...prev, 
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
    

    
    axios.post("http://localhost:8080/employees", {
      message: input})
      .then(() => { 
        console.log("success")
      }).catch(error => {
        console.log(error)
      })
      
    setInput(initialForm);
  }



  return ( 
  <div className="text-center">
      <Form >
          <Row className ='d-flex align-items-center ' style = {{height: '150px'}}>
            <Col>
              <Form.Control name="firstName" placeholder="First Name" type = "string" onChange ={handleMessage}   />
            </Col>

            <Col>
              <Form.Control name="lastName" placeholder="Last Name" type = "string" onChange ={handleMessage}   />
            </Col>
            <Col>
              <Form.Control name="sex" placeholder="Sex" type = "string" onChange ={handleMessage}/>
            </Col>
            <Col>
              <Form.Control name="startDate" placeholder="Start Date: YYYY-MM-DD" type = "date" onChange ={handleMessage}   />
            </Col>
            <Col >
              <Form.Control name="salary" placeholder="Annual Salary" type = "number" onChange ={handleMessage}   />
            </Col>
            <Col xs={2}>
              <Form.Control name="city" placeholder="City" type = "string" onChange ={handleMessage}   />
            </Col>
            <Col>
              <Form.Control name="state" placeholder="State" type = "string" onChange ={handleMessage}   />
            </Col>
            <Col>
              <Button type="submit" className="mb-2 m-0 pr-0" onClick = {handleSubmit} disabled = {disable}>
                Submit
              </Button>
            </Col>
            
          </Row>
          {helper}
      </Form>
      <br/>
  </div>);
};

export default InputField
;
