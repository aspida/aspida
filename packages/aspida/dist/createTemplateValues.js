"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createMethodsString_1 = __importDefault(require("./createMethodsString"));
var createDocComment_1 = __importDefault(require("./createDocComment"));
var valNameRegExpStr = '^_[a-zA-Z][a-zA-Z0-9_]*';
var valNameRegExp = new RegExp(valNameRegExpStr);
var valTypeRegExpStr = '(@number|@string)';
var valTypeRegExp = new RegExp(valTypeRegExpStr);
var toJSValidString = function (text) {
    return text.replace(/[^a-zA-Z0-9$_]/g, '_').replace(/^(\d)/, '$$$1');
};
exports.default = (function (direntTree, basePath, trailingSlash, outputMode) {
    var imports = [];
    var pathes = [];
    var getMethodsString = function (filepath, methods, indent, newPrefix, newUrl) {
        var importName = "Methods".concat(imports.length);
        imports.push("import type { Methods as ".concat(importName, " } from '").concat(filepath.replace(/'/g, "\\'"), "'"));
        var newPath = "'".concat(decodeURIComponent(newUrl)).concat(trailingSlash ? '/' : '', "'");
        if (newPath.length > 2) {
            if (!pathes.includes(newPath))
                pathes.push(newPath);
            newPath = "PATH".concat(pathes.indexOf(newPath));
        }
        return (0, createMethodsString_1.default)(methods, indent, importName, newPrefix && newPath.length > 2 ? "`${".concat(newPrefix, "}${").concat(newPath, "}`") : newPrefix || newPath, outputMode);
    };
    var createApiString = function (tree, importBasePath, indent, dirDeps, prefix, url, text, methodsOfIndexTsFile) {
        var props = tree.children
            .map(function (dirent) {
            var _a;
            var filename = dirent.name;
            var basename = dirent.isDir ? filename : filename.replace(/\.ts$/, '');
            var hasVal = filename.startsWith('_');
            var valFn = "".concat(indent).concat(toJSValidString(decodeURIComponent(basename)), ": {\n<% next %>\n").concat(indent, "}");
            var newPrefix = prefix;
            var newUrl = "".concat(url, "/").concat(basename);
            if (hasVal) {
                var valPathRegExp = new RegExp("".concat(valNameRegExpStr).concat(valTypeRegExpStr, "?((\\.|%[0-9a-fA-F]{2})[a-zA-Z0-9]+)?$"));
                if (!valPathRegExp.test(basename)) {
                    throw new Error("aspida \u001B[43m\u001B[31mERROR\u001B[0m '".concat(basename, "' does not match '").concat(valPathRegExp.toString(), "'."));
                }
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                var valName_1 = basename.match(valNameRegExp)[0];
                var valType = basename.replace(valName_1, '').startsWith('@')
                    ? basename.split('@')[1].slice(0, 6)
                    : null;
                var postfix = decodeURIComponent(basename.replace(valName_1, '').replace(valType ? "@".concat(valType) : '', ''));
                var prevUrl = "'".concat(decodeURIComponent(url)).concat(trailingSlash ? '/' : '', "'");
                if (url.length && !pathes.includes(prevUrl))
                    pathes.push(prevUrl);
                var duplicatedNames = tree.children.filter(function (d) { return d.name.startsWith(valName_1); });
                var prefixVal = "`".concat(prefix ? "${".concat(prefix, "}") : '').concat(url.length ? "${PATH".concat(pathes.indexOf(prevUrl), "}") : '').concat(url.length && trailingSlash ? '' : '/', "${val").concat(dirDeps, "}").concat(postfix, "`");
                newPrefix = "prefix".concat(dirDeps);
                newUrl = '';
                valFn = "".concat(indent).concat(toJSValidString(valName_1)).concat(duplicatedNames.length > 1 && valType ? "_".concat(valType) : '').concat(toJSValidString(postfix), ": (val").concat(dirDeps, ": ").concat(valType !== null && valType !== void 0 ? valType : 'number | string', ") => {\n").concat(indent, "  const ").concat(newPrefix, " = ").concat(prefixVal, "\n\n").concat(indent, "  return {\n<% next %>\n").concat(indent, "  }\n").concat(indent, "}");
            }
            var fallbackSpecialCharsProp = function (text) {
                return /%[0-9a-fA-F]{2}/.test(basename)
                    ? "".concat(text, ",\n").concat(text.replace(/^( +?)[^ ]+?:/, "$1/**\n$1 * @deprecated `".concat(toJSValidString(basename.replace(valTypeRegExp, '')), "` has been deprecated.\n$1 * Use `").concat(toJSValidString(decodeURIComponent(basename.replace(valTypeRegExp, ''))), "` instead\n$1 */\n$1").concat(toJSValidString(basename.replace(valTypeRegExp, '')), ":")))
                    : text;
            };
            if (dirent.isDir) {
                var methodsOfIndexTsFile_1 = (_a = tree.children.find(function (c) { return c.name === "".concat(filename, ".ts"); })) !== null && _a !== void 0 ? _a : dirent.tree.children.find(function (c) { return c.name === 'index.ts'; });
                return fallbackSpecialCharsProp(createApiString(dirent.tree, "".concat(importBasePath, "/").concat(filename), "".concat(indent).concat(hasVal ? '  ' : '', "  "), dirDeps + 1, newPrefix, newUrl, "".concat((0, createDocComment_1.default)(indent, methodsOfIndexTsFile_1 === null || methodsOfIndexTsFile_1 === void 0 ? void 0 : methodsOfIndexTsFile_1.doc)).concat(valFn.replace('<% next %>', '<% props %>')), (methodsOfIndexTsFile_1 === null || methodsOfIndexTsFile_1 === void 0 ? void 0 : methodsOfIndexTsFile_1.isDir) === false
                    ? getMethodsString("".concat(importBasePath, "/").concat(filename), methodsOfIndexTsFile_1.methods, "".concat(indent).concat(hasVal ? '  ' : ''), newPrefix, newUrl)
                    : undefined));
            }
            else if (filename !== 'index.ts' && tree.children.every(function (d) { return d.name !== basename; })) {
                return fallbackSpecialCharsProp("".concat((0, createDocComment_1.default)(indent, dirent.doc)).concat(valFn.replace('<% next %>', getMethodsString("".concat(importBasePath, "/").concat(basename), dirent.methods, "".concat(indent).concat(hasVal ? '  ' : ''), newPrefix, newUrl))));
            }
            return null;
        })
            .filter(function (p) { return !!p; });
        return text.replace('<% props %>', "".concat(props.join(',\n')).concat(methodsOfIndexTsFile ? "".concat(props.length ? ',\n' : '').concat(methodsOfIndexTsFile) : ''));
    };
    var emptyMethodsRegExp = /.+{\n\n? +},?\n/;
    var rootIndexData = direntTree.children.find(function (c) { return c.name === 'index.ts'; });
    /* eslint-disable no-template-curly-in-string */
    var api = createApiString(direntTree, '.', '    ', 0, '', basePath, "{\n<% props %>\n  }", rootIndexData && !rootIndexData.isDir
        ? getMethodsString('.', rootIndexData.methods, '  ', '', basePath)
        : undefined);
    while (emptyMethodsRegExp.test(api)) {
        api = api.replace(emptyMethodsRegExp, '');
    }
    return { api: api, imports: imports, pathes: pathes };
});
//# sourceMappingURL=createTemplateValues.js.map