"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var dotenv_1 = require("dotenv");
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("routes"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var data = require('./docs/swagger.json');
//import swagger from 'docs/swagger';
(0, dotenv_1.config)();
var app = (0, express_1.default)();
var port = parseInt(process.env.PORT) || 3000;
require('./database');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, multer_1.default)().single('image'));
app.use('/api', routes_1.default);
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(data));
app.use('/metadata', function (req, res) {
    res.json(data);
});
//app.use('/docs', swagger)
app.listen(port, function () {
    console.log('Server on port: ' + port);
});
//# sourceMappingURL=server.js.map