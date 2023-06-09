const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "App",
    port: "3308:3306"
})

app.post("/users", (req, res) =>{
    const { nome } = req.body
    let SQL = "INSERT INTO Users ( nome ) VALUES (?)";

    db.query(SQL, nome, (err, result) => {
        console.log(err);
    })
})

app.get("/users", (req,res) =>{

    let SQL = "SELECT * from Users"

    db.query(SQL, (err, result) =>{
        if(err) console.log (err);
        else res.send(result);
    })
})

app.delete("/users/:id", (req, res) =>{

    const { id } = req.params;
    console.log ("Informação: ", id)

    let SQL = "DELETE FROM Users WHERE (`id`= ? )";
    
    db.query(SQL, id, (err, result) => {
        console.log(err);
    })
})

app.listen(3001, ()=> {
    console.log("rodando")
})