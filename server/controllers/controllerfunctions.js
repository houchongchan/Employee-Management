import {sql} from '../index.js';

export const createEmployees = ( req, res) => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const id = Number(new Date().valueOf().toString().slice(4,8));
    const firstName = req.body.message.firstName;
    const lastName = req.body.message.lastName;
    const startDate = req.body.message.startDate;
    const city = req.body.message.city;
    const state = req.body.message.state;
    const sex = capitalizeFirstLetter(req.body.message.sex);
    const salary = Number(req.body.message.salary);
    console.log(req.body.message);


    let q = `INSERT INTO employee (ID,firstName, lastName, startDate, sex, salary, city, state) VALUES (?,?,?,?,?,?,?,?)`;

        
    sql.query(q,[id, firstName, lastName, startDate, sex,salary, city, state], (err, result)=>{
        if(err) throw err; 
        res.send("employee inserted");
    });
}

export const getEmployees = ( req, res) => {
    
    let q = `SELECT * FROM employee`;
    sql.query(q, (err, result)=>{
        if(err) throw err; 
        res.send(result);
    });
}

export const delEmployees = ( req, res) => {
    const ID = req.body.message;

    let q = `DELETE FROM employee WHERE ID = ${ID}`;
    sql.query(q, (err, result)=>{
        if(err) throw err; 
        res.send(result);
    });
}

