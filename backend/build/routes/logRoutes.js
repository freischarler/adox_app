"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logController_1 = __importDefault(require("../controllers/logController"));
const verifyToken_1 = require("../libs/verifyToken");
class LogRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/', TokenValidation, logController.list);
        this.router.get('/:id', verifyToken_1.TokenValidation, logController_1.default.getLogById);
        //this.router.post('/', logController.create);   //insertamos logs
        //this.router.delete('/:id',logController.delete);
        //this.router.put('/:id',logController.update);
    }
}
const logRouters = new LogRoutes();
exports.default = logRouters.router;
