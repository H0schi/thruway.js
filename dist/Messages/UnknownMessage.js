"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnknownMessage = (function () {
    function UnknownMessage() {
    }
    UnknownMessage.prototype.wampifiedMsg = function () {
        return undefined;
    };
    UnknownMessage.prototype.msgCode = function () {
        return UnknownMessage.MSG_UNKNOWN;
    };
    UnknownMessage.MSG_UNKNOWN = 0;
    return UnknownMessage;
}());
exports.UnknownMessage = UnknownMessage;
//# sourceMappingURL=UnknownMessage.js.map