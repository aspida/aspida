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
exports.optionToRequest = exports.dataToURLString = exports.headersToObject = void 0;
var form_data_1 = __importDefault(require("form-data"));
var humps_1 = require("humps");
var headersToObject = function (headers) {
    return __spreadArray([], __read(headers.entries()), false).reduce(function (prev, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], val = _c[1];
        return (__assign(__assign({}, prev), (_b = {}, _b[key] = val, _b)));
    }, {});
};
exports.headersToObject = headersToObject;
var appendDataToFormData = function (data, formData) {
    var toFormData = function (key, value) {
        if (value === undefined || value === null)
            return;
        var isObject = function (value) {
            return typeof value === "object" && !Array.isArray(value) && !(value instanceof File);
        };
        if (isObject(value)) {
            Object.entries(value).forEach(function (_a) {
                var _b = __read(_a, 2), subKey = _b[0], value = _b[1];
                toFormData("".concat(key, "[").concat(subKey, "]"), value);
            });
        }
        else {
            if (Array.isArray(value)) {
                value.forEach(function (el) {
                    if (isObject(el)) {
                        Object.entries(el).forEach(function (_a) {
                            var _b = __read(_a, 2), subKey = _b[0], value = _b[1];
                            toFormData("".concat(key, "[][").concat(subKey, "]"), value);
                        });
                    }
                    else {
                        formData.append("".concat(key, "[]"), el);
                    }
                });
            }
            else {
                formData.append(key, value);
            }
        }
    };
    Object.entries(data).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        toFormData(key, value);
    });
    return formData;
};
var encode = function (str) {
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function (match) {
        return ({
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
        }[match]);
    });
};
var dataToURLString = function (data) {
    return Object.keys(data)
        .filter(function (key) { return data[key] != null; })
        .map(function (key) {
        return Array.isArray(data[key])
            ? data[key].map(function (v) { return "".concat(encode(key), "=").concat(encode(v)); }).join('&')
            : "".concat(encode(key), "=").concat(encode(data[key]));
    })
        .join('&');
};
exports.dataToURLString = dataToURLString;
var hasFormData = typeof FormData !== 'undefined';
var optionToRequest = function (option, type) {
    if ((option === null || option === void 0 ? void 0 : option.body) === undefined)
        return option;
    console.log(option);
    var httpBody;
    var headers = {};
    var decamelizeBody = (0, humps_1.decamelizeKeys)(option.body);
    switch (type) {
        case 'FormData':
            if (hasFormData) {
                httpBody = appendDataToFormData(decamelizeBody, new FormData());
            }
            else {
                var formData = new form_data_1.default();
                httpBody = appendDataToFormData(decamelizeBody, formData);
                headers = formData.getHeaders();
            }
            break;
        case 'URLSearchParams':
            httpBody = (0, exports.dataToURLString)(decamelizeBody);
            headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            break;
        case 'ArrayBuffer':
        case 'string':
        case 'Blob':
        case 'any':
            httpBody = decamelizeBody;
            break;
        default:
            httpBody = JSON.stringify(decamelizeBody);
            headers['Content-Type'] = 'application/json;charset=utf-8';
            break;
    }
    return __assign(__assign({ httpBody: httpBody }, option), { headers: __assign(__assign({}, headers), option.headers) });
};
exports.optionToRequest = optionToRequest;
//# sourceMappingURL=index.js.map