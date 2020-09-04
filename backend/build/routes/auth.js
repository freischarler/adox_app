"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/',AuthController.index);
    }
}
const AuthRouters = new AuthRoutes();
exports.default = AuthRouters.router;
