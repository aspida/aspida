"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
exports.default = (function (_a) {
    var filePath = _a.filePath, text = _a.text;
    if (fs_1.default.existsSync(filePath) && fs_1.default.readFileSync(filePath, 'utf8') === text)
        return;
    fs_1.default.writeFileSync(filePath, text, 'utf8');
    console.log("".concat(filePath, " was built successfully."));
});
//# sourceMappingURL=writeRouteFile.js.map