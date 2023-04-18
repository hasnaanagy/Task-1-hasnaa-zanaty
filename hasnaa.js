import express from "express";
const app =express();
const students=[
    {
        name:'Hasnaa',
        id:1,
        city:'menofiya'
    },
    {
        name:'Sara',
        id:2 
        ,
        city:'tanta'
    },
    {
        name:'Afnan',
        id:3 ,
        city:'banha'
    }, {
        name:'Raghad',
        id:4,
        city:'shobra'
    },
    {
        name:'Roqaya',
        id:5,
        city:'alex'
    }
]
const studentFunction = (request,response)=>{
    let output="<ul>";

    for(let i=0;i<students.length;i++){
        output+="<li><a href ='/students/"+students[i].id+"'>"+students[i].name+"</a></li>";
    }
    output+="</ul>";
    response.send(output);

}
app.get('/students',studentFunction)
app.get('/students/:id',(req,res)=>{

let id=req.params.id;
let studentdata=students.find((item)=>{
    return item.id == id;
})
res.send("<h1>"+studentdata.city+"</h1>")
})
app.listen(5000);