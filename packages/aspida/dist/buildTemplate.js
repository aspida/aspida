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
var path_1 = __importDefault(require("path"));
var createTemplateValues_1 = __importDefault(require("./createTemplateValues"));
var createDocComment_1 = __importDefault(require("./createDocComment"));
var getDirentTree_1 = require("./getDirentTree");
var humps_1 = require("humps");
var listNotIndexFiles = function (tree) { return __spreadArray(__spreadArray([], __read(tree.children
    .filter(function (c) { return !c.name.startsWith('_') && !c.isDir && c.name !== 'index.ts'; })
    .map(function (c) {
    return "".concat(tree.path, "/\u001B[31m").concat(c.name, "\u001B[0m -> \u001B[32m").concat(c.name.replace('.ts', ''), "/index.ts\u001B[0m");
})), false), __read(tree.children
    .map(function (c) { return (!c.name.startsWith('_') && c.isDir ? listNotIndexFiles(c.tree) : []); })
    .reduce(function (p, c) { return __spreadArray(__spreadArray([], __read(p), false), __read(c), false); }, [])), false); };
var createTemplate = function (tree, baseURL, trailingSlash, basePath, outputMode) {
    var _a;
    var _b = (0, createTemplateValues_1.default)(tree, basePath, trailingSlash, outputMode), api = _b.api, imports = _b.imports, pathes = _b.pathes;
    var headImports = [
        "import type { AspidaClient".concat(api.includes('AspidaResponse') ? ', AspidaResponse' : '').concat(api.includes('BasicHeaders') ? ', BasicHeaders' : '', " } from 'aspida'")
    ];
    if (api.includes('dataToURLString')) {
        headImports.push("import { dataToURLString } from 'aspida'");
    }
    var text = "<% headImports %>\n<% imports %>\n\n".concat((0, createDocComment_1.default)('', (_a = tree.children.find(function (c) { return !c.isDir && c.name === 'index.ts'; })) === null || _a === void 0 ? void 0 : _a.doc), "const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {\n  const prefix = (baseURL === undefined ? '<% baseURL %>' : baseURL).replace(/\\/$/, '')\n").concat(pathes.map(function (p, i) { return "  const PATH".concat(i, " = ").concat((0, humps_1.decamelize)(p)); }).join('\n'), "\n").concat(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH', 'OPTIONS']
        .filter(function (m) { return api.includes(", ".concat(m, ", option")); })
        .map(function (m) { return "  const ".concat(m, " = '").concat(m, "'"); })
        .join('\n'), "\n\n  return <% api %>\n}\n\nexport type ApiInstance = ReturnType<typeof api>\nexport default api\n")
        .replace('<% headImports %>', headImports.join('\n'))
        .replace('<% imports %>', imports.join('\n'))
        .replace('<% api %>', api)
        .replace('<% baseURL %>', baseURL);
    return { text: text, filePath: path_1.default.posix.join(tree.path, '$api.ts') };
};
exports.default = (function (_a) {
    var input = _a.input, baseURL = _a.baseURL, trailingSlash = _a.trailingSlash, outputEachDir = _a.outputEachDir, outputMode = _a.outputMode;
    var direntTree = (0, getDirentTree_1.getDirentTree)(input);
    var templates = [createTemplate(direntTree, baseURL, trailingSlash, '', outputMode)];
    if (outputEachDir) {
        var notIndexFiles = listNotIndexFiles(direntTree);
        if (notIndexFiles.length) {
            console.log("aspida \u001B[43m\u001B[31mERROR\u001B[0m Since true is specified in outputEachDir at aspida.config.js, you need to rename the following files\n  ".concat(notIndexFiles.join('\n  ')));
            return [];
        }
        var appendTemplate_1 = function (tree) {
            tree.children.forEach(function (c) {
                if (!c.isDir || c.name.startsWith('_'))
                    return;
                templates.push(createTemplate(c.tree, baseURL, trailingSlash, c.tree.path.replace(input, ''), outputMode));
                appendTemplate_1(c.tree);
            });
        };
        appendTemplate_1(direntTree);
    }
    return templates;
});
//# sourceMappingURL=buildTemplate.js.map