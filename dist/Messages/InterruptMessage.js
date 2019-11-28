"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InterruptMessage = (function () {
    function InterruptMessage(_requestId, _options) {
        this._requestId = _requestId;
        this._options = _options;
    }
    InterruptMessage.prototype.wampifiedMsg = function () {
        return [InterruptMessage.MSG_INTERRUPT, this._requestId, this._options];
    };
    Object.defineProperty(InterruptMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InterruptMessage.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    InterruptMessage.prototype.msgCode = function () {
        return InterruptMessage.MSG_INTERRUPT;
    };
    InterruptMessage.MSG_INTERRUPT = 69;
    return InterruptMessage;
}());
exports.InterruptMessage = InterruptMessage;
//# sourceMappingURL=InterruptMessage.js.map