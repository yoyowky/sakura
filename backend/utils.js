import jwt from 'jsonwebtoken';

export const generateToken = (user)=>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
    }, 
    process.env.JWT_SECRET || 'somethingsecrete',
    {
        expiresIn: '30d',
    }
    )
}

export const isAuth = (req, res, next) => {
    console.log('req', req)
    const authorization = req.headers.authorization;
    console.log('authorization',authorization)
    if(authorization){
        const token = authorization.slice(7, authorization.length); // Bearer XXXXXX => XXXXXX
        console.log('token', token)
        jwt.verify(
        token,
        process.env.JWT_SECRET || 'somethingsecrete',
        (err, decode)=>{ // decode contains the user data
            console.log('decode', decode)
            if(err){
                res.status(401).send({message: 'Invalid Token'})
            } else {
                req.user = decode; // pass to req of next function
                next();
            }
        })
    }else{
        res.status(401).send({ message: 'No Token' });
    }
    
}