import 'dotenv/config';
import express from 'express';
import mysql from 'mysql';
import cors from 'cors'; 
import bodyParser from 'body-parser';
import router from './routes/DBroutes.js';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

export const sql = mysql.createConnection({
    host: 'localhost',
    user: `${process.env.SQLUSER}`,
    password: `${process.env.SQLPW}` ,
    database: 'employees',
})

sql.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('sql connected');
});

app.use('/employees',router)


app.get('/getposts/:id', (req, res) =>{
    let q = `SELECT * from posts WHERE ${req.params.id}`;
    sql.query(q, (err, results) => {
        if(err) throw err; 
        console.log(results);
        res.send('Posts fetched');});
});



app.listen('8080', () =>{
    console.log('Server started on port 8080');
});