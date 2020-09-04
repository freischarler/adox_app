"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../database"));
exports.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = ({
        name: req.body.username,
        password: req.body.password
    });
    //le damos al usuario un token
    const token = jsonwebtoken_1.default.sign({ _id: user.name }, process.env.TOKEN_SECRET || 'tokentest');
    res.json(token);
});
exports.signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.body);
    const user = ({
        name: req.body.name,
        password: req.body.password
    });
    console.log(user);
    if (user.name && user.password) {
        //const query('select `password` from `usuario` where user = ?', [user.name]);
        database_1.default.query('select * from `usuario` where user = ?', [user.name], function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            var PWD = JSON.parse(JSON.stringify(results));
            if (PWD == '') {
                console.log('no hay dato');
                console.log("datos invalidos");
                res.status(400).json('datos invalidos');
            }
            else {
                if (PWD[0].password == [user.password]) {
                    const token = jsonwebtoken_1.default.sign({ _id: user.name }, process.env.TOKEN_SECRET || 'tokentest', {
                        //algorithm: 'RS256',
                        expiresIn: 60 * 15,
                        subject: user.name
                    });
                    console.log("user logueado");
                    res.status(200).send({ token, rol: PWD[0].rol });
                }
                else {
                    console.log("datos invalidos");
                    res.status(401).json('datos invalidos');
                }
            }
        });
    }
});
exports.profile = (req, res) => {
    res.send('profile');
};
