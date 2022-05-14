"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
(0, mongoose_1.connect)(process.env.DATABASE).then(function () {
    console.log('Database is connect');
}).catch(function (err) {
    throw err;
});
//# sourceMappingURL=database.js.map