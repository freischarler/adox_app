"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
var path = require('path');
class IndexController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '/dist/client/index.html'));
    }
}
exports.indexController = new IndexController();
