const express=require('express');
const app=express();

app.get("/" ,(req,resp)=>{
    resp.json([
        {
            id:1,
            name:"Umesh Rao",
            age:20
        },
        {
            id:2,
            name:"Pranav Saluja",
            age:21
        },
        {
            id:3,
            name:"gagan saini",
            age:22
        },
    ])
});

app.listen(5000,()=>{
    console.log("App is running on 5000 port");
})