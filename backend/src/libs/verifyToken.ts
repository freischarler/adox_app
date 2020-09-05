import { Request, Response, NextFunction } from 'express' 
import jwt from 'jsonwebtoken'



export const TokenValidation = (req:Request, res: Response, next: NextFunction) => {
    
    let token;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {

        token=req.headers.authorization.split(' ')[1];
    }
    //const token = req.header('Authorization'); //este funciona

    console.log(token);

    if(!token) return res.status(401).json('Access denied');
    const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'tokentest');
    console.log(payload);
    next();
}
