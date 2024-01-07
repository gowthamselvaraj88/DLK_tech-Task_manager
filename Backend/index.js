const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"task_manager" ,
    port:"3306"
})

db.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("connected")
})
 
//Login API (User and admin can be able to login with their id)

app.post('/login', (req, res) =>{
    const { user_name, user_password } = req.body;

    const q = 'SELECT * FROM task_manager.customers WHERE user_name = ? AND user_password = ?';

    db.query(q, [user_name, user_password], (err, user) => {

      if(err){
        res.json("error")
      } else {
        res.json(user)
      }

    })
})

app.post('/task_creating', (req, res) => {
       
    const {task_name, description} = req.body;
    console.log("called")
    const q = 'INSERT INTO task_manager.task_details (task_name, description) VALUES (?,?) ';
    
    db.query(q, [task_name, description],(err,result) => {
        if(err){
            res.json(err)
        } else {
            res.json("created")
        }
    })
    console.log("finished")
})


app.get('/tasks', (req,res) => {

    const detailsquery = 'SELECT task_name,description,created_by from task_manager.task_details WHERE is_started = "false"';

    db.query(detailsquery , (err, tasks) => {
        if(err) {
            res.json(err)
           
        }else {
            res.json(tasks)
        }
    })
})


app.put('/start/:id', (req,res) => {
    const id = req.params.id
    console.log(id)
    const detailsquery = 'UPDATE task_details SET is_started = "true", started_by = "employee" WHERE id = ? ';

    db.query(detailsquery , [id] ,(err, tasks) => {
        if(err) {
            res.json(err)
            
        }else {
            res.json("Started")
        }
    })
})


app.put('/submit/:id', (req,res) => {
    const id = req.params.id;
  const detailsquery = 'UPDATE task_details SET is_submitted = "true" WHERE id = ? ';

  db.query(detailsquery , [id] ,(err, tasks) => {
      if(err) {
          res.json(err)
          
      }else {
          res.json("Submitted")
      }
  })
})

app.listen(8080,()=>{
    console.log("Listening");
})