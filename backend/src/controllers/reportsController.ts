import { Request, Response } from 'express';

import pool from '../database';

class ReportsController {
    public async list (req: Request,res: Response){
        pool.query('select * from log_viaje', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }

    /*public async getLogById (req: Request,res: Response){
        
        const { id } = req.params;
        //console.log ('ID RECIBIDO');

        pool.query('select * from log_datos where viaje_id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }*/
}

const reportsController=new ReportsController();
export default reportsController;

//export const placesController = new PlacesController();
