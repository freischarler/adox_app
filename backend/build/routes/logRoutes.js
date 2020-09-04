"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logController_1 = __importDefault(require("../controllers/logController"));
class LogRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/', TokenValidation, logController.list);
        this.router.get('/:id', logController_1.default.getLogById);
        this.router.post('/', logController_1.default.create); //insertamos logs
        this.router.delete('/:id', logController_1.default.delete);
        this.router.put('/:id', logController_1.default.update);
    }
}
const logRouters = new LogRoutes();
exports.default = logRouters.router;
