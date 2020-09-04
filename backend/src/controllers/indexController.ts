import { Request, Response } from 'express';

var path = require('path');

class IndexController {
    public index (req: Request,res: Response){
        res.sendFile(path.join(__dirname, '/dist/client/index.html'));
    }
}


export const indexController = new IndexController();
