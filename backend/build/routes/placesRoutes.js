"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const placesController_1 = __importDefault(require("../controllers/placesController"));
class placesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', placesController_1.default.list);
        this.router.get('/:id', placesController_1.default.getValue);
        this.router.post('/', placesController_1.default.create); //insertamos lugares
        this.router.delete('/:id', placesController_1.default.delete);
        this.router.put('/:id', placesController_1.default.update);
    }
}
const valuesRouters = new placesRoutes();
exports.default = valuesRouters.router;
