"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const truckController_1 = __importDefault(require("../controllers/truckController"));
class TruckRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', truckController_1.default.list);
        this.router.get('/:id', truckController_1.default.getValue);
        this.router.post('/', truckController_1.default.create); //insertamos lugares
        this.router.delete('/:id', truckController_1.default.delete);
        this.router.put('/:id', truckController_1.default.update);
    }
}
const truckRouters = new TruckRoutes();
exports.default = truckRouters.router;
