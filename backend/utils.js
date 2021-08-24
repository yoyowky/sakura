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