"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const verifyToken_1 = require("../libs/verifyToken");
//const secret= { secret : process.env.SECRET || 'secret' , algorithms: ['HS256']};
//expressJwt({ secret:  process.env.JWT_SECRET, algorithms: ['RS256'] });
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/',AuthController.index);
        //this.router.post('/signup',signup);
        this.router.post('/signin', authController_1.signin);
        this.router.get('/profile', verifyToken_1.TokenValidation, authController_1.profile);
    }
}
const AuthRouters = new AuthRoutes();
exports.default = AuthRouters.router;
