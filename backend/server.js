import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

// creste app from express
const app = express();

mongoose.connect(process.env.MONGODY_URL || 'mongodb://localhost/easy-shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// use sub router
app.use('/api/users', userRouter);
app.use('/api/products', productRouter)

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