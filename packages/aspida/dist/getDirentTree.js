"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirentTree = void 0;
var fs_1 = __importDefault(require("fs"));
var parseInterface_1 = require("./parseInterface");
var getDirentTree = function (input) {
    var tree = { path: input, children: [] };
    fs_1.default.readdirSync(input, { withFileTypes: true })
        .filter(function (dirent) { return !dirent.name.startsWith('$') && !dirent.name.startsWith('@'); })
        .sort(function (a, b) { return (a.name < b.name ? -1 : 1); })
        .forEach(function (dirent) {
        if (dirent.isDirectory()) {
            tree.children.push({
                name: dirent.name,
                isDir: true,
                tree: (0, exports.getDirentTree)("".concat(input, "/").concat(dirent.name))
            });
        }
        else if (dirent.name.endsWith('.ts')) {
            var value = (0, parseInterface_1.parse)(fs_1.default.readFileSync("".concat(input, "/").concat(dirent.name), 'utf8'), 'Methods');
            if (!(value === null || value === void 0 ? void 0 : value.methods.some(function (_a) {
                var props = _a.props;
                return Object.keys(props).length;
            })))
                return;
            tree.children.push(__assign({ name: dirent.name, isDir: false }, value));
        }
    });
    return tree;
};
exports.getDirentTree = getDirentTree;
//# sourceMappingURL=getDirentTree.js.map