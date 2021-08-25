import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res)=>{
    const user = await User.findOne({email: req.body.email});
    if(user){
      if(bcrypt.compareSync(req.body.password, user.password)){
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        })
      }
    }
    res.status(401).send({message: 'Invalid Email or Password'})
  })
)

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => { // show error instead of keep loading
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;