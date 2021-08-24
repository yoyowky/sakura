import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

// get products data
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
)


// seed 放在id后面
productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const products = await Product.insertMany(data.products);
    res.send({ products });
  })
);


// id 放在seed后面，防止seed被识别成某个id (/seed will be treated as id)
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);
    if(product){
      res.send({product});
    } else {
      res.status(404).send({message:'Product Not Found'})
    }
  })
)

export default productRouter;