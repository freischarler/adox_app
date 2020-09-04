"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logRoutes_1 = __importDefault(require("./routes/logRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const trackingRoutes_1 = __importDefault(require("./routes/trackingRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const reportsRoutes_1 = __importDefault(require("./routes/reportsRoutes"));
dotenv_1.default.config();
//var path = require('path');
const user = [
    { name: 'admin', password: 'admin' }
];
class Server {
    //middlewares
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        //settings
        this.app.set('port', process.env.PORT || 3000);
        //middlewares
        this.app.use(morgan_1.default('dev')); //para ver los GET POST en el npm
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //el servidor entiende el formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //para validar formularios en html
        this.app.use(express_1.default.static(__dirname + '/dist/client'));
    }
    routes() {
        //this.app.use('/', indexRoutes);
        this.app.use('/api/logs', logRoutes_1.default);
        this.app.use('/api/tracking', trackingRoutes_1.default);
        this.app.use('/api/auth/', authRoutes_1.default);
        this.app.use('/api/reports', reportsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}
const server = new Server();
server.start();
