"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnregisteredMessage = (function () {
    function UnregisteredMessage(_requestId) {
        this._requestId = _requestId;
    }
    UnregisteredMessage.prototype.wampifiedMsg = function () {
        return [UnregisteredMessage.MSG_UNREGISTERED, this._requestId];
    };
    Object.defineProperty(UnregisteredMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    UnregisteredMessage.prototype.msgCode = function () {
        return UnregisteredMessage.MSG_UNREGISTERED;
    };
    UnregisteredMessage.MSG_UNREGISTERED = 67;
    return UnregisteredMessage;
}());
exports.UnregisteredMessage = UnregisteredMessage;
//# sourceMappingURL=UnregisteredMessage.js.map