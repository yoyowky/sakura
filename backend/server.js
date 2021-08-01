import express from 'express';
import data from './data.js';

// creste app from express
const app = express();
// define route
app.get('/',(req, res)=> {
    // response
    res.send("Server is ready");
});

app.get('/api/products',(req, res)=>{
    res.send(data.products)
})

const port = process.env.PORT || 5000;
// call listen method of app
app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
})