"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (config) { return ({
    path: config.url || '',
    method: (config.method || 'get').toUpperCase(),
    query: config.params,
    reqBody: config.data,
    reqHeaders: config.headers
}); });
//# sourceMappingURL=toMockConfig.js.map