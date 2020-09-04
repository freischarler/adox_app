"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
//const pool = mysql.createPool(keys.database_origin);
const pool = mysql_1.default.createPool(keys_1.default.database_origin);
pool.getConnection((err, conection) => {
    if (err)
        throw err;
    conection.release();
    console.log('DB is connected');
});
exports.default = pool;
