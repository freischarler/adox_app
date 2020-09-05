"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trackingController_1 = __importDefault(require("../controllers/trackingController"));
const verifyToken_1 = require("../libs/verifyToken");
class trackingRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', verifyToken_1.TokenValidation, trackingController_1.default.list);
        this.router.get('/:id', verifyToken_1.TokenValidation, trackingController_1.default.getValue);
        this.router.post('/', trackingController_1.default.create); //insertamos lugares
        this.router.delete('/:id', trackingController_1.default.delete);
        this.router.put('/:id', trackingController_1.default.update);
    }
}
const trackingRouters = new trackingRoutes();
exports.default = trackingRouters.router;
