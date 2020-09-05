import {Router} from 'express';
import reportsController from '../controllers/reportsController'

import { TokenValidation } from '../libs/verifyToken'

class ReportsRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/', TokenValidation, logController.list);
        this.router.get('/:id', TokenValidation, reportsController.getLogById)
        this.router.get('/', TokenValidation, reportsController.list);   //insertamos logs
        //this.router.delete('/:id',reportsController.delete);
        //this.router.put('/:id',reportsController.update);
    }
}

const reportsRouters = new ReportsRoutes();
export default reportsRouters.router;