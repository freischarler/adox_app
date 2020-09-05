import {Router} from 'express';
import trackingController from '../controllers/trackingController'
import { TokenValidation } from '../libs/verifyToken'

class trackingRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', TokenValidation, trackingController.list);
        this.router.get('/:id', TokenValidation,trackingController.getValue)
        this.router.post('/', trackingController.create);   //insertamos lugares
        this.router.delete('/:id',trackingController.delete);
        this.router.put('/:id',trackingController.update);
    }
}

const trackingRouters = new trackingRoutes();
export default trackingRouters.router;