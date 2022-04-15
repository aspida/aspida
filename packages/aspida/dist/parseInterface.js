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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
var quoteRegExp = /['"]/;
var openRegExp = /[(<{]/;
var closeRegExp = /[)>}]/;
var operatorRegExp = /[|&]/;
var parseString = function (text) {
    var textLength = text.length;
    var value = text[0];
    var cursor = 1;
    var isEscapingQuote = false;
    while (cursor < textLength) {
        var char = text[cursor];
        cursor += 1;
        if (isEscapingQuote) {
            value += char;
            isEscapingQuote = false;
        }
        else if (char === '\\' && text.startsWith(text[cursor])) {
            isEscapingQuote = true;
        }
        else if (text.startsWith(char)) {
            value += char;
            break;
        }
        else {
            value += char;
        }
    }
    return { value: value, length: cursor };
};
var parseName = function (text) {
    var value = '';
    var hasQuestion = false;
    var length = 0;
    if (quoteRegExp.test(text[0])) {
        var stringValue = parseString(text);
        value = stringValue.value.slice(1, -1);
        hasQuestion = text[stringValue.length] === '?';
        length = stringValue.length + +hasQuestion;
    }
    else {
        var name_1 = text.split(':')[0];
        value = name_1.replace('?', '');
        hasQuestion = /\?$/.test(name_1);
        length = name_1.length;
    }
    return { value: value, hasQuestion: hasQuestion, length: length + 1 };
};
var countIgnored = function (text) {
    var length = text.length;
    var cursor = 0;
    var isLineComment = false;
    var isMultiComment = false;
    while (cursor < length) {
        var _a = __read(text.slice(cursor), 3), first = _a[0], second = _a[1], third = _a[2];
        if (isLineComment) {
            if (first === '\n') {
                isLineComment = false;
            }
        }
        else if (isMultiComment) {
            if ("".concat(first).concat(second) === '*/') {
                cursor += 1;
                isMultiComment = false;
            }
        }
        else if ("".concat(first).concat(second).concat(third) === '/**') {
            break;
        }
        else if ("".concat(first).concat(second) === '//') {
            isLineComment = true;
            cursor += 1;
        }
        else if ("".concat(first).concat(second) === '/*') {
            isMultiComment = true;
            cursor += 1;
        }
        else if (/[^ \r\n;,]/.test(first)) {
            break;
        }
        cursor += 1;
    }
    return cursor;
};
var parseDoc = function (text) {
    if (!text.startsWith('/**'))
        return;
    var endsIndex = text.indexOf('*/') + 2;
    return {
        values: text
            .split(/(\r?\n? +)?\*\//)[0]
            .replace(/^\/\*\*(\r?\n +\*)? ?/, '')
            .split(/\r?\n +\* ?/),
        length: endsIndex + countIgnored(text.slice(endsIndex))
    };
};
var parseTypeName = function (text) {
    var length = text.length;
    var value = '';
    var cursor = 0;
    while (!countIgnored(text.slice(cursor)) && !openRegExp.test(text[cursor]) && cursor < length) {
        value += text[cursor];
        cursor += 1;
    }
    return { value: value, length: cursor };
};
var parseObject = function (text) {
    var length = text.length;
    var value = '';
    var cursor = 0;
    var indentLevel = 0;
    while (cursor < length) {
        var char = text[cursor];
        if (quoteRegExp.test(char)) {
            var val = parseString(text.slice(cursor));
            value += val.value;
            cursor += val.length;
        }
        else {
            if (openRegExp.test(char))
                indentLevel += 1;
            else if (closeRegExp.test(char))
                indentLevel -= 1;
            value += char;
            cursor += 1;
        }
        cursor += countIgnored(text.slice(cursor));
        if (!indentLevel)
            break;
    }
    return { value: value, length: cursor };
};
var parseTaple = function (text) {
    var cursor = 1; // '['
    var length = text.length;
    var propsList = [];
    while (text[cursor] !== ']' && cursor < length) {
        var props = {};
        cursor += countIgnored(text.slice(cursor)) + 1; // '{'
        cursor += countIgnored(text.slice(cursor));
        while (text[cursor] !== '}' && cursor < length) {
            var prop = parseProp(text.slice(cursor));
            cursor += prop.length;
            props[prop.name] = prop.value;
        }
        cursor += 1; // '}'
        cursor += countIgnored(text.slice(cursor));
        propsList.push(props);
    }
    cursor += countIgnored(text.slice(cursor));
    cursor += 1; // ']'
    return { value: propsList, length: cursor + countIgnored(text.slice(cursor)) };
};
var parseProp = function (text) {
    var cursor = 0;
    var doc = parseDoc(text);
    if (doc) {
        cursor += doc.length;
    }
    var length = text.length;
    var name = parseName(text.slice(cursor));
    cursor += name.length;
    if (name.value === 'polymorph') {
        cursor += countIgnored(text.slice(cursor));
        var val = parseTaple(text.slice(cursor));
        return { name: 'polymorph', value: val.value, length: cursor + val.length };
    }
    var prop = { value: '', hasQuestion: name.hasQuestion, doc: doc === null || doc === void 0 ? void 0 : doc.values };
    while (cursor < length) {
        cursor += countIgnored(text.slice(cursor));
        if (operatorRegExp.test(text[cursor])) {
            prop.value += text[cursor];
            cursor += 1;
            cursor += countIgnored(text.slice(cursor));
        }
        var char = text[cursor];
        if (quoteRegExp.test(char)) {
            var val = parseString(text.slice(cursor));
            prop.value += val.value;
            cursor += val.length;
        }
        else {
            var typeName = parseTypeName(text.slice(cursor));
            prop.value += typeName.value;
            cursor += typeName.length;
            if (openRegExp.test(text[cursor])) {
                var val = parseObject(text.slice(cursor));
                prop.value += val.value;
                cursor += val.length;
            }
        }
        cursor += countIgnored(text.slice(cursor));
        if (text.slice(cursor, cursor + 2) === '[]') {
            cursor += 2;
            cursor += countIgnored(text.slice(cursor));
        }
        if (!operatorRegExp.test(text[cursor]))
            break;
    }
    return { name: name.value, value: prop, length: cursor };
};
var parseMethod = function (text) {
    var cursor = 0;
    var doc = parseDoc(text);
    if (doc) {
        cursor += doc.length;
    }
    var length = text.length;
    var methodName = parseName(text.slice(cursor));
    cursor += methodName.length;
    var props = {};
    cursor += countIgnored(text.slice(cursor)) + 1; // '{'
    cursor += countIgnored(text.slice(cursor));
    while (text[cursor] !== '}' && cursor < length) {
        var prop = parseProp(text.slice(cursor));
        cursor += prop.length;
        props[prop.name] = prop.value;
    }
    cursor += 1; // '}'
    return {
        value: { name: methodName.value, props: props, doc: doc === null || doc === void 0 ? void 0 : doc.values },
        length: cursor
    };
};
var parseMethods = function (text) {
    var length = text.length;
    var methods = [];
    var cursor = 0;
    while (cursor < length) {
        cursor += countIgnored(text.slice(cursor));
        if (text[cursor] === '}')
            break;
        var method = parseMethod(text.slice(cursor));
        cursor += method.length;
        methods.push(method.value);
    }
    return { methods: methods, cursor: cursor };
};
var parse = function (text, name) {
    var _a;
    var interfaceRegExp = new RegExp("(^|\r?\n)(export[\\s]*)(interface[\\s]*".concat(name, "|type[\\s]*").concat(name, "[\\s]*=[\\s]*(\\w+<)?)(\\s?{)"));
    if (!interfaceRegExp.test(text))
        return null;
    var _b = __read(text.split(interfaceRegExp)), d = _b[0], m = _b.slice(1);
    var _c = parseMethods(m[m.length - 1]), methods = _c.methods, cursor = _c.cursor;
    var docText = d.slice(d.lastIndexOf('/**'));
    return methods.length
        ? {
            methods: methods,
            doc: /\/\*\*[\s\S]+\*\/$/.test(d) ? (_a = parseDoc(docText)) === null || _a === void 0 ? void 0 : _a.values : undefined,
            $textForApiTypes: "".concat(docText).concat(m.slice(0, -1).join('')).concat(m[m.length - 1].slice(0, cursor + 1))
        }
        : null;
};
exports.parse = parse;
//# sourceMappingURL=parseInterface.js.map