import { Request, Response } from 'express';

import pool from '../database';

class LogController {
    public async list (req: Request,res: Response){
        pool.query('select * from log_datos', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }

    public async getLogById (req: Request,res: Response){
        
        const { id } = req.params;
        //console.log ('ID RECIBIDO');
        pool.query('select * from log_datos where viaje_id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }

    public async create (req: Request,res: Response){     //await es para que la query sera asincrona
        
        var jsondata = [req.body];
        
        var values = [];

        for(var i=0; i< jsondata.length; i++){
            values.push([jsondata[i].places_id,
                jsondata[i].nombre,
                jsondata[i].ubicacion,
                jsondata[i].descripcion]);
        }

        pool.query('INSERT INTO place (place_id,nombre,ubicacion,descripcion) VALUES ?', [values], function(err,result) {
            if (err) throw err;
            res.json(result);
        });

        //pool.query('INSERT INTO sensor ?', [req.body]); 
        //res.json(req.body);

    }   

    public async update (req: Request,res: Response){
        const { id } = req.params;
        pool.query('update place where id_places = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }
    public async delete (req: Request,res: Response){
        const { id } = req.params;
        pool.query('delete from place where place_id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }
}

const logController=new LogController();
export default logController;

//export const placesController = new PlacesController();
