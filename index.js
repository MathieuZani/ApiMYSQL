const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
const { CON } = require('./config');

app.use(express.json());

app.listen(
    PORT
);

var con = mysql.createConnection(CON);

con.connect(function(err){
    if(err) throw err;
    console.log('connected!');
});


app.get('/film', (req, res) => {
    con.query("SELECT * FROM FILM", function (err, result, fields) {
        if (err) throw err;
        res.status(200).send({  
            result
        })
      });
});

app.get('/film/:id', (req, res) => {
    var { id } = req.params;
    var sql = "SELECT * FROM FILM WHERE Code = ?"
    con.query(sql,id, function (err, result, fields) {
        if (err) throw err;
        res.status(200).send({  
            result
        })
      });
});


