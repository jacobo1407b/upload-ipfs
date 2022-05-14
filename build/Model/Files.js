"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var fileSchema = new mongoose_1.Schema({
    typeFile: {
        type: String,
        required: true
    },
    cid: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    uid: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    typef: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
});
exports.default = (0, mongoose_1.model)('Files', fileSchema);
//# sourceMappingURL=Files.js.map