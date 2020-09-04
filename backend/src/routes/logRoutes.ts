import {Router} from 'express';
import logController from '../controllers/logController'

import { TokenValidation } from '../libs/verifyToken'

class LogRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/', TokenValidation, logController.list);
        this.router.get('/:id', logController.getLogById)
        this.router.post('/', logController.create);   //insertamos logs
        this.router.delete('/:id',logController.delete);
        this.router.put('/:id',logController.update);
    }
}

const logRouters = new LogRoutes();
export default logRouters.router;