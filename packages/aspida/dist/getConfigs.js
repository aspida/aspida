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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigs = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var defaultConfig = {
    input: (_a = ['api', 'apis'].find(function (input) { return fs_1.default.existsSync(input); })) !== null && _a !== void 0 ? _a : 'api',
    baseURL: '',
    trailingSlash: false,
    outputEachDir: false,
    outputMode: 'all'
};
var getConfigs = function (config) {
    if (config === void 0) { config = 'aspida.config.js'; }
    var configs = typeof config !== 'string'
        ? config
        : fs_1.default.existsSync(config)
            ? require(path_1.default.join(process.cwd(), config))
            : defaultConfig;
    return Array.isArray(configs)
        ? configs.map(function (c) { return (__assign(__assign({}, defaultConfig), c)); })
        : [__assign(__assign({}, defaultConfig), configs)];
};
exports.getConfigs = getConfigs;
//# sourceMappingURL=getConfigs.js.map