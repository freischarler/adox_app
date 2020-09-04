"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportsController_1 = __importDefault(require("../controllers/reportsController"));
class ReportsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/', TokenValidation, logController.list);
        //this.router.get('/:id', reportsController.getLogById)
        this.router.get('/', reportsController_1.default.list); //insertamos logs
        //this.router.delete('/:id',reportsController.delete);
        //this.router.put('/:id',reportsController.update);
    }
}
const reportsRouters = new ReportsRoutes();
exports.default = reportsRouters.router;