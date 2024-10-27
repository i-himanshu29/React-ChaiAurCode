// const express  = require('express'); // if you use common js - the data is come synchronusly

import express from "express" 
// data is come asynchronus
//add "type":"module" in the package.json file

const app  = express();

app.get('/',(req,res)=>{
    res.send('server is ready');

});
// get a  list of 5 jokes
// app.get('/jokes',(req,res)=>{
//     const jokes = [
//         {
//             id:1,
//             title:'A joke',
//             content:'this is a joke'
//         },
//         {
//             id:2,
//             title:'A joke',
//             content:'this is a joke'
//         },
//         {
//             id:3,
//             title:'A joke',
//             content:'this is a joke'
//         },
//         {
//             id:4,
//             title:'A joke',
//             content:'this is a joke'
//         },
//         {
//             id:5,
//             title:'A joke',
//             content:'this is a joke'
//         },
//     ];
//     res.send(jokes);
// });

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:3,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:4,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:5,
            title:'A joke',
            content:'this is a joke'
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});