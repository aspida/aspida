"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var minimist_1 = __importDefault(require("minimist"));
var commands_1 = require("./commands");
var run = function (args) {
    var argv = (0, minimist_1.default)(args, {
        string: ['version', 'config', 'watch'],
        alias: { v: 'version', c: 'config', w: 'watch' }
    });
    // eslint-disable-next-line no-unused-expressions
    argv.version !== undefined
        ? console.log("v".concat((0, commands_1.version)()))
        : argv.watch !== undefined
            ? (0, commands_1.watch)(argv.config)
            : (0, commands_1.build)(argv.config);
};
exports.run = run;
//# sourceMappingURL=cli.js.map