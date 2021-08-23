import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

// creste app from express
const app = express();

mongoose.connect(process.env.MONGODY_URL || 'mongodb://localhost/easy-shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/api/products/:id',(req, res)=>{
    const product = data.products.find((product) => product._id === req.params.id) // 要写在一行
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message:'product not found'})
    }
})
app.get('/api/products',(req, res)=>{
    res.send(data.products)
})

// use user router
app.use('/api/users', userRouter);

// define route
app.get('/',(req, res)=> {
    // response
    res.send("Server is ready");
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

const port = process.env.PORT || 5000;
// call listen method of app
app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
})