import { Request, Response } from 'express';
import { UserI } from '../models/user';
import jwt from 'jsonwebtoken';

import pool from '../database';

export const signup = async (req: Request, res: Response) => {

    const user: UserI = ({
        name: req.body.username,
        password: req.body.password 
    })

    //le damos al usuario un token
    const token:string = jwt.sign({_id:user.name},process.env.TOKEN_SECRET || 'tokentest');
    res.json(token);
    
};

export const signin = async (req: Request, res: Response) => {
    //console.log(req.body);
    const user: UserI = ({
        name: req.body.name,
        password: req.body.password
    })

    console.log(user);
    if( user.name && user.password){
    //const query('select `password` from `usuario` where user = ?', [user.name]);

        pool.query('select * from `usuario` where user = ?',
                [user.name],function(err, results:Response, fields) {
            if (err){
                console.log(err); 
            }
            var PWD = JSON.parse(JSON.stringify(results));
            
            if(PWD==''){
                console.log('no hay dato');
                console.log("datos invalidos");   
                res.status(400).json('datos invalidos');
            }
            else
            {
                if(PWD[0].password==[user.password]){
                    const token:string = jwt.sign({_id:user.name},
                            process.env.TOKEN_SECRET || 'tokentest', {
                            //algorithm: 'RS256',
                            expiresIn: 60 * 15,
                            subject: user.name
                            
                    });
                
                    console.log("user logueado");
                    res.status(200).send({token, rol: PWD[0].rol});    
                }
                else
                {
                    console.log("datos invalidos");   
                    res.status(401).json('datos invalidos');
                }    
            }
        });
    }
};


export const profile = (req: Request, res: Response) => {
    res.send('profile');
};