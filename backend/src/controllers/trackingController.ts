import { Request, Response } from 'express';

import pool from '../database';

class TrackingController {
    public async list (req: Request,res: Response){
        pool.query('select * from truck', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }

    //select * from log_datos where log_datos.log_datos_id in (select max(log_datos_id) 
    //from log_datos
    //left join truck
    //on log_datos.viaje_id=truck.viaje_id
    //where truck.viaje_id=1)

    public async getValue (req: Request,res: Response){
        const { id } = req.params;
        pool.query('select * from sensor where sensor_id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }

    public async create (req: Request,res: Response){     //await es para que la query sera asincrona
        
        var jsondata = [req.body];
        
        var values = [];

        for(var i=0; i< jsondata.length; i++){
            values.push([jsondata[i].sensor_id,
                jsondata[i].temperatura,
                jsondata[i].humedad,
                jsondata[i].luz]);
        }

        pool.query('INSERT INTO sensor (sensor_id,temperatura,humedad,luz) VALUES ?', [values], function(err,result) {
            if (err) throw err;
            res.json(result);
        });

        //pool.query('INSERT INTO sensor ?', [req.body]); 
        //res.json(req.body);

    }   

    public async update (req: Request,res: Response){
        const { id } = req.params;
        pool.query('update sensor where id_sensor = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }
    public async delete (req: Request,res: Response){
        const { id } = req.params;
        pool.query('delete from sensor where id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    }
}

const trackingController=new TrackingController();
export default trackingController;

