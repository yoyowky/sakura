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

app.get('/api/products/:id',(req, res)=>{
    const product = data.products.find((product) => product._id === req.params.id) // 要写在一行
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message:'product not found'})
    }
})

const port = process.env.PORT || 5000;
// call listen method of app
app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
})