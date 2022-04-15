"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (mockRes, config) { return ({
    status: mockRes.status,
    statusText: "".concat(mockRes.status),
    data: mockRes.resBody,
    headers: mockRes.resHeaders,
    config: config
}); });
//# sourceMappingURL=toAxiosResponse.js.map