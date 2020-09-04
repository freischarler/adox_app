import express,{ Application } from "express";
import indexRoutes from './routes/indexRoutes';
import logRoutes from './routes/logRoutes';
import authRoutes from './routes/authRoutes';
import trackingRoutes from './routes/trackingRoutes';
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors';
import reportsRoutes from "./routes/reportsRoutes";

dotenv.config();

//var path = require('path');

const user = [
    { name: 'admin', password: 'admin'}
]
class Server {
    
    public app: Application;

    //middlewares
    
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void{
        //settings
        this.app.set('port',process.env.PORT || 3000);

        //middlewares
        this.app.use(morgan('dev'));    //para ver los GET POST en el npm
        this.app.use(cors());
        this.app.use(express.json()); //el servidor entiende el formato json
        this.app.use(express.urlencoded({extended: false})); //para validar formularios en html
        this.app.use(express.static(__dirname + '/dist/client'));

    }

    routes():void{
        //this.app.use('/', indexRoutes);
        this.app.use('/api/logs',logRoutes);
        this.app.use('/api/tracking', trackingRoutes);
        this.app.use('/api/auth/',authRoutes);
        this.app.use('/api/reports', reportsRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}

const server = new Server();
server.start();