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
const database_1 = __importDefault(require("../database"));
class PlacesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('select * from place', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
                console.log(result);
            });
        });
    }
    getValue(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('select * from place where places_id = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
                console.log(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var jsondata = [req.body];
            var values = [];
            for (var i = 0; i < jsondata.length; i++) {
                values.push([jsondata[i].places_id,
                    jsondata[i].nombre,
                    jsondata[i].ubicacion,
                    jsondata[i].descripcion]);
            }
            database_1.default.query('INSERT INTO place (place_id,nombre,ubicacion,descripcion) VALUES ?', [values], function (err, result) {
                if (err)
                    throw err;
                res.json(result);
            });
            //pool.query('INSERT INTO sensor ?', [req.body]); 
            //res.json(req.body);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('update place where id_places = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
                console.log(result);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('delete from place where place_id = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
                console.log(result);
            });
        });
    }
}
const valuesController = new PlacesController();
exports.default = valuesController;
//export const placesController = new PlacesController();
