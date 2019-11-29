"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WampErrorException = (function () {
    function WampErrorException(errorUri, args, argskw, details) {
        if (args === void 0) { args = []; }
        if (argskw === void 0) { argskw = {}; }
        if (details === void 0) { details = {}; }
        this.errorUri = errorUri;
        this.args = args;
        this.argskw = argskw;
        this.details = details;
        this.name = 'WAMP Error';
        this.message = errorUri;
    }
    return WampErrorException;
}());
exports.WampErrorException = WampErrorException;
//# sourceMappingURL=WampErrorException.js.map