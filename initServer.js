const db2con=require('./dbCon');
const express=require("express");
const Promise=require("bluebird");
const fs=require("fs");
const fileread=Promise.promisify(fs.readFile);
const filename=__dirname+"/def_emp.json";
let data={};
const app=new express();

app.get('/',(req,res)=>{
    fileread(filename).then((chunk)=>{
        data=JSON.parse(chunk);
        res.send(data);
    })
})

app.get('/:name',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    let dbresult=db2con.connect(req.params.name);
    res.send(JSON.stringify(dbresult));
})

app.listen(3000);