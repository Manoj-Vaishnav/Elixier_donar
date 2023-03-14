const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user:'root',
  host:"localhost",
  password:"123",
  database:"donorssystem",
});


app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const bloodGroup = req.body.bloodGroup;
  const  phoneNo= req.body.phoneNo;
  const state = req.body.state;
  const districts = req.body.districts;
  db.query(
    "INSERT INTO donors (name,age,bloodGroup,phoneNo,state,districts) VALUES (?,?,?,?,?,?)",
    [name, age,bloodGroup,phoneNo,state,districts],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status("Values Inserted");
      }
    }
  )
});




app.get("/donors", (req, res) => {
  const bloodGroup = req.query.bloodGroup;
  const state = req.query.state;
  const districts = req.query.districts;
  // console.log(bloodGroup);
  // const districts = req.body.districts;
  db.query("SELECT * FROM donors where bloodgroup=? AND state=? AND districts=?",[bloodGroup,state,districts],(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.listen(3001,()=>{
    console.log("server running on port 3001");
}) 