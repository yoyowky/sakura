import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config(); // add .env file
// creste app from express
const app = express();

// Parse the body of HTTP request, will transit the boody of request req.body on your app
// When talking about midware: express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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