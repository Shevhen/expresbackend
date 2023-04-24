const express = require("express")
const app = express();

const fs = require("fs")
const {json} = require("express");


const cors = require("cors")
const {newItem} = require("are-we-there-yet/lib/tracker-group");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

    app.get('/to',(req, res) =>{
        fs.readFile("to.txt",{encoding: "utf-8"},(err, data)=>{
            if(err){
                res.json(err)
            }
            if(data){
                res.json("["+data+"]")
            }
        })
    })



    app.post('/to',(req, res) =>{
    const body = req.body

    fs.appendFile("to.txt", `,{"Name":"${body.data.name}","Age":"${body.data.age}"}`,(err)=>{
        if(err){
            console.log(err)}
    })
})
app.listen(5100, () => {
    console.log("Server!");
});