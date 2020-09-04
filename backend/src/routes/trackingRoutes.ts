import {Router} from 'express';
import trackingController from '../controllers/trackingController'

class trackingRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',trackingController.list);
        this.router.get('/:id',trackingController.getValue)
        this.router.post('/', trackingController.create);   //insertamos lugares
        this.router.delete('/:id',trackingController.delete);
        this.router.put('/:id',trackingController.update);
    }
}

const trackingRouters = new trackingRoutes();
export default trackingRouters.router;