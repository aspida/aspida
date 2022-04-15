"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chokidar_1 = __importDefault(require("chokidar"));
exports.default = (function (input, callback) {
    return chokidar_1.default.watch(input, { ignoreInitial: true, ignored: /\/\$[^/]+\.ts$/ }).on('all', callback);
});
//# sourceMappingURL=watchInputDir.js.map