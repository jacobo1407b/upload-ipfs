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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var uuid_1 = require("uuid");
var Files_1 = __importDefault(require("Model/Files"));
var storage_1 = __importDefault(require("storage"));
var utils_1 = require("utils");
var router = express_1.default.Router();
router.get('/getfiles', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tfile, files, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                tfile = req.query.file;
                if (!tfile) return [3 /*break*/, 2];
                return [4 /*yield*/, Files_1.default.find({ typeFile: tfile }).sort([[req.query.sort, -1]])];
            case 1:
                files = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, Files_1.default.find().sort([[req.query.sort, -1]])];
            case 3:
                files = _a.sent();
                _a.label = 4;
            case 4:
                res.status(200).json({ error: false, data: files });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).json({ error: true, data: null, msg: error_1 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
router.get('/get/types', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var f;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Files_1.default.aggregate([
                    {
                        $group: {
                            _id: '$typeFile',
                            count: { $sum: 1 }
                        }
                    }
                ])];
            case 1:
                f = _a.sent();
                res.status(200).json({ error: false, data: f, msg: 'success' });
                return [2 /*return*/];
        }
    });
}); });
router.post('/loadfile', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var h, ext, icon, nombre, result, file, onSave, error_2;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 3, , 4]);
                h = (0, uuid_1.v4)();
                ext = path_1.default.extname((_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname).split('.')[1];
                icon = (0, utils_1.getIcon)(ext);
                nombre = "".concat(h, ".").concat(ext);
                return [4 /*yield*/, (0, storage_1.default)((_b = req.file) === null || _b === void 0 ? void 0 : _b.buffer, nombre)];
            case 1:
                result = _e.sent();
                file = new Files_1.default({
                    typeFile: ext,
                    cid: result.cid.toString(),
                    icon: icon,
                    description: '',
                    title: '',
                    uid: h,
                    typef: (_c = req.file) === null || _c === void 0 ? void 0 : _c.mimetype,
                    size: (_d = req.file) === null || _d === void 0 ? void 0 : _d.size
                });
                return [4 /*yield*/, file.save()];
            case 2:
                onSave = _e.sent();
                //console.log(await publish(result.cid.toString()))
                res.status(200).json({ error: false, data: onSave, msg: 'success' });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _e.sent();
                console.log(error_2);
                res.status(500).json({ error: true, data: null, msg: error_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put('/update/info/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, description, result, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, title = _a.title, description = _a.description;
                return [4 /*yield*/, Files_1.default.findByIdAndUpdate(id, {
                        description: description,
                        title: title
                    }, { new: true })];
            case 1:
                result = _b.sent();
                res.status(200).json({ error: false, data: result, msg: 'success' });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.log(error_3);
                res.status(500).json({ error: true, data: null, msg: error_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//# sourceMappingURL=index.js.map