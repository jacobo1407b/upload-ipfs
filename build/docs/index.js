"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var data = require('./swagger.json');
exports.swaggerDocs = (0, swagger_jsdoc_1.default)(data);
//# sourceMappingURL=index.js.map