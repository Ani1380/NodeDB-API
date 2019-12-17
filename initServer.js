const db2con=require('./dbCon');
const express=require("express");
const Promise=require("bluebird");
let data={};
const app=new express();

app.get('/',(req,res)=>{
   console.log("no parameters provided!!!");
})

app.get('/:name',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    let dbresult=db2con.connect(req.params.name);
})

app.listen(3000);