"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var propList = [
    { type: 'query', label: '@param option.query -' },
    { type: 'reqHeaders', label: '@param option.headers -' },
    { type: 'reqBody', label: '@param option.body -' },
    { type: 'resBody', label: '@returns' }
];
exports.default = (function (indent, doc, props) {
    if (doc === void 0) { doc = []; }
    return doc.length || propList.some(function (p) { var _a; return (_a = props === null || props === void 0 ? void 0 : props[p.type]) === null || _a === void 0 ? void 0 : _a.doc; })
        ? "".concat(indent, "/**").concat(doc.length
            ? "\n".concat(indent, " * ").concat(doc.join("\n".concat(indent, " * ")).replace(/ \n/g, '\n'))
            : '').concat(propList.some(function (p) { var _a; return (_a = props === null || props === void 0 ? void 0 : props[p.type]) === null || _a === void 0 ? void 0 : _a.doc; }) ? '\n' : '').concat(propList
            .filter(function (p) { var _a; return (_a = props === null || props === void 0 ? void 0 : props[p.type]) === null || _a === void 0 ? void 0 : _a.doc; })
            .map(function (p) { var _a, _b; return "".concat(indent, " * ").concat(p.label, " ").concat((_b = (_a = props === null || props === void 0 ? void 0 : props[p.type]) === null || _a === void 0 ? void 0 : _a.doc) === null || _b === void 0 ? void 0 : _b.join("\n".concat(indent, " * "))); })
            .join('\n'), "\n").concat(indent, " */\n")
        : '';
});
//# sourceMappingURL=createDocComment.js.map