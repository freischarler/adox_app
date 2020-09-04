import { Router } from 'express';
import { signup, signin, profile } from '../controllers/authController';

import { TokenValidation } from '../libs/verifyToken'

//const secret= { secret : process.env.SECRET || 'secret' , algorithms: ['HS256']};
//expressJwt({ secret:  process.env.JWT_SECRET, algorithms: ['RS256'] });

class AuthRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/',AuthController.index);
        //this.router.post('/signup',signup);
        this.router.post('/signin',signin);
        this.router.get('/profile', TokenValidation ,profile);
    }
}

const AuthRouters = new AuthRoutes();
export default AuthRouters.router;