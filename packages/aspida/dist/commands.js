"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watch = exports.build = exports.version = exports.getConfigs = void 0;
var getConfigs_1 = require("./getConfigs");
Object.defineProperty(exports, "getConfigs", { enumerable: true, get: function () { return getConfigs_1.getConfigs; } });
var buildTemplate_1 = __importDefault(require("./buildTemplate"));
var writeRouteFile_1 = __importDefault(require("./writeRouteFile"));
var watchInputDir_1 = __importDefault(require("./watchInputDir"));
var version = function () { return require('../package.json').version; };
exports.version = version;
var build = function (config) {
    return (0, getConfigs_1.getConfigs)(config)
        .reduce(function (prev, c) { return __spreadArray(__spreadArray([], __read(prev), false), __read((0, buildTemplate_1.default)(c)), false); }, [])
        .forEach(writeRouteFile_1.default);
};
exports.build = build;
var watch = function (config) {
    return (0, getConfigs_1.getConfigs)(config).map(function (c) {
        (0, buildTemplate_1.default)(c).forEach(writeRouteFile_1.default);
        return (0, watchInputDir_1.default)(c.input, function () { return (0, buildTemplate_1.default)(c).forEach(writeRouteFile_1.default); });
    });
};
exports.watch = watch;
//# sourceMappingURL=commands.js.map