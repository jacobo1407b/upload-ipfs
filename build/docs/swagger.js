"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var data = require('./swagger.json');
//import {swaggerDocs} from 'docs';
var app = (0, express_1.default)();
app.use("/", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(data));
exports.default = app;
//# sourceMappingURL=swagger.js.map