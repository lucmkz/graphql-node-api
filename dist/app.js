"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.middware();
    }
    middware() {
        this.express.use('/hello', (req, res, next) => {
            res.send({
                hello: 'hello world'
            });
        });
    }
}
exports.default = new App().express;
