"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const valuesController_1 = __importDefault(require("../controllers/valuesController"));
class valuesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', valuesController_1.default.list);
        this.router.get('/:id', valuesController_1.default.getValue);
        this.router.post('/', valuesController_1.default.create); //insertamos lugares
        this.router.delete('/:id', valuesController_1.default.delete);
        this.router.put('/:id', valuesController_1.default.update);
    }
}
const valuesRouters = new valuesRoutes();
exports.default = valuesRouters.router;
