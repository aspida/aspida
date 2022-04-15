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
var createDocComment_1 = __importDefault(require("./createDocComment"));
var genReqBody = function (_a, importName, index) {
    var _b, _c, _d;
    var name = _a.name, props = _a.props;
    return ((_b = props.polymorph) === null || _b === void 0 ? void 0 : _b[index].reqBody)
        ? (function (opt) {
            return " body".concat(opt ? '?' : '', ": ").concat(importName, "['").concat(name, "']['polymorph'][").concat(index, "]['reqBody']").concat(opt ? ' | undefined' : '', ",");
        })((_d = (_c = props.polymorph) === null || _c === void 0 ? void 0 : _c[index].reqBody) === null || _d === void 0 ? void 0 : _d.hasQuestion)
        : props.reqBody
            ? (function (opt) {
                return " body".concat(opt ? '?' : '', ": ").concat(importName, "['").concat(name, "']['reqBody']").concat(opt ? ' | undefined' : '', ",");
            })(props.reqBody.hasQuestion)
            : '';
};
var genQuery = function (_a, importName, index) {
    var _b, _c, _d;
    var name = _a.name, props = _a.props;
    return ((_b = props.polymorph) === null || _b === void 0 ? void 0 : _b[index].query)
        ? (function (opt) {
            return " query".concat(opt ? '?' : '', ": ").concat(importName, "['").concat(name, "']['polymorph'][").concat(index, "]['query']").concat(opt ? ' | undefined' : '', ",");
        })((_d = (_c = props.polymorph) === null || _c === void 0 ? void 0 : _c[index].query) === null || _d === void 0 ? void 0 : _d.hasQuestion)
        : props.query
            ? (function (opt) {
                return " query".concat(opt ? '?' : '', ": ").concat(importName, "['").concat(name, "']['query']").concat(opt ? ' | undefined' : '', ",");
            })(props.query.hasQuestion)
            : '';
};
var genReqHeaders = function (_a, importName, index) {
    var _b, _c, _d;
    var name = _a.name, props = _a.props;
    return ((_b = props.polymorph) === null || _b === void 0 ? void 0 : _b[index].reqHeaders)
        ? (function (opt) {
            return " headers".concat(opt ? '?' : '', ": ").concat(importName, "['").concat(name, "']['polymorph'][").concat(index, "]['reqHeaders']").concat(opt ? ' | undefined' : '', ",");
        })((_d = (_c = props.polymorph) === null || _c === void 0 ? void 0 : _c[index].reqHeaders) === null || _d === void 0 ? void 0 : _d.hasQuestion)
        : props.reqHeaders
            ? (function (opt) {
                return " headers".concat(opt ? '?' : '', ": ").concat(importName, "['").concat(name, "']['reqHeaders']").concat(opt ? ' | undefined' : '', ",");
            })(props.reqHeaders.hasQuestion)
            : '';
};
var genOption = function (method, importName, index) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (index === void 0) { index = 0; }
    var poly = (_a = method.props.polymorph) === null || _a === void 0 ? void 0 : _a[index];
    var isOptionRequired = ((_b = method.props.query) === null || _b === void 0 ? void 0 : _b.hasQuestion) === false ||
        ((_c = method.props.reqBody) === null || _c === void 0 ? void 0 : _c.hasQuestion) === false ||
        ((_d = method.props.reqHeaders) === null || _d === void 0 ? void 0 : _d.hasQuestion) === false ||
        (poly &&
            (((_e = poly.query) === null || _e === void 0 ? void 0 : _e.hasQuestion) === false ||
                ((_f = poly.reqBody) === null || _f === void 0 ? void 0 : _f.hasQuestion) === false ||
                ((_g = poly.reqHeaders) === null || _g === void 0 ? void 0 : _g.hasQuestion) === false));
    return (function (opt) {
        return "(option".concat(opt ? '?' : '', ": {").concat(genReqBody(method, importName, index)).concat(genQuery(method, importName, index)).concat(genReqHeaders(method, importName, index), " config?: T | undefined }").concat(opt ? ' | undefined' : '', ")");
    })(!isOptionRequired);
};
var genResBody = function (_a, importName) {
    var name = _a.name, props = _a.props;
    return props.resBody ? "".concat(importName, "['").concat(name, "']['resBody']") : 'void';
};
var genPolyResBody = function (_a, importName, index) {
    var _b;
    var name = _a.name, props = _a.props;
    return ((_b = props.polymorph) === null || _b === void 0 ? void 0 : _b[index].resBody)
        ? "".concat(importName, "['").concat(name, "']['polymorph'][").concat(index, "]['resBody']")
        : genResBody({ name: name, props: props }, importName);
};
var genResHeaders = function (_a, importName) {
    var name = _a.name, props = _a.props;
    return props.resHeaders ? "".concat(importName, "['").concat(name, "']['resHeaders']") : 'BasicHeaders';
};
var genPolyResHeaders = function (_a, importName, index) {
    var _b;
    var name = _a.name, props = _a.props;
    return ((_b = props.polymorph) === null || _b === void 0 ? void 0 : _b[index].resHeaders)
        ? "".concat(importName, "['").concat(name, "']['polymorph'][").concat(index, "]['resHeaders']")
        : genResHeaders({ name: name, props: props }, importName);
};
var genStatus = function (_a, importName) {
    var name = _a.name, props = _a.props;
    return props.status ? ", ".concat(importName, "['").concat(name, "']['status']") : '';
};
var genPolyStatus = function (_a, importName, index) {
    var _b;
    var name = _a.name, props = _a.props;
    return ((_b = props.polymorph) === null || _b === void 0 ? void 0 : _b[index].status)
        ? ", ".concat(importName, "['").concat(name, "']['polymorph'][").concat(index, "]['status']")
        : genStatus({ name: name, props: props }, importName);
};
var genRequest = function (props) {
    return ", option".concat(!props.reqBody
        ? ''
        : props.reqFormat
            ? ", '".concat(props.reqFormat.value, "'")
            : props.reqBody && /^(ArrayBuffer|Blob|string)$/.test(props.reqBody.value)
                ? ", '".concat(props.reqBody.value, "'")
                : '');
};
var genResMethodName = function (props) {
    return !props.resBody
        ? 'send'
        : { ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' }[props.resBody.value] || 'json';
};
var genReturnVal = function (method, importName, path) {
    return "fetch<".concat(genResBody(method, importName), ", ").concat(genResHeaders(method, importName)).concat(genStatus(method, importName), ">(prefix, ").concat(path, ", ").concat(method.name.toUpperCase()).concat(genRequest(method.props), ").").concat(genResMethodName(method.props), "()");
};
var genPolyType = function (method, importName, index) {
    return "Promise<AspidaResponse<".concat(genPolyResBody(method, importName, index), ", ").concat(genPolyResHeaders(method, importName, index)).concat(genPolyStatus(method, importName, index), ">>");
};
var genPolymorphReturnVal = function (method, indent, path) {
    var _a, _b;
    return "".concat(method.name, "Request(option: any) {\n").concat(indent, "      return fetch(prefix, ").concat(path, ", ").concat(method.name.toUpperCase()).concat(genRequest(__assign(__assign({}, method.props), (_a = method.props.polymorph) === null || _a === void 0 ? void 0 : _a.find(function (p) { return p.reqBody; }))), ").").concat(genResMethodName(__assign(__assign({}, method.props), (_b = method.props.polymorph) === null || _b === void 0 ? void 0 : _b.find(function (p) { return p.reqBody; }))), "()");
};
exports.default = (function (methods, indent, importName, path, outputMode) {
    return __spreadArray(__spreadArray([], __read(methods.map(function (method) {
        var _a;
        var name = method.name, props = method.props, doc = method.doc;
        if ((_a = props.polymorph) === null || _a === void 0 ? void 0 : _a.length) {
            var polys = props.polymorph.map(function (_, i) { return [
                "".concat(indent, "    function ").concat(name, "Request").concat(genOption(method, importName, i), ": ").concat(genPolyType(method, importName, i)),
                "".concat(indent, "    function $").concat(name, "Request").concat(genOption(method, importName, i), ": Promise<").concat(genPolyResBody(method, importName, i), ">")
            ]; });
            return "".concat(indent, "  ").concat(name, ": (() => {\n").concat(polys
                .map(function (_a) {
                var _b = __read(_a, 1), a = _b[0];
                return a;
            })
                .join('\n'), "\n").concat(indent, "    function ").concat(genPolymorphReturnVal(method, indent, path), "\n").concat(indent, "    }\n").concat(indent, "    return ").concat(name, "Request\n").concat(indent, "  })(),\n").concat(indent, "  $").concat(name, ": (() => {\n").concat(polys
                .map(function (_a) {
                var _b = __read(_a, 2), b = _b[1];
                return b;
            })
                .join('\n'), "\n").concat(indent, "    function $").concat(genPolymorphReturnVal(method, indent, path), ".then(r => r.body)\n").concat(indent, "    }\n").concat(indent, "    return $").concat(name, "Request\n").concat(indent, "  })()");
        }
        var tmpChanks = [
            "".concat(genOption(method, importName), " =>"),
            genReturnVal(method, importName, path)
        ];
        var methodChanks = [];
        if (outputMode !== 'aliasOnly') {
            methodChanks.push("".concat((0, createDocComment_1.default)("".concat(indent, "  "), doc, props)).concat(indent, "  ").concat(name, ": ").concat(tmpChanks[0], "\n").concat(indent, "    ").concat(tmpChanks[1]));
        }
        if (outputMode !== 'normalOnly') {
            methodChanks.push("".concat((0, createDocComment_1.default)("".concat(indent, "  "), doc, props)).concat(indent, "  $").concat(name, ": ").concat(tmpChanks[0], "\n").concat(indent, "    ").concat(tmpChanks[1], ".then(r => r.body)"));
        }
        return methodChanks.join(',\n');
    })), false), [
        (methods.filter(function (_a) {
            var props = _a.props;
            return props.query;
        }).length
            ? "".concat(indent, "  $path: (option?: ").concat(methods
                .filter(function (_a) {
                var props = _a.props;
                return props.query;
            })
                .map(function (_a) {
                var name = _a.name;
                return (function (opt) {
                    return "{ method".concat(opt ? '?' : '', ": '").concat(name, "'").concat(opt ? ' | undefined' : '', "; query: ").concat(importName, "['").concat(name, "']['query'] }");
                })(name === 'get');
            })
                .join(' | '), " | undefined) =>\n").concat(indent, "    `${prefix}${").concat(path.startsWith('`') ? path.slice(3, -2) : path, "}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`")
            : "".concat(indent, "  $path: () => `${prefix}${").concat(path.startsWith('`') ? path.slice(3, -2) : path, "}`"))
            // eslint-disable-next-line no-template-curly-in-string
            .replace("${''}", '')
    ], false).join(',\n')
        .replace(/, BasicHeaders>/g, '>')
        .replace(/fetch<void>/g, 'fetch')
        .replace(/AspidaResponse<void>/g, 'AspidaResponse');
});
//# sourceMappingURL=createMethodsString.js.map